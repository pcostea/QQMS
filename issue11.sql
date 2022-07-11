--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

--changeset ion-ulinici:1102 labels: issue11 context: create-business_component_product-product
--comment: TODO  
/* Insert SQL change objects here */

create table business_component_product (
    uid serial primary key not null,
    mapping varchar(50) not null,
    timestamp timestamp,
    valid_from timestamp,
    valid_until timestamp
)

--rollback DROP TABLE business_component_product;





