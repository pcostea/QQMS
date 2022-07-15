--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

/*
 * Create underlying table infrastructure
 */

--changeset dragos-constantin-stoica:61001 runAlways:true runOnChange:true  labels:delete-corporation context:issue61
DROP TABLE IF EXISTS corporation CASCADE;

--changeset dragos-constantin-stoica:61002 runAlways:true runOnChange:true labels:create-corporation context:issue61
create table corporation (
    uid serial primary key not null,
    name varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint uq_name UNIQUE(name)
);
--rollback DROP TABLE corporation;

/*
 * Create strored procedures
 */

--changeset dragos-constantin-stoica:61003 runAlways:true runOnChange:true labels:create-newcorporation context:issue61
DROP PROCEDURE IF EXISTS newcorporation;

--changeset dragos-constantin-stoica:61004 runAlways:true runOnChange:true endDelimiter:"" labels:create-newcorporation context:issue61
create or replace procedure newcorporation(
   corporation_name varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO corporation(name, timestamp, valid_from, valid_until)
    VALUES(corporation_name, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_name DO NOTHING;
end;$$
--rollback DROP PROCEDURE newcorporation;

--changeset dragos-constantin-stoica:61005 runAlways:true runOnChange:true labels:set-validuntil context:issue61
DROP PROCEDURE IF EXISTS setcorpoationvaliduntil;

--changeset dragos-constantin-stoica:61006 runAlways:true runOnChange:true endDelimiter:"" labels:set-validuntil context:issue61
create or replace procedure setcorpoationvaliduntil(
   corporation_name varchar(255), 
   corporation_valid_until timestamp
)
language plpgsql
as $$
begin
    UPDATE corporation SET valid_until = corporation_valid_until WHERE name = corporation_name;
end;$$
--rollback DROP PROCEDURE setcorpoationvaliduntil;

--changeset dragos-constantin-stoica:61007 runAlways:true runOnChange:true labels:delete-corporation context:issue61
DROP PROCEDURE IF EXISTS delcorpoation;

--changeset dragos-constantin-stoica:61008 runAlways:true runOnChange:true endDelimiter:"" labels:delete-corporation context:issue61
create or replace procedure delcorpoation(
   corporation_name varchar(255)
)
language plpgsql
as $$
begin
    CALL setcorpoationvaliduntil(corporation_name, LOCALTIMESTAMP);
end;$$
--rollback DROP PROCEDURE delcorpoation;


/*
 * Insert test data into tables
 */

--changeset dragos-constantin-stoica:61009 runAlways:true runOnChange:true labels:insert-data-into-corporation context:issue61
CALL newcorporation('ACME');
CALL newcorporation('FED');
CALL newcorporation('ECB');

--changeset dragos-constantin-stoica:61010 runAlways:true runOnChange:true labels:delete-data-from-corporation context:issue61
CALL delcorpoation('ACME');
