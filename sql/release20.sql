--liquibase formatted sql

--changeset dragos-constantin-stoica:61001 runAlways:true runOnChange:true  labels:delete-corporation context:issue61
DROP TABLE IF EXISTS corporation CASCADE;

--changeset dragos-constantin-stoica:61002 runAlways:true runOnChange:true labels:create-corporation context:issue61
create table corporation (
    uid serial primary key not null,
    corporationname varchar(255) not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint uq_name UNIQUE(corporationname)
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
    risktypename varchar(50) not null,
    risktypeshortname varchar(6),
    ts timestamp,
    valid_from date,
    valid_until date,
	CONSTRAINT uq_risktype UNIQUE(corporation_id, risktypename, risktypeshortname)
);
--rollback DROP TABLE risk_type;

--changeset max:64003 runAlways:true runOnChange:true  labels:delete-product context:issue64
DROP TABLE IF EXISTS product CASCADE;

--changeset dragos-constantin-stoica:64004 runAlways:true runOnChange:true labels:create-product context:issue64
create table product (
    uid serial primary key not null,
    corporation_id integer not null,
    productname varchar(255) not null,
    productshortname varchar(255) not null,
    book varchar(255) not null,
    ts timestamp not null,
    valid_from timestamp not null,
    valid_until timestamp,
    constraint corporation_fkey
        foreign key(corporation_id)
            references corporation(uid),
    constraint uq_product UNIQUE(corporation_id, productname, productshortname, book)
);
--rollback DROP TABLE product;

--changeset dragos-constantin-stoica:71003 runAlways:true runOnChange:true labels:delete-business_component context:issue71
DROP TABLE IF EXISTS business_component CASCADE;

--changeset dragos-constantin-stoica:71004 runAlways:true runOnChange:true labels:create-business_component context:issue71
create table business_component (
    uid serial primary key,
    corporation_id integer not null,
    businesscomponentversion varchar(255) not null,
    component varchar(255) not null,
    service varchar(255) not null,
    businesscomponentshortname varchar(6) not null,
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
            references application_user(uid),
    constraint uq_mapping UNIQUE(business_component_id, application_user_id)
);
--rollback DROP TABLE user_to_business_component_mapping;

--changeset max:67001 runAlways:true runOnChange:true  labels:delete-transaction_value context:issue67
DROP TABLE IF EXISTS transaction_value CASCADE;

--changeset dragos-constantin-stoica:67002 runAlways:true runOnChange:true labels:create-transaction_value context:issue67
create table transaction_value (
    uid serial primary key not null,
    product_id integer not null,
    monetaryvalue money not null,
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
    ercsatype varchar(255) not null,
    ercsaname varchar(255) not null,
    ercsashortname varchar(6) not null,
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
    eufvalue integer not null,
    eufversion varchar(6) not null,
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
    ts timestamp not null,
    constraint business_component_ercsa_fkey
        foreign key(business_component_ercsa_id)
            references business_component_ercsa(uid),
    constraint application_user_fkey
        foreign key(application_user_id)
            references application_user(uid)

);
--rollback DROP TABLE ercsa_response;
