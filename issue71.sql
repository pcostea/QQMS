--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

/*
 * Create underlying table infrastructure
 */

--changeset dragos-constantin-stoica:71001 runAlways:true runOnChange:true  labels:delete-corporation context:issue71
DROP TABLE IF EXISTS corporation CASCADE;

--changeset dragos-constantin-stoica:71002 runAlways:true runOnChange:true labels:create-corporation context:issue71
create table corporation (
    uid serial primary key not null,
    name varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp
);
--rollback DROP TABLE corporation;

--changeset dragos-constantin-stoica:71003 runAlways:true runOnChange:true labels:delete-business_component context:issue71
DROP TABLE IF EXISTS business_component CASCADE;

--changeset dragos-constantin-stoica:71004 runAlways:true runOnChange:true labels:create-business_component context:issue71
create table business_component (
    uid serial primary key,
    corporation_id integer not null,
    version varchar(255) not null,
    component varchar(255) not null,
    service varchar(255) not null,
    timestamp timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint corporation_fkey
        foreign key(corporation_id)
            references corporation(uid)
);
--rollback DROP TABLE business_component;


--changeset dragos-constantin-stoica:71005 runAlways:true runOnChange:true labels:delete-application_user context:issue71
DROP TABLE IF EXISTS application_user CASCADE;

--changeset dragos-constantin-stoica:71006 runAlways:true runOnChange:true labels:create-application_user context:issue71
create table application_user (
    uid serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    status varchar(255) not null,
    created timestamp not null,
    last_login timestamp,
    constraint uq_email UNIQUE(email)
);
--rollback DROP TABLE application_user;

--changeset dragos-constantin-stoica:71007 runAlways:true runOnChange:true labels:delete-user_to_business_component_mapping context:issue71
DROP TABLE IF EXISTS user_to_business_component_mapping;

--changeset dragos-constantin-stoica:71008 runAlways:true runOnChange:true labels:create-user_to_business_component_mapping context:issue71
create table user_to_business_component_mapping (
    uid serial primary key,
    business_component_id integer not null,
    application_user_id integer not null,
    constraint business_component_fkey
        foreign key(business_component_id)
            references business_component(uid),
    constraint application_user_fkey
        foreign key(application_user_id)
            references application_user(uid),
    constraint uq_mapping UNIQUE(business_component_id, application_user_id)
);
--rollback DROP TABLE user_to_business_component_mapping;



/*
 * Create strored procedures
 */

--changeset dragos-constantin-stoica:71009 runAlways:true runOnChange:true labels:create-newuser context:issue71
DROP PROCEDURE IF EXISTS newapplicationuser;

--changeset dragos-constantin-stoica:71010 runAlways:true runOnChange:true endDelimiter:"" labels:create-newuser context:issue71
create or replace procedure newapplicationuser(
   user_name varchar(255),
   user_email varchar(255), 
   user_password varchar(255)
)
language plpgsql
as $$
begin
    -- create new user only if the combination business componente, email does not exist
    INSERT INTO application_user(name, email, password, status, created)
    VALUES(user_name, user_email, user_password, 'new',  NOW())
    ON CONFLICT ON CONSTRAINT uq_email DO NOTHING;
end;$$
--rollback DROP PROCEDURE newapplicationuser;

--changeset dragos-constantin-stoica:71011 runAlways:true runOnChange:true labels:create-newuser context:issue71
DROP FUNCTION IF EXISTS getbusinesscomponentbycompanyname;

--changeset dragos-constantin-stoica:71012 runAlways:true runOnChange:true endDelimiter:"" labels:create-newuser context:issue71
create or replace function getbusinesscomponentbycompanyname(
   company_name varchar(255),
   business_component_component varchar(255), 
   business_component_service varchar(255)
) RETURNS integer
language plpgsql
AS $$
DECLARE business_component_uid integer;
begin
    SELECT business_component.uid INTO business_component_uid FROM business_component 
    WHERE corporation_id = ( SELECT uid FROM corporation WHERE name = company_name ) 
        AND valid_until IS NULL 
        AND component = business_component_component 
        AND service = business_component_service;
        RETURN business_component_uid;
end;
$$
--rollback DROP FUNCTION getbusinesscomponentbycompanyname;


--changeset dragos-constantin-stoica:71013 runAlways:true runOnChange:true labels:get-user context:issue71
DROP FUNCTION IF EXISTS getuser;

--changeset dragos-constantin-stoica:71014 runAlways:true runOnChange:true endDelimiter:"" labels:get-user context:issue71
create or replace function getuser(
   user_email varchar(255) 
) RETURNS application_user
language sql
as $$
    SELECT * FROM application_user WHERE email = user_email;
