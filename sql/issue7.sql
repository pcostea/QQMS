--liquibase formatted sql
/* https://www.liquibase.org/documentation/sql_format.html */

--changeset MaxCiumer:1 labels:issue7 context:create-risk_type
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