Vue.component('dashboard',
    {
        data: function () {
            return {
                corporation: "ACME",
                products: [
                    { name: 'FX Forwards', short_name: 'FXFWDS', book: 'Trading' },
                    { name: 'Commercial Loans (Secured)', short_name: 'COMLNS', book: 'Banking' },
                    { name: 'Fixed Term Deposits', short_name: 'FXDTDS', book: 'Banking' },
                    { name: 'Repos', short_name: 'REPOS', book: 'Banking' },
                    { name: 'Cross Currency Swaps', short_name: 'XCSWPS', book: 'Trading' },
                    { name: 'Futures', short_name: 'FUTRES', book: 'Trading' },
                    { name: 'Collateralized Debt Obligations (CDOs)', short_name: 'CDOS', book: 'Trading' },
                    { name: 'Equities', short_name: 'EQTIES', book: 'Trading' },
                    { name: 'Fixed Income', short_name: 'FXDINC', book: 'Trading' },
                    { name: 'Payment Orders', short_name: 'PMTORD', book: 'Banking' },
                ],
                risktypes: [
                    { category: 'Processing', short_name: 'PROC' },
                    { category: 'Trading', short_name: 'TRAD' },
                    { category: 'Lending', short_name: 'LEND' },
                    { category: 'Selling', short_name: 'SELL' },
                    { category: 'Funding', short_name: 'FUND' },
                    { category: 'Interest Rate', short_name: 'INTR' },
                ],
                ercsa: [
                    { type: 'Generic', name: 'Control', short_name: 'CONTRL' },
                    { type: 'Generic', name: 'People', short_name: 'PEOPLE' },
                    { type: 'Generic', name: 'Execution', short_name: 'EXECTN' },
                    { type: 'Generic', name: 'Business Continuity', short_name: 'BUSCON' },
                    { type: 'Generic', name: 'Risk Control', short_name: 'RSKCTL' },
                    { type: 'Generic', name: 'Internal Logical Access Management', short_name: 'INTLAM' },
                    { type: 'Generic', name: 'Physical Access', short_name: 'PHSACC' },
                    { type: 'Generic', name: 'Policies and Procedures', short_name: 'POLPRO' },
                    { type: 'Technical', name: 'Data Quality Management', short_name: 'DATQTY' },
                    { type: 'Technical', name: 'Vendor Management', short_name: 'VENDOR' },
                    { type: 'Technical', name: 'Core Systems Management', short_name: 'CORSYS' },
                    { type: 'Technical', name: 'External Logical Access Management', short_name: 'EXTLAM' },
                    { type: 'Technical', name: 'Trading', short_name: 'TRDING' },
                    { type: 'Technical', name: 'Model Management', short_name: 'MODMGT' },
                    { type: 'Technical', name: 'Corporate Credit Assessment and Approval', short_name: 'CCRASS' },
                    { type: 'Technical', name: 'Corporate Credit Administration', short_name: 'CCRADM' },
                    { type: 'Technical', name: 'Liquidity Management', short_name: 'LIQDTY' },
                    { type: 'Technical', name: 'Treasury Deal Management', short_name: 'TRDEAL' },
                    { type: 'Technical', name: 'Product Review and Approval', short_name: 'PRDAPP' },
                    { type: 'Technical', name: 'Interest Rate Risk Management', short_name: 'INTRAT' },
                    { type: 'Technical', name: 'Environment Protection', short_name: 'ENVMNT' },
                ],
                businesscomponents: [
                    { component: 'Transaction Processing (Operations)', service: 'Product and Service Pricing', shotr_name: 'TPOPSP' },
                    { component: 'Transaction Processing (Operations)', service: 'Deal Structuring', shotr_name: 'TPODES' },
                    { component: 'Transaction Processing (Operations)', service: 'Pre-Trade/Deal Validation', shotr_name: 'TPPTDV' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Execution and Capture', shotr_name: 'TPTDEC' },
                    { component: 'Transaction Processing (Operations)', service: 'Transaction Origination and Capture', shotr_name: 'TPOTOC' },
                    { component: 'Transaction Processing (Operations)', service: 'Cash Management', shotr_name: 'TPOCAM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Confirmation and Matching', shotr_name: 'TPTDCM' },
                    { component: 'Transaction Processing (Operations)', service: 'Position Control and Amendments', shotr_name: 'TPOPCA' },
                    { component: 'Transaction Processing (Operations)', service: 'Credit Limit Monitoring', shotr_name: 'TPOCLM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Limit Monitoring', shotr_name: 'TPTDLM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Settlements', shotr_name: 'TPOTDS' },
                    { component: 'Transaction Processing (Operations)', service: 'Payments', shotr_name: 'TPOPAY' },
                    { component: 'Transaction Processing (Operations)', service: 'Collateral Management', shotr_name: 'TPOCOM' },
                    { component: 'Transaction Processing (Operations)', service: 'Custody/Safekeeping', shotr_name: 'TPOCUS' },
                    { component: 'Transaction Processing (Operations)', service: 'Loans Processing', shotr_name: 'TPOLOP' },
                    { component: 'Transaction Processing (Operations)', service: 'Treasury Processing', shotr_name: 'TPOTRP' },
                    { component: 'Transaction Processing (Operations)', service: 'FX Processing', shotr_name: 'TPOFXP' },
                    { component: 'Transaction Processing (Operations)', service: 'Securities Processing', shotr_name: 'TPOSEP' },
                    { component: 'Transaction Processing (Operations)', service: 'Derivatives Processing', shotr_name: 'TPODEP' },
                    { component: 'Transaction Processing (Operations)', service: 'Nostro Reconcilement', shotr_name: 'TPONOR' },
                    { component: 'Transaction Processing (Operations)', service: 'Trading Account Reconciliations', shotr_name: 'TPOTAR' },
                    { component: 'Transaction Processing (Operations)', service: 'G/L Proofs and Substantiation', shotr_name: 'TPGLPS' },
                    { component: 'Trading', service: 'FX Trading', shotr_name: 'TRAFXT' },
                    { component: 'Trading', service: 'Futures Trading', shotr_name: 'TRAFUT' },
                    { component: 'Trading', service: 'Asset Backed Securities Trading', shotr_name: 'TRABST' },
                    { component: 'Trading', service: 'Equities Trading', shotr_name: 'TRAEQT' },
                    { component: 'Trading', service: 'Bond Trading', shotr_name: 'TRABOT' },
                    { component: 'Core Systems', service: 'Client and Counterparty Data', shotr_name: 'COSCCD' },
                    { component: 'Core Systems', service: 'Market Data', shotr_name: 'COSMAD' },
                    { component: 'Core Systems', service: 'Products and Instruments Data', shotr_name: 'COSPID' },
                    { component: 'Core Systems', service: 'Trading System', shotr_name: 'COSTRS' },
                    { component: 'Core Systems', service: 'Global Loan System', shotr_name: 'COSGLO' },
                    { component: 'Core Systems', service: 'Funds Transfer System', shotr_name: 'COSFTS' },
                    { component: 'Core Systems', service: 'Global Nostros System', shotr_name: 'COSGNS' },
                    { component: 'Core Systems', service: 'Global Ledger System', shotr_name: 'COSGLS' },
                    { component: 'Core Systems', service: 'Funding and Liquidity System', shotr_name: 'COSFLS' },
                    { component: 'Reference Data Management', service: 'Client and Counterparty Data', shotr_name: 'RDMCCD' },
                    { component: 'Reference Data Management', service: 'Market Data', shotr_name: 'RDMMAD' },
                    { component: 'Reference Data Management', service: 'Products and Instruments Data', shotr_name: 'RDMPID' },
                    { component: 'All Other', service: 'Credit (Lending)', shotr_name: 'ALOCRL' },
                    { component: 'All Other', service: 'Treasury (Funding)', shotr_name: 'ALOTRF' },
                    { component: 'All Other', service: 'Treasury (Interest Rate)', shotr_name: 'ALOTIR' },
                    { component: 'All Other', service: 'Sales (Selling)', shotr_name: 'ALOSAS' },
                ],
                euf: [
                    { name: 'FX Forwards', short_name: 'FXFWDS', book: 'Trading', PROC: 12, TRAD: 4, LEND: 4, SELL: 6, FUND: 2, INTR: 0 },
                    { name: 'Commercial Loans (Trade Receivables)', short_name: 'COMLNS', book: 'Banking', PROC: 10, TRAD: 0, LEND: 8, SELL: 2, FUND: 6, INTR: 6 },
                    { name: 'Fixed Term Deposits', short_name: 'FXDTDS', book: 'Banking', PROC: 6, TRAD: 0, LEND: 0, SELL: 4, FUND: 6, INTR: 6 },
                    { name: 'Repos', short_name: 'REPOS', book: 'Banking', PROC: 12, TRAD: 0, LEND: 5, SELL: 2, FUND: 6, INTR: 6 },
                    { name: 'Cross Currency Swaps', short_name: 'XCSWPS', book: 'Banking', PROC: 11, TRAD: 0, LEND: 8, SELL: 2, FUND: 6, INTR: 6 },
                    { name: 'Futures', short_name: 'FUTRES', book: 'Trading', PROC: 11, TRAD: 4, LEND: 0, SELL: 9, FUND: 2, INTR: 0 },
                    { name: 'Collateralized Debt Obligations (CDOs)', short_name: 'CDOS', book: 'Trading', PROC: 16, TRAD: 18, LEND: 18, SELL: 12, FUND: 2, INTR: 0 },
                    { name: 'Equities', short_name: 'EQTIES', book: 'Trading', PROC: 13, TRAD: 4, LEND: 0, SELL: 13, FUND: 2, INTR: 0 },
                    { name: 'Fixed Income', short_name: 'FXDINC', book: 'Trading', PROC: 12, TRAD: 4, LEND: 8, SELL: 13, FUND: 2, INTR: 0 },
                    { name: 'Payment Orders', short_name: 'PMTORD', book: 'Banking', PROC: 5, TRAD: 0, LEND: 0, SELL: 2, FUND: 0, INTR: 0 },
                ],
                businesscomponents_products: [
                    { service: 'Product & Service Pricing', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: 'X', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Deal Structuring', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: 'X', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Pre-Trade/Deal Validation', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Trade/Deal Execution & Capture', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Transaction Origination & Capture', FXFWDS: '', COMLNS: 'X', FXDTDS: 'X', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: 'X' },
                    { service: 'Cash Management', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Trade/Deal Confirmation & Matching', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: '', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Position Control & Amendments', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Credit Limit Monitoring', FXFWDS: 'X', COMLNS: 'X', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: '', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Trade/Deal Limit Monitoring', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Trade/Deal Settlements', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Payments', FXFWDS: '', COMLNS: 'X', FXDTDS: 'X', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: 'X' },
                    { service: 'Collateral Management', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: 'X', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: '', PMTORD: '' },
                    { service: 'Custody/Safekeeping', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Loans Processing', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Treasury Processing', FXFWDS: '', COMLNS: '', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'FX Processing', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Securities Processing', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: 'X', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Derivatives Processing', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: 'X', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Nostro Reconcilement', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Trading Account Reconciliations', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'G/L Proofs & Substantiation', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Client & Counterparty Data', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Market Data', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Products & Instruments Data', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Client & Counterparty Data', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Market Data', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Products & Instruments Data', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Trading System', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Global Loan System', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Funds Transfer System', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Global Nostros System', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Global Ledger System', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'Funding & Liquidity System', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                    { service: 'FX Trading', FXFWDS: 'X', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Futures Trading', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: 'X', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Asset Backed Securities Trading', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: 'X', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Equities Trading', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: 'X', FXDINC: '', PMTORD: '' },
                    { service: 'Bond Trading', FXFWDS: '', COMLNS: '', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: 'X', PMTORD: '' },
                    { service: 'Credit (Lending)', FXFWDS: 'X', COMLNS: 'X', FXDTDS: '', REPOS: 'X', XCSWPS: 'X', FUTRES: '', CDOS: 'X', EQTIES: '', FXDINC: 'X', PMTORD: '' },
                    { service: 'Treasury (Funding)', FXFWDS: '', COMLNS: 'X', FXDTDS: '', REPOS: '', XCSWPS: '', FUTRES: '', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: '' },
                    { service: 'Treasury (Interest Rate)', FXFWDS: '', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: '', CDOS: '', EQTIES: '', FXDINC: '', PMTORD: '' },
                    { service: 'Sales (Selling)', FXFWDS: 'X', COMLNS: 'X', FXDTDS: 'X', REPOS: 'X', XCSWPS: 'X', FUTRES: 'X', CDOS: 'X', EQTIES: 'X', FXDINC: 'X', PMTORD: 'X' },
                ]
            }
        },
        template:
            `
            <div>
                <h4>Corporation <b>{{corporation}}</b></h4>
                <b-card title="Products" class="my-2">
                    <b-table striped hover :items="products"></b-table>
                </b-card>
                <b-card title="Risk Types" class="my-2">
                <b-table striped hover :items="risktypes"></b-table>
                </b-card>
                <b-card title="EUF" sub-title="Products to Risk Types" class="my-2">
                <b-table striped hover :items="euf">
                <template #thead-top="data">
                    <b-tr>
                    <b-th colspan="3" variant="primary">Product</b-th>
                    <b-th colspan="6" variant="secondary">Risk Type</b-th>
                    </b-tr>
                </template>
                </b-table>
                </b-card>
                <b-card title="ERCSA Categories" class="my-2">
                <b-table striped hover :items="ercsa"></b-table>
                </b-card>
                <b-card title="Business Components" class="my-2">
                <b-table striped hover :items="businesscomponents"></b-table>
                </b-card>

                <b-card title="Business Components - Products" sub-title="Business Component to Products" class="my-2">
                <b-table striped hover :items="businesscomponents_products">
                <template #thead-top="data">
                    <b-tr>
                    <b-th colspan="1" variant="primary">Business Component</b-th>
                    <b-th colspan="10" variant="secondary">Product</b-th>
                    </b-tr>
                </template>
                </b-table>
                </b-card>
            </div>
            `
    }
);

Vue.component('transactions',
    {
        data: function () {
            return {
                count: 0
            }
        },
        template:
            `
    <div>
    <b-card title="Transactions" sub-title="Card subtitle">
        <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
        </b-card-text>

        <b-card-text>A second paragraph of text in the card.</b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
    </b-card>
    </div>
    `
    }
);