$$;
--rollback DROP FUNCTION getuser;
--use this function in a stamement like SELECT * FROM getuser('email_address');

--changeset dragos-constantin-stoica:71015 runAlways:true runOnChange:true labels:set-status context:issue71
DROP PROCEDURE IF EXISTS setuserstaus;

--changeset dragos-constantin-stoica:71016 runAlways:true runOnChange:true endDelimiter:"" labels:set-status context:issue71
create or replace procedure setuserstaus(
   user_email varchar(255), 
   user_status varchar(255)
)
language plpgsql
as $$
begin
    -- update user status and does nothing if user does not exist
    UPDATE application_user SET status = user_status WHERE email = user_email;
end;$$
--rollback DROP PROCEDURE setuserstaus;

--changeset dragos-constantin-stoica:71017 runAlways:true runOnChange:true labels:set-password context:issue71
DROP PROCEDURE IF EXISTS setuserpassword;

--changeset dragos-constantin-stoica:71018 runAlways:true runOnChange:true endDelimiter:"" labels:set-password context:issue71
create or replace procedure setuserpassword(
   user_email varchar(255), 
   user_password varchar(255)
)
language plpgsql
as $$
begin
    -- update user password and does nothing if user does not exist
    UPDATE application_user SET password = user_password WHERE email = user_email;
end;$$
--rollback DROP PROCEDURE setuserpassword;


--changeset dragos-constantin-stoica:71019 runAlways:true runOnChange:true labels:set-lastlogin context:issue71
DROP PROCEDURE IF EXISTS setuserlogin;

--changeset dragos-constantin-stoica:71020 runAlways:true runOnChange:true endDelimiter:"" labels:set-lastlogin context:issue71
create or replace procedure setuserlogin(
   user_email varchar(255)
)
language plpgsql
as $$
begin
    -- update user password and does nothing if user does not exist
    UPDATE application_user SET last_login = NOW() WHERE email = user_email;
end;$$
--rollback DROP PROCEDURE setuserlogin;


--changeset dragos-constantin-stoica:71021 runAlways:true runOnChange:true labels:set-usertobusinesscomponent context:issue71
DROP PROCEDURE IF EXISTS setusertobusinesscomponent;

--changeset dragos-constantin-stoica:71022 runAlways:true runOnChange:true endDelimiter:"" labels:set-usertobusinesscomponent context:issue71
create or replace procedure setusertobusinesscomponent(
   corporation_name varchar(255),
   business_component_component varchar(255),
   business_component_service varchar(255),
   user_email varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO user_to_business_component_mapping(business_component_id, application_user_id)
    VALUES( getbusinesscomponentbycompanyname(corporation_name, business_component_component, business_component_service), 
    (SELECT application_user_id FROM application_user WHERE email = user_email)
    )
    ON CONFLICT ON CONSTRAINT uq_mapping DO NOTHING;
end;$$
--rollback DROP PROCEDURE setusertobusinesscomponent;




/*
 * Insert test data into tables
 */

--changeset dragos-constantin-stoica:71023 runAlways:true runOnChange:true labels:insert-data-into-corporation context:issue71
INSERT INTO corporation(name, timestamp, valid_from, valid_until)
    VALUES('ACME', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null);

--changeset dragos-constantin-stoica:71024 runAlways:true runOnChange:true labels:insert-data-into-business_component context:issue71
INSERT INTO business_component(corporation_id, version, component, service, timestamp, valid_from, valid_until)
    VALUES((SELECT uid FROM corporation WHERE name = 'ACME'), '1', 'Transaction Processing (Operations)', 'Product and Service Pricing', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null);
INSERT INTO business_component(corporation_id, version, component, service, timestamp, valid_from, valid_until)
    VALUES((SELECT uid FROM corporation WHERE name = 'ACME'), '1', 'Transaction Processing (Operations)', 'Deal Structuring', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null);
INSERT INTO business_component(corporation_id, version, component, service, timestamp, valid_from, valid_until)
    VALUES((SELECT uid FROM corporation WHERE name = 'ACME'), '1', 'Transaction Processing (Operations)', 'Pre-Trade/Deal Validation', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null);
commit;

--changeset dragos-constantin-stoica:71025 runAlways:true runOnChange:true labels:insert-data-into-application_user context:issue71
CALL newapplicationuser('Dragos Stoica', 'dragos.constantin.stoica@gmail.com', md5('parola1234'));
CALL newapplicationuser('Dragos Stoica', 'dragos.constantin.stoica@gmail.com', md5('parola1234'));
CALL newapplicationuser('Dragos Stoica', 'dragos.constantin.stoica@gmail.com', md5('parola1234'));
