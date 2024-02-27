using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { RiskManagement2402 as my } from '../db/schema';

@path : '/service/RiskManagement2402'
service RiskManagement2402Service
{
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    entity A_BusinessPartner as projection on BusinessPartnerA2X.A_BusinessPartner
    {
        BusinessPartner,
        Customer,
        Supplier,
        BusinessPartnerCategory,
        BusinessPartnerFullName,
        BusinessPartnerIsBlocked
    };
}

annotate RiskManagement2402Service with @requires :
[
    'authenticated-user'
];
