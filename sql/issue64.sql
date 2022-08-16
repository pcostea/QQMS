--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

/*
 * Create underlying table infrastructure
 */

--changeset dragos-constantin-stoica:64001 runAlways:true runOnChange:true  labels:delete-corporation context:issue64
DROP TABLE IF EXISTS corporation CASCADE;

--changeset dragos-constantin-stoica:64002 runAlways:true runOnChange:true labels:create-corporation context:issue64
create table corporation (
    uid serial primary key not null,
    name varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint uq_name UNIQUE(name)
);
--rollback DROP TABLE corporation;

--changeset dragos-constantin-stoica:64003 runAlways:true runOnChange:true  labels:delete-product context:issue64
DROP TABLE IF EXISTS product CASCADE;

--changeset dragos-constantin-stoica:64004 runAlways:true runOnChange:true labels:create-product context:issue64
create table product (
    uid serial primary key not null,
    corporation_id integer not null,
    name varchar(255) not null,
    shortname varchar(255) not null,
    book varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint corporation_fkey
        foreign key(corporation_id)
            references corporation(uid),
    constraint uq_product UNIQUE(corporation_id, name, shortname, book)
);
--rollback DROP TABLE product;

/*
 * Create strored procedures
 */

--changeset dragos-constantin-stoica:64005 runAlways:true runOnChange:true labels:create-newcorporation context:issue64
DROP PROCEDURE IF EXISTS newcorporationproduct;

--changeset dragos-constantin-stoica:64006 runAlways:true runOnChange:true endDelimiter:"" labels:create-newcorporation context:issue64
create or replace procedure newcorporationproduct(
   corporation_name varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'FX Forwards', 'FXFWDS', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Commercial Loans (Secured)', 'COMLNS',	'Banking', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Fixed Term Deposits',	'FIXTDS', 'Banking', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Repos', 'REPOS', 'Banking', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Cross Currency Swaps',	'XCSWPS', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Futures', 'FUTRES', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Collateralized Debt Obligations (CDOs)', 'CDOS', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Equities',	'EQTIES', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;
 
    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Fixed Income',	'FXDINC', 'Trading', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), 'Payment Orders', 'PMTORDS', 'Banking', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING;

end;$$
--rollback DROP PROCEDURE newcorporationproduct;

--changeset dragos-constantin-stoica:64007 runAlways:true runOnChange:true labels:delete-product context:issue64
DROP PROCEDURE IF EXISTS deleteproduct;

--changeset dragos-constantin-stoica:64008 runAlways:true runOnChange:true endDelimiter:"" labels:delete-product context:issue64
create or replace procedure deleteproduct(
   corporation_name varchar(255), 
   product_name varchar(255),
   product_shortname varchar(255)
)
language plpgsql
as $$
begin
    UPDATE product SET valid_until = NOW() WHERE name = product_name AND shortname = product_shortname AND
    corporation_id = (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL);
end;$$
--rollback DROP PROCEDURE deleteproduct;

--changeset dragos-constantin-stoica:64009 runAlways:true runOnChange:true labels:new-product context:issue64
DROP PROCEDURE IF EXISTS newproduct;

--changeset dragos-constantin-stoica:64010 runAlways:true runOnChange:true endDelimiter:"" labels:new-product context:issue64
create or replace procedure newproduct(
   corporation_name varchar(255),
   product_name varchar(255),
   product_shortname varchar(255),
   product_book varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO product(corporation_id, name, shortname, book, timestamp, valid_from, valid_until)
    VALUES( (SELECT uid FROM corporation WHERE name = corporation_name AND valid_until IS NULL), product_name, product_shortname, product_book , NOW(), NOW() , null)
    ON CONFLICT ON CONSTRAINT uq_product DO NOTHING; 
end;$$
--rollback DROP PROCEDURE newproduct;


/*
 * Insert test data into tables
 */

--changeset dragos-constantin-stoica:64011 runAlways:true runOnChange:true labels:insert-data-into-corporation context:issue64
INSERT INTO corporation( name, timestamp, valid_from, valid_until) 
VALUES ('ACME', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0),null)
ON CONFLICT ON CONSTRAINT uq_name DO NOTHING;
COMMIT;

--changeset dragos-constantin-stoica:64012 runAlways:true runOnChange:true labels:insert-data-into-product context:issue64
CALL newcorporationproduct('ACME');