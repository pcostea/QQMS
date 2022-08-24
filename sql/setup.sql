INSERT INTO corporation(name, ts, valid_from, valid_until)
    VALUES('ACME', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null);

INSERT INTO risk_type(corporation_id, name, shortname, ts, valid_from, valid_until)
    SELECT corporation.uid, md_risk_type.name, shortname,NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null FROM corporation, md_risk_type;


INSERT INTO product(corporation_id, name, shortname, book, ts, valid_from, valid_until )
    SELECT corporation.uid, md_product.name, shortname, book, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null  FROM corporation, md_product;


INSERT INTO business_component(corporation_id, version, component, service, shortname, ts, valid_from, valid_until)
    SELECT corporation.uid, '1.0', md_business_component.component, service, shortname, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null  FROM corporation, md_business_component;

INSERT INTO ercsa(corporation_id, type, name, shortname, ts, valid_from, valid_until)
    SELECT corporation.uid, type, md_ercsa.name, shortname, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0)  , null  FROM corporation, md_ercsa;

INSERT INTO application_user(email, username, password, status, created)
    SELECT DISTINCT ON (email) email, username, encode(digest('riskaccountingisthebest', 'sha384'), 'base64') , 'ACTIVE' , NOW() FROM md_application_user;

INSERT INTO user_to_business_component_mapping(business_component_id, application_user_id)
    SELECT business_component.uid, application_user.uid
    FROM application_user, md_application_user, business_component
    WHERE application_user.email = md_application_user.email AND
      md_application_user.businesscomponent_shortname = business_component.shortname;

INSERT INTO euf(product_id, risk_type_id, value, version, ts, valid_from, valid_until)
    SELECT product.uid, risk_type.uid, md_euf.value, '1.0', NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null
    FROM md_euf, product, risk_type
    WHERE md_euf.product_shortname=product.shortname AND
      md_euf.risktype_shortname=risk_type.shortname;

INSERT INTO business_component_product(product_id, business_component_id, ts, valid_from, valid_until)
    SELECT product.uid, business_component.uid, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null
    FROM md_business_component_product, product, business_component
    WHERE md_business_component_product.product_shortname=product.shortname AND
      md_business_component_product.businesscomponent_shortname=business_component.shortname;      

INSERT INTO business_component_ercsa(ercsa_id, business_component_id, weight, ts, valid_from, valid_until)
    SELECT ercsa.uid, business_component.uid, md_business_component_ercsa.weight, NOW(), make_timestamp(2022, 1, 1, 0, 0, 0.0), null
    FROM md_business_component_ercsa, business_component, ercsa
    WHERE md_business_component_ercsa.ercsa_shortname=ercsa.shortname AND
      md_business_component_ercsa.businesscomponent_shortname=business_component.shortname;