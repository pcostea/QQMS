Vue.component('dashboard',
    {
        data: function () {
            return {
                corporation: window.user_data ? window.user_data[0].corporation : 'The Very Big Corporation of America',
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
                    { component: 'Transaction Processing (Operations)', service: 'Product and Service Pricing', short_name: 'TPOPSP' },
                    { component: 'Transaction Processing (Operations)', service: 'Deal Structuring', short_name: 'TPODES' },
                    { component: 'Transaction Processing (Operations)', service: 'Pre-Trade/Deal Validation', short_name: 'TPPTDV' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Execution and Capture', short_name: 'TPTDEC' },
                    { component: 'Transaction Processing (Operations)', service: 'Transaction Origination and Capture', short_name: 'TPOTOC' },
                    { component: 'Transaction Processing (Operations)', service: 'Cash Management', short_name: 'TPOCAM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Confirmation and Matching', short_name: 'TPTDCM' },
                    { component: 'Transaction Processing (Operations)', service: 'Position Control and Amendments', short_name: 'TPOPCA' },
                    { component: 'Transaction Processing (Operations)', service: 'Credit Limit Monitoring', short_name: 'TPOCLM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Limit Monitoring', short_name: 'TPTDLM' },
                    { component: 'Transaction Processing (Operations)', service: 'Trade/Deal Settlements', short_name: 'TPOTDS' },
                    { component: 'Transaction Processing (Operations)', service: 'Payments', short_name: 'TPOPAY' },
                    { component: 'Transaction Processing (Operations)', service: 'Collateral Management', short_name: 'TPOCOM' },
                    { component: 'Transaction Processing (Operations)', service: 'Custody/Safekeeping', short_name: 'TPOCUS' },
                    { component: 'Transaction Processing (Operations)', service: 'Loans Processing', short_name: 'TPOLOP' },
                    { component: 'Transaction Processing (Operations)', service: 'Treasury Processing', short_name: 'TPOTRP' },
                    { component: 'Transaction Processing (Operations)', service: 'FX Processing', short_name: 'TPOFXP' },
                    { component: 'Transaction Processing (Operations)', service: 'Securities Processing', short_name: 'TPOSEP' },
                    { component: 'Transaction Processing (Operations)', service: 'Derivatives Processing', short_name: 'TPODEP' },
                    { component: 'Transaction Processing (Operations)', service: 'Nostro Reconcilement', short_name: 'TPONOR' },
                    { component: 'Transaction Processing (Operations)', service: 'Trading Account Reconciliations', short_name: 'TPOTAR' },
                    { component: 'Transaction Processing (Operations)', service: 'G/L Proofs and Substantiation', short_name: 'TPGLPS' },
                    { component: 'Trading', service: 'FX Trading', short_name: 'TRAFXT' },
                    { component: 'Trading', service: 'Futures Trading', short_name: 'TRAFUT' },
                    { component: 'Trading', service: 'Asset Backed Securities Trading', short_name: 'TRABST' },
                    { component: 'Trading', service: 'Equities Trading', short_name: 'TRAEQT' },
                    { component: 'Trading', service: 'Bond Trading', short_name: 'TRABOT' },
                    { component: 'Core Systems', service: 'Client and Counterparty Data', short_name: 'COSCCD' },
                    { component: 'Core Systems', service: 'Market Data', short_name: 'COSMAD' },
                    { component: 'Core Systems', service: 'Products and Instruments Data', short_name: 'COSPID' },
                    { component: 'Core Systems', service: 'Trading System', short_name: 'COSTRS' },
                    { component: 'Core Systems', service: 'Global Loan System', short_name: 'COSGLO' },
                    { component: 'Core Systems', service: 'Funds Transfer System', short_name: 'COSFTS' },
                    { component: 'Core Systems', service: 'Global Nostros System', short_name: 'COSGNS' },
                    { component: 'Core Systems', service: 'Global Ledger System', short_name: 'COSGLS' },
                    { component: 'Core Systems', service: 'Funding and Liquidity System', short_name: 'COSFLS' },
                    { component: 'Reference Data Management', service: 'Client and Counterparty Data', short_name: 'RDMCCD' },
                    { component: 'Reference Data Management', service: 'Market Data', short_name: 'RDMMAD' },
                    { component: 'Reference Data Management', service: 'Products and Instruments Data', short_name: 'RDMPID' },
                    { component: 'All Other', service: 'Credit (Lending)', short_name: 'ALOCRL' },
                    { component: 'All Other', service: 'Treasury (Funding)', short_name: 'ALOTRF' },
                    { component: 'All Other', service: 'Treasury (Interest Rate)', short_name: 'ALOTIR' },
                    { component: 'All Other', service: 'Sales (Selling)', short_name: 'ALOSAS' },
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
        props: ['server_transactions'],
        data: function () {
            return {
                isBusy: false,
                form: {
                    date: (new Date(Date.now()).toISOString().substring(0, 10)),
                    product: 'FXFWDS',
                    value: 0,
                    currency: 'USD'
                },
                products: [
                    { value: 'FXFWDS', text: 'FX Forwards' },
                    { value: 'COMLNS', text: 'Commercial Loans (Secured)' },
                    { value: 'FXDTDS', text: 'Fixed Term Deposits' },
                    { value: 'REPOS', text: 'Repos' },
                    { value: 'XCSWPS', text: 'Cross Currency Swaps' },
                    { value: 'FUTRES', text: 'Futures' },
                    { value: 'CDOS', text: 'Collateralized Debt Obligations (CDOs)' },
                    { value: 'EQTIES', text: 'Equities' },
                    { value: 'FXDINC', text: 'Fixed Income' },
                    { value: 'PMTORD', text: 'Payment Orders' },
                ],
                currencies: [
                    { value: 'USD', text: 'USD' }
                ],
                transactions: this.server_transactions
            }
        },
        methods: {
            refreshTable(event) {
                //fetch data for transactions and set this.transsactions in order to trigger refresh
                getData('/transactions')
                    .then(data => {
                        this.isBusy = false;
                        this.transactions = data.result;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            onSubmit(event) {
                event.preventDefault();
                //save data and refresh table
                let payload = this.form;
                payload.corporation = window.user_data[0].corporation;
                console.log(JSON.stringify(payload));
                postData('/transactions', { payload: payload })
                    .then(data => {
                        //console.log(JSON.stringify(data));
                        getData('/transactions')
                            .then(data => {
                                this.isBusy = false;
                                this.transactions = data.result;
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        template:
            `
    <div>
    <b-card title="Transactions" sub-title="Historical transaction values" class="my-2">
        <b-table striped hover :items="transactions" :busy="isBusy">
        <template #table-busy>
            <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
            </div>
        </template>
        </b-table>
        <b-button @click="refreshTable($event)" variant="primary">Refresh data</b-button>
    </b-card>

    <b-card title="Register NEW Transaction" class="my-2">

    <b-form @submit="onSubmit">
        <b-form-group id="group-transactionDate" label="Date:" label-for="transactionDate">
            <b-form-input id="transactionDate" type="date" v-model="form.date" required></b-form-input>
        </b-form-group>

        <b-form-group id="group-transactionProduct" label="Product:" label-for="transactionProduct">
            <b-form-select id="transactionProduct" v-model="form.product" :options="products" required></b-form-select>
        </b-form-group>

        <b-form-group id="group-transactionValue" label="Value:" label-for="transactionValue">
            <b-form-input id="transactionValue" type="number" v-model="form.value" placeholder="0" required></b-form-input>
        </b-form-group>

        <b-form-group id="group-transactionCurrency" label="Currency:" label-for="transactionCurrency">
            <b-form-select id="transactionCurrency" v-model="form.currency" :options="currencies" required></b-form-select>
        </b-form-group>  
        
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-card>
    </div>
    `
    }
);

Vue.component('ercsa',
    {
        data: function () {
            return {
                corporation: window.user_data ? window.user_data[0].corporation : 'The Very Big Corporation of America',
                user: window.user_data[0].username,
                bcercsa: getBusinessComponentERCSA()
            }
        },
        template: `
        <div>
        <b-card title="User profile" class="my-2">
            <b-card-text>
            <b>Corporation: {{corporation}}</b>
            </b-card-text>

            <b-card-text>
            List of business components for {{user}} with associated ERCSA categories
            </b-card-text>

            <b-table :items="bcercsa"></b-table>

            
        </b-card>

        <b-card title="ERCSA Questionnaire" class="my-2">
        <b-card-text>
        Create new questionnaire or continue the last saved one. Only one questionnaire per quarter is allowed. Previous periods should be closed automatically.
        </b-card-text>
        </b-card>
        </div>
        `
    }
);


Vue.component('reports',
    {
        data: function () {
            counter: 0
        },
        template: `
        <div>
        <b-card title="Reports" sub-title="Some stuff extra">
            <b-card-text>
            Report with IR caluculation based on Transaction values, EUF and VBW
            </b-card-text>

            <b-card-text>
            Report with overall ERCSA answers at Corporation level.
            </b-card-text>

        </b-card>
        </div>
        `
    }
);