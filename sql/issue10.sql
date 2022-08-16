-- liquibase formatted sql changeLogId:e3dbe930-ca63-4ef1-9162-d68033390fc6

--changeset AlecuD:10001 labels:issue10 context:create-EUF
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