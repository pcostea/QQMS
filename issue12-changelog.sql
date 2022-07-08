--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

--changeset dragos-constantin-stoica:12001 labels:create-transation_value context:issue12
--comment: TODO add product_id column fk when product table is deployed
/* Insert SQL change objects here */
create table transaction_value (
    uid serial primary key not null,
    value double precision not null,
    currency char(3),
    timestamp timestamp
)
--rollback DROP TABLE transaction_value;
