--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

--changeset ion-ulinici:1101 labels: issue11 context: create-table-product
--comment: TODO add corporation_id column   
/* Insert SQL change objects here */

create table product (
    uid serial primary key not null,
    name varchar(50) not null,
    short_name varchar(50),
    book varchar(50),
    timestamp timestamp,
    valid_from timestamp,
    valid_until timestamp
)

--rollback DROP TABLE product;





