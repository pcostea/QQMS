--liquibase formatted sql

--changeset other.dev:22 labels:Issue4 Correction context:Issue4 - Corporation table correction
--comment: example comment

create table Corporation (
    uid serial primary key, --auto_increment not null,
    name varchar(50) not null,
    timestamp timestamp not null,
    valid_from date not null,
    valid_until date not null
)