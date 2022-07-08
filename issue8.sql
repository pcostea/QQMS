-- liquibase formatted sql changeLogId:e3dbe930-ca63-4ef1-9162-d68033390fc6

--changeset Otello:1 labels:issue8 context:create-product

create table product (
    uid serial primary key not null,
    constraint product_fkey
        foreign key(corporation_id)
            references corporation(uid),
    name varchar(50) not null,
    short_name varchar(25),
    timestamp timestamp,
    valid_from timestamp,
    valid_until timestamp
)