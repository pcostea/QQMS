--liquibase formatted sql

/****************************

  create operational tables

****************************/


--changeset dragos-constantin-stoica:61001 runAlways:true runOnChange:true  labels:delete-corporation context:issue61
DROP TABLE IF EXISTS corporation CASCADE;

--changeset dragos-constantin-stoica:61002 runAlways:true runOnChange:true labels:create-corporation context:issue61
create table corporation (
    uid serial primary key not null,
    name varchar(255) not null,
    ts timestamp not null,
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
    shortname varchar(6),
    ts timestamp,
    valid_from date,
    valid_until date,
	CONSTRAINT uq_risktype UNIQUE(corporation_id, name, shortname)
);
--rollback DROP TABLE risk_type;

--changeset max:64003 runAlways:true runOnChange:true  labels:delete-product context:issue64
DROP TABLE IF EXISTS product CASCADE;

--changeset dragos-constantin-stoica:64004 runAlways:true runOnChange:true labels:create-product context:issue64
create table product (
    uid serial primary key not null,
    corporation_id integer not null,
    name varchar(255) not null,
    shortname varchar(255) not null,
    book varchar(255) not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint corporation_fkey
        foreign key(corporation_id)
            references corporation(uid),
    constraint uq_product UNIQUE(corporation_id, name, shortname, book)
);
--rollback DROP TABLE product;

--changeset dragos-constantin-stoica:71003 runAlways:true runOnChange:true labels:delete-business_component context:issue71
DROP TABLE IF EXISTS business_component CASCADE;

--changeset dragos-constantin-stoica:71004 runAlways:true runOnChange:true labels:create-business_component context:issue71
create table business_component (
    uid serial primary key,
    corporation_id integer not null,
    version varchar(255) not null,
    component varchar(255) not null,
    service varchar(255) not null,
    shortname varchar(6) not null,
    ts timestamp not null,
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
    username varchar(255) not null,
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
            references application_user(uid)
);
--rollback DROP TABLE user_to_business_component_mapping;

--changeset max:67001 runAlways:true runOnChange:true  labels:delete-transaction_value context:issue67
DROP TABLE IF EXISTS transaction_value CASCADE;

--changeset dragos-constantin-stoica:67002 runAlways:true runOnChange:true labels:create-transaction_value context:issue67
create table transaction_value (
    uid serial primary key not null,
    product_id integer not null,
    value money not null,
    currency varchar(3) not null,
    ts timestamp not null,
    constraint product_fkey
        foreign key(product_id)
            references product(uid)
);
--rollback DROP TABLE transaction_value;


--changeset dragos-constantin-stoica:65001 runAlways:true runOnChange:true labels:delete-ercsa context:issue65
DROP TABLE IF EXISTS ercsa CASCADE;

--changeset dragos-constantin-stoica:65002 runAlways:true runOnChange:true labels:create-ercsa context:issue65
create table ercsa (
    uid serial primary key,
    corporation_id integer not null,
    type varchar(255) not null,
    name varchar(255) not null,
    shortname varchar(6) not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint corporation_fkey
        foreign key(corporation_id)
            references corporation(uid)
);
--rollback DROP TABLE ercsa;

--changeset dragos-constantin-stoica:66001 runAlways:true runOnChange:true labels:delete-euf context:issue66
DROP TABLE IF EXISTS euf CASCADE;

--changeset dragos-constantin-stoica:66002 runAlways:true runOnChange:true labels:create-euf context:issue66
create table euf (
    uid serial primary key,
    product_id integer not null,
    risk_type_id integer not null,
    value integer not null,
    version varchar(6) not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint product_fkey
        foreign key(product_id)
            references product(uid),
    constraint risk_type_fkey
        foreign key(risk_type_id)
            references risk_type(uid)

);
--rollback DROP TABLE euf;

--changeset dragos-constantin-stoica:68001 runAlways:true runOnChange:true labels:delete-business_component_product context:issue68
DROP TABLE IF EXISTS business_component_product CASCADE;

--changeset dragos-constantin-stoica:68002 runAlways:true runOnChange:true labels:create-business_component_product context:issue68
create table business_component_product (
    uid serial primary key,
    product_id integer not null,
    business_component_id integer not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint product_fkey
        foreign key(product_id)
            references product(uid),
    constraint business_component_fkey
        foreign key(business_component_id)
            references business_component(uid)

);
--rollback DROP TABLE business_component_product;

