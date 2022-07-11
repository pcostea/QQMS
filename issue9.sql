--changeset Eugeniu&Eugen:9002 labels:issue9 context:drop-ERCSA table

rollback DROP TABLE ERCSA;

--changeset Eugeniu&Eugen:9003 labels:issue9 context:newversion-ERCSA table

create table ERCSA (
    corporation_id integer not null, 
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


