--liquibase formatted sql

--changeset other.dev:20 labels:example-label context:example-context
--comment: example comment

create table Corporation (
    uid int primary key, --auto_increment not null,
    name varchar(50) not null,
    timestamp date not null,
    valid_from date not null,
    valid_until date not null
)