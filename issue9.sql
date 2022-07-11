--changeset Eugeniu&Eugen:1 labels:issue9 context:create-ERCSA table

create table ERCSA (
    corporation_id integer, 
     constraint ERCSA_fkey
      foreign key(corporation_id)
       references corporation(uid),
    uid serial primary key  not null,
    type varchar(25), 
    name varchar(50) not null,
    short_name varchar(25) not null,
    timestamp timestamp,
    valid_from date,
    valid_until date
)

--rollback DROP TABLE ERCSA;
