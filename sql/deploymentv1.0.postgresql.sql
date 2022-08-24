--liquibase formatted sql

--changeset tony:001 labels:Issue4 Correction context:Issue4 - Corporation table correction
create table corporation (
    uid serial primary key, --auto_increment not null,
    name varchar(50) not null,
    timestamp timestamp not null,
    valid_from date not null,
    valid_until date not null
)
--rollback DROP TABLE corporation;

--changeset MaxCiumer:002 labels:issue7 context:create-risk_type
-- corporation table need to be created first
create table risk_type (
    uid serial primary key not null,
	corporation_id integer,
    constraint risk_type_fkey
        foreign key(corporation_id)
            references corporation(uid),
    name varchar(50) not null,
    short_name varchar(25),
    timestamp timestamp,
    valid_from date,
    valid_until date
)

--rollback DROP TABLE risk_type;

--changeset Otello:003 labels:issue8 context:create-product
-- corporation table need to be created first
create table product (
    uid serial primary key not null,
    corporation_id integer not null,
    constraint product_fkey
        foreign key(corporation_id)
            references corporation(uid),
    name varchar(50) not null,
    short_name varchar(25),
    book varchar(250),
    "timestamp" timestamp,
    valid_from date,
    valid_until date
)

--rollback DROP TABLE product;

--changeset Eugeniu&Eugen:004 labels:issue9 context:newversion-ERCSA table

create table ERCSA (
    corporation_id integer not null, 
     constraint ERCSA_fkey
      foreign key(corporation_id)
       references corporation(uid),
    uid serial primary key  not null,
    type varchar(25), 
    name varchar(50) not null,
    short_name varchar(25) not null,
    timestamp timestamp,
    valid_from date,
    valid_until date
)
--rollback DROP TABLE ERCSA;


--changeset AlecuD:005 labels:issue10 context:create-EUF
-- corporation table need to be created first
create table EUF (
    uid serial primary key not null,
	corporation_id integer,
    constraint EUF_fkey
        foreign key(corporation_id)
           references corporation(uid),
    component varchar(50),
    service varchar(50),
    timestamp timestamp,
    valid_from date,
    valid_until date
)

--rollback DROP TABLE EUF;

--changeset dragos-constantin-stoica:006 labels:new-vesrion-transation_value context:issue12
create table transaction_value (
    product_id integer not null,
    uid serial primary key not null,
    value double precision not null,
    currency char(3),
    timestamp timestamp,
    constraint product_fkey
        foreign key(product_id)
            references product(uid)
)
--rollback DROP TABLE transaction_value;