--changeset dragos-constantin-stoica:69001 runAlways:true runOnChange:true labels:delete-business_component_ercsa context:issue69
DROP TABLE IF EXISTS business_component_ercsa CASCADE;

--changeset dragos-constantin-stoica:69002 runAlways:true runOnChange:true labels:create-business_component_ercsa context:issue69
create table business_component_ercsa (
    uid serial primary key,
    ercsa_id integer not null,
    business_component_id integer not null,
    weight integer not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint ercsa_fkey
        foreign key(ercsa_id)
            references ercsa(uid),
    constraint business_component_fkey
        foreign key(business_component_id)
            references business_component(uid)

);
--rollback DROP TABLE business_component_ercsa;

--changeset dragos-constantin-stoica:70001 runAlways:true runOnChange:true labels:delete-ercsa_response context:issue70
DROP TABLE IF EXISTS ercsa_response CASCADE;

--changeset dragos-constantin-stoica:70002 runAlways:true runOnChange:true labels:create-ercsa_response context:issue70
create table ercsa_response (
    uid serial primary key,
    business_component_ercsa_id integer not null,
    application_user_id integer not null,
    response jsonb not null,
    status varchar(60) not null,
    ts timestamp not null,
    constraint business_component_ercsa_fkey
        foreign key(business_component_ercsa_id)
            references business_component_ercsa(uid),
    constraint application_user_fkey
        foreign key(application_user_id)
            references application_user(uid)

);
--rollback DROP TABLE ercsa_response;

/************************

create master data tables

*************************/

--changeset dragos-constantin-stoica:76001 runAlways:true runOnChange:true labels:delete-md_business_component context:issue76
DROP TABLE IF EXISTS md_business_component CASCADE;

--changeset dragos-constantin-stoica:76002 runAlways:true runOnChange:true labels:create-md_business_component context:issue76
create table md_business_component (
    component varchar(255) not null,
    service varchar(255) not null,
    shortname varchar(6) not null
);
--rollback DROP TABLE md_business_component;


--changeset max:77001 runAlways:true runOnChange:true  labels:delete-md_product context:issue77
DROP TABLE IF EXISTS md_product CASCADE;

--changeset dragos-constantin-stoica:77002 runAlways:true runOnChange:true labels:create-md_product context:issue77
create table md_product (
    name varchar(255) not null,
    shortname varchar(6) not null,
    book varchar(255) not null
);
--rollback DROP TABLE md_product;

--changeset max:78001 runAlways:true runOnChange:true  labels:delete-md_risk_type context:issue78
DROP TABLE IF EXISTS md_risk_type CASCADE;

--changeset max:78002 runAlways:true runOnChange:true labels:create-md_risk_type context:issue78
create table md_risk_type (
    name varchar(50) not null,
    shortname varchar(6)
);
--rollback DROP TABLE md_risk_type;


--changeset dragos-constantin-stoica:79001 runAlways:true runOnChange:true labels:delete-md_ercsa context:issue79
DROP TABLE IF EXISTS md_ercsa CASCADE;

--changeset dragos-constantin-stoica:79002 runAlways:true runOnChange:true labels:create-md_ercsa context:issue79
create table md_ercsa (
    type varchar(255) not null,
    name varchar(255) not null,
    shortname varchar(6) not null
);
--rollback DROP TABLE md_ercsa;

--changeset dragos-constantin-stoica:80001 runAlways:true runOnChange:true labels:delete-md_euf context:issue80
DROP TABLE IF EXISTS md_euf CASCADE;

--changeset dragos-constantin-stoica:80002 runAlways:true runOnChange:true labels:create-md_euf context:issue80
create table md_euf (
    product_shortname varchar(6) not null,
    risktype_shortname varchar(6) not null,
    value integer not null
);
--rollback DROP TABLE md_euf;

--changeset dragos-constantin-stoica:81001 runAlways:true runOnChange:true labels:delete-md_business_component_product context:issue81
DROP TABLE IF EXISTS md_business_component_product CASCADE;

--changeset dragos-constantin-stoica:81002 runAlways:true runOnChange:true labels:create-md_business_component_product context:issue81
create table md_business_component_product (
    product_shortname varchar(6) not null,
    businesscomponent_shortname varchar(6) not null    
);
--rollback DROP TABLE md_business_component_product;

