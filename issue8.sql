-- liquibase formatted sql changeLogId:e3dbe930-ca63-4ef1-9162-d68033390fc6

--changeset Otello:1 labels:issue8 context:create-product
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