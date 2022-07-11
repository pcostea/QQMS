--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

--changeset dragos-constantin-stoica:12002 labels:delete-transation_value context:issue12
DROP TABLE transaction_value;

--changeset dragos-constantin-stoica:12003 labels:new-vesrion-transation_value context:issue12
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
