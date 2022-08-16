--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

/*
 * Create underlying table infrastructure
 */

--changeset max:63001 runAlways:true runOnChange:true  labels:delete-corporation context:issue63
DROP TABLE IF EXISTS corporation CASCADE;

--changeset max:63002 runAlways:true runOnChange:true labels:create-corporation context:issue63
create table corporation (
    uid serial primary key not null,
    name varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint uq_name UNIQUE(name)
);
--rollback DROP TABLE corporation;

--changeset max:63003 runAlways:true runOnChange:true  labels:delete-risk_type context:issue63
DROP TABLE IF EXISTS risk_type CASCADE;

--changeset max:63004 runAlways:true runOnChange:true labels:create-risk_type context:issue63
create table risk_type (
    uid serial primary key not null,
	corporation_id integer not NULL,
    constraint risk_type_fkey
        foreign key(corporation_id)
            references corporation(uid),
    name varchar(50) not null,
    short_name varchar(25),
    timestamp timestamp,
    valid_from date,
    valid_until date,
	CONSTRAINT uq_risktype UNIQUE(corporation_id, name, short_name)
);

--rollback DROP TABLE risk_type;

/*
 * Create strored procedures
 */

--changeset max:63005 runAlways:true runOnChange:true labels:create-newcorporationrisktype context:issue63
DROP PROCEDURE IF EXISTS newCorporationRiskType;

--changeset max:63006 runAlways:true runOnChange:true endDelimiter:"" labels:create-newcorporationrisktype context:issue63
create or replace procedure newCorporationRiskType(
   corporation_name varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Processing Risk', 'PROC', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;
	
	INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Trading Risk', 'TRAD', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;
	
	INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Lending Risk', 'LEND', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;
	
	INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Selling Risk', 'SELL', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;
	
	INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Funding Risk', 'FUND', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;
	
	INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Interst Rate Risk', 'INTR', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING;

end;$$
--rollback DROP PROCEDURE newCorporationRiskType;

--changeset max:63007 runAlways:true runOnChange:true labels:delete-risk_type context:issue63
DROP PROCEDURE IF EXISTS deleterisktype;

--changeset max:63008 runAlways:true runOnChange:true endDelimiter:"" labels:delete-risk_type context:issue63
create or replace procedure deleterisktype(
   corporation_name varchar(255), 
   risktype_name varchar(255),
   risktype_short_name varchar(255)
)
language plpgsql
as $$
begin
    UPDATE risk_type SET valid_until = NOW() WHERE name = risktype_name AND short_name = risktype_short_name AND
    corporation_id = (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL);
end;$$
--rollback DROP PROCEDURE deleterisktype;

--changeset max:63009 runAlways:true runOnChange:true labels:update-risk_type context:issue63
DROP PROCEDURE IF EXISTS updaterisktype;

--changeset max:63010 runAlways:true runOnChange:true endDelimiter:"" labels:update-risk_type context:issue63
create or replace procedure updaterisktype(
   corporation_name varchar(255), 
   risktype_name varchar(255),
   risktype_short_name varchar(255)
)
language plpgsql
as $$
begin
    UPDATE risk_type SET valid_until = NOW() WHERE name = risktype_name AND short_name = risktype_short_name AND
    corporation_id = (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL);
end;$$
--rollback DROP PROCEDURE updaterisktype;

--changeset max:63011 runAlways:true runOnChange:true labels:new-risktype context:issue63
DROP PROCEDURE IF EXISTS newrisktype;

--changeset max:63012 runAlways:true runOnChange:true endDelimiter:"" labels:new-risktype context:issue63
create or replace procedure newrisktype(
   corporation_name varchar(255), 
   risktype_name varchar(255),
   risktype_short_name varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO risk_type(corporation_id, name, short_name, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), risktype_name, risktype_short_name, NOW(), NOW() , null)
    ON CONFLICT ON CONSTRAINT uq_risktype DO NOTHING; 
end;$$
--rollback DROP PROCEDURE newrisktype;

/*
 * Insert test data into tables
 */

--changeset max:63013 runAlways:true runOnChange:true labels:insert-data-into-corporation context:issue63
INSERT INTO corporation( name, timestamp, valid_from, valid_until) 
VALUES ('ACME', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0),null)
ON CONFLICT ON CONSTRAINT uq_name DO NOTHING;
COMMIT;

--changeset max:63014 runAlways:true runOnChange:true labels:insert-data-into-risktype context:issue63
CALL newCorporationRiskType('ACME');