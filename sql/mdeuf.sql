/******************************************

create stored procedures for master data

*******************************************/
/*
--changeset dragos-constantin-stoica:80100 runAlways:true runOnChange:true labels:set-mdeuf context:issue80
DROP PROCEDURE IF EXISTS setmdeuf;

--changeset dragos-constantin-stoica:80101 runAlways:true runOnChange:true endDelimiter:"" labels:set-mdeuf context:issue80
create or replace procedure setmdeuf(
   product_shortname varchar(6),
   risk_type_shortname varchar(6),
   eufvalue integer
)
language plpgsql
as $$
begin
    insert into md_euf(product_id, risktype_id, value) 
    with
    mdp as (select id from md_product where shortname=product_shortname),
    mdrt as (select id from md_risk_type where shortname=risk_type_shortname)
    select mdp.id, mdrt.id, eufvalue
    from mdp, mdrt;
end;$$
--rollback DROP PROCEDURE setmdeuf;




CALL setmdeuf('FXFWDS','PROC',12);
CALL setmdeuf('FXFWDS','TRAD',4);
CALL setmdeuf('FXFWDS','LEND',4);
CALL setmdeuf('FXFWDS','SELL',6);
CALL setmdeuf('FXFWDS','FUND',2);
CALL setmdeuf('FXFWDS','INTR',0);
CALL setmdeuf('COMLNS','PROC',10);
CALL setmdeuf('COMLNS','TRAD',0);
CALL setmdeuf('COMLNS','LEND',8);
CALL setmdeuf('COMLNS','SELL',2);
CALL setmdeuf('COMLNS','FUND',6);
CALL setmdeuf('COMLNS','INTR',6);
CALL setmdeuf('FXDTDS','PROC',6);
CALL setmdeuf('FXDTDS','TRAD',0);
CALL setmdeuf('FXDTDS','LEND',0);
CALL setmdeuf('FXDTDS','SELL',4);
CALL setmdeuf('FXDTDS','FUND',6);
CALL setmdeuf('FXDTDS','INTR',6);
CALL setmdeuf('REPOS','PROC',12);
CALL setmdeuf('REPOS','TRAD',0);
CALL setmdeuf('REPOS','LEND',5);
CALL setmdeuf('REPOS','SELL',2);
CALL setmdeuf('REPOS','FUND',6);
CALL setmdeuf('REPOS','INTR',6);
CALL setmdeuf('XCSWPS','PROC',11);
CALL setmdeuf('XCSWPS','TRAD',0);
CALL setmdeuf('XCSWPS','LEND',8);
CALL setmdeuf('XCSWPS','SELL',2);
CALL setmdeuf('XCSWPS','FUND',6);
CALL setmdeuf('XCSWPS','INTR',6);
CALL setmdeuf('FUTRES','PROC',11);
CALL setmdeuf('FUTRES','TRAD',4);
CALL setmdeuf('FUTRES','LEND',0);
CALL setmdeuf('FUTRES','SELL',9);
CALL setmdeuf('FUTRES','FUND',2);
CALL setmdeuf('FUTRES','INTR',0);
CALL setmdeuf('CDOS','PROC',16);
CALL setmdeuf('CDOS','TRAD',18);
CALL setmdeuf('CDOS','LEND',18);
CALL setmdeuf('CDOS','SELL',12);
CALL setmdeuf('CDOS','FUND',2);
CALL setmdeuf('CDOS','INTR',0);
CALL setmdeuf('EQTIES','PROC',13);
CALL setmdeuf('EQTIES','TRAD',4);
CALL setmdeuf('EQTIES','LEND',0);
CALL setmdeuf('EQTIES','SELL',13);
CALL setmdeuf('EQTIES','FUND',2);
CALL setmdeuf('EQTIES','INTR',0);
CALL setmdeuf('FXDINC','PROC',12);
CALL setmdeuf('FXDINC','TRAD',4);
CALL setmdeuf('FXDINC','LEND',8);
CALL setmdeuf('FXDINC','SELL',13);
CALL setmdeuf('FXDINC','FUND',2);
CALL setmdeuf('FXDINC','INTR',0);
CALL setmdeuf('PMTORD','PROC',5);
CALL setmdeuf('PMTORD','TRAD',0);
CALL setmdeuf('PMTORD','LEND',0);
CALL setmdeuf('PMTORD','SELL',2);
CALL setmdeuf('PMTORD','FUND',0);
CALL setmdeuf('PMTORD','INTR',0);



<changeSet author="dragos-constantin-stoica" id="euf" runAlways="true" runOnChange="true">
    <sqlFile dbms="postgresql"
       encoding="UTF-8"
       path="mdeuf.sql"
       relativeToChangelogFile="true"
       splitStatements="true"
       stripComments="true"/>
</changeSet>




*/