--changeset dragos-constantin-stoica:82001 runAlways:true runOnChange:true labels:delete-md_business_component_ercsa context:issue82
DROP TABLE IF EXISTS md_business_component_ercsa CASCADE;

--changeset dragos-constantin-stoica:82002 runAlways:true runOnChange:true labels:create-md_business_component_ercsa context:issue82
create table md_business_component_ercsa (
    ercsa_shortname varchar(6) not null,
    businesscomponent_shortname varchar(6) not null,
    weight integer not null

);
--rollback DROP TABLE md_business_component_ercsa;


--changeset dragos-constantin-stoica:81001 runAlways:true runOnChange:true labels:delete-md_business_component_product context:issue81
DROP TABLE IF EXISTS md_business_component_product CASCADE;

--changeset dragos-constantin-stoica:81002 runAlways:true runOnChange:true labels:create-md_business_component_product context:issue81
create table md_business_component_product (
    product_shortname varchar(6) not null,
    businesscomponent_shortname varchar(6) not null    
);
--rollback DROP TABLE md_business_component_product;

--changeset dragos-constantin-stoica:82003 runAlways:true runOnChange:true labels:delete-md_application_user context:issue82
DROP TABLE IF EXISTS md_application_user CASCADE;

--changeset dragos-constantin-stoica:82004 runAlways:true runOnChange:true labels:create-md_application_user context:issue82
create table md_application_user (
    username varchar(255) not null,
    email varchar(255) not null,
    businesscomponent_shortname varchar(6) not null
);
--rollback DROP TABLE md_application_user;

/**************************

  create stored procedures
  and functions

***************************/


--changeset dragos-constantin-stoica:71013 runAlways:true runOnChange:true labels:get-user context:issue71
DROP FUNCTION IF EXISTS getuser;

--changeset dragos-constantin-stoica:71014 runAlways:true runOnChange:true endDelimiter:"" labels:get-user context:issue71
create or replace function getuser(
   user_email varchar(255),
   user_password varchar(255) 
) RETURNS json
language sql
as $$
WITH
    app_user AS (
    SELECT application_user.uid, email, application_user_id, business_component_id
    FROM application_user 
    INNER JOIN user_to_business_component_mapping as nton on nton.application_user_id = application_user.uid 
        WHERE email = user_email AND password = user_password
    ),
    bc AS (
    SELECT 
        app_user.email AS username,
        shortname AS business_component,     
        (
            select array(
                select ercsa.shortname
                from business_component_ercsa
                inner join app_user on app_user.business_component_id = business_component_ercsa.business_component_id
                inner join ercsa on business_component_ercsa.ercsa_id = ercsa.uid
                group by ercsa.shortname
            )
        ) as ercsa,
        ( select corporation.name 
        from corporation
        inner join business_component on corporation.uid = business_component.corporation_id
        group by corporation.name
        ) as corporation
    FROM business_component bc
    JOIN app_user on app_user.business_component_id = bc.uid
    GROUP BY app_user.email, shortname
    )
SELECT json_agg(bc)
FROM bc;$$;
--rollback DROP FUNCTION getuser;
--use this function in a stamement like SELECT * FROM getuser('email_address', 'user_hash_password');

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


--changeset dragos-constantin-stoica:67100 runAlways:true runOnChange:true labels:set-transactionvalue context:issue67
DROP PROCEDURE IF EXISTS settransactionvalue;

--changeset dragos-constantin-stoica:67101 runAlways:true runOnChange:true endDelimiter:"" labels:set-transactionvalue context:issue67
create or replace procedure settransactionvalue(
   iso_date varchar(10),
   product_shortname varchar(10),
   input_value money,
   input_currency varchar(3),
   corporation_name varchar(255)
)
language plpgsql
as $$
begin
    INSERT INTO transaction_value(product_id, value, currency, ts)
    VALUES ( (select product.uid from product 
        join (SELECT uid from corporation where name=corporation_name) as inc on product.corporation_id = inc.uid
        where shortname = product_shortname),
    input_value, input_currency, TO_TIMESTAMP (iso_date, 'YYYY-MM-DD'));
end;$$
--rollback DROP PROCEDURE settransactionvalue;
