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
        props: ['ercsa_responses'],
        data: function () {
            return {
                table_responses: this.ercsa_responses,
                table_fields: [
                    { key: 'bc', label: 'Business Component' },
                    { key: 'bs', label: 'Business Service' },
                    { key: 'y', label: 'Year' },
                    { key: 'q', label: 'Quarter' },
                    { key: 'status', label: 'Status' },
                    { key: 'actions', label: 'Actions' }
                ],
                selected_item: {},
                corporation: window.user_data ? window.user_data[0].corporation : 'The Very Big Corporation of America',
                user: window.user_data[0].username,
                bcercsa: getBusinessComponentERCSA(),
                bc: getBusinessComponent(),
                form: {
                    q_buttons: false
                },
                contrl: false,
                people: false,
                exectn: false,
                buscon: false,
                rskctl: false,
                intlam: false,
                phsacc: false,
                polpro: false,
                datqty: false,
                vendor: false,
                corsys: false,
                extlam: false,
                trding: false,
                modmgt: false,
                ccrass: false,
                ccradm: false,
                liqdty: false,
                trdeal: false,
                prdapp: false,
                intrat: false,
                contrl_form: { answer01: true, answer02: true, answer03: true },
                people_form: { answer01: true, answer02: 0, answer03: 100, answer04: 100, answer05: 100, answer06: true },
                exectn_form: { answer01_04: 100, answer05: 100, answer06: 100 },
                buscon_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true },
                rskctl_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true },
                intlam_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true },
                phsacc_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true },
                polpro_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true },
                datqty_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true },
                vendor_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true },
                corsys_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true },
                extlam_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true },
                trding_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true },
                modmgt_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true, answer11: true, answer12: true },
                ccrass_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true },
                ccradm_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true },
                liqdty_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true },
                trdeal_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true },
                prdapp_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true },
                intrat_form: { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true },
                envmnt: false,
                envmnt_form: {},

            }
        },
        methods: {
            saveReport(event, status) {
                let q_result = {};
                q_result.business_component = this.selected_item.response.business_component;
                q_result.corporation = this.corporation;
                q_result.y = this.selected_item.y;
                q_result.q = this.selected_item.q;
                q_result.questionnaire = [];
                q_result.status = status;
                this.$children.forEach(element => {
                    if (typeof (element.computeScore) !== 'undefined') {
                        let result = element._data;
                        result.score = element.computeScore();
                        q_result.questionnaire.push(result);
                    }
                });
                postData('/questionnaire', { payload: q_result, extra: this.selected_item })
                    .then(data => {
                        console.log(JSON.stringify(q_result));
                        console.log(JSON.stringify(data));
                        if (data.status.indexOf('error') == -1) {
                            this.$bvToast.toast(data.status, {
                                title: 'Success',
                                variant: 'success',
                                solid: true
                            })
                            getData('/questionnaire')
                                .then(data => {
                                    //augment the result set
                                    this.table_responses = augmentERCSAQuestionnaire(data.result);

                                    this.selected_item = {};
                                    //reset form and hide it
                                    this.form.q_buttons = false;

                                    this.contrl = false;
                                    this.people = false;
                                    this.exectn = false;
                                    this.buscon = false;
                                    this.rskctl = false;
                                    this.intlam = false;
                                    this.phsacc = false;
                                    this.polpro = false;
                                    this.ccrass = false;
                                    this.ccradm = false;
                                    this.modmgt = false;
                                    this.datqty = false;
                                    this.trding = false;
                                    this.prdapp = false;
                                    this.extlam = false;
                                    this.corsys = false;
                                    this.vendor = false;
                                    this.trdeal = false;
                                    this.liqdty = false;
                                    this.intrat = false;
                                    this.contrl_form = { answer01: true, answer02: true, answer03: true };
                                    this.people_form = { answer01: true, answer02: 0, answer03: 100, answer04: 100, answer05: 100, answer06: true };
                                    this.exectn_form = { answer01_04: 100, answer05: 100, answer06: 100 };
                                    this.buscon_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                                    this.rskctl_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                                    this.intlam_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                                    this.phsacc_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                                    this.polpro_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                                    this.datqty_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                                    this.vendor_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                                    this.corsys_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                                    this.extlam_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true };
                                    this.trding_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                                    this.modmgt_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true, answer11: true, answer12: true };
                                    this.ccrass_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                                    this.ccradm_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                                    this.liqdty_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                                    this.trdeal_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true };
                                    this.prdapp_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                                    this.intrat_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true };


                                })
                                .catch((error) => {
                                    console.log(error);
                                })

                        } else {
                            this.$bvToast.toast(data.status, {
                                title: 'Error',
                                variant: 'danger',
                                solid: true
                            })
                        }


                    })
                    .catch((error) => {
                        console.log(error);
                        this.$bvToast.toast(error, {
                            title: 'Error',
                            variant: 'danger',
                            solid: true
                        })
                    })

            },
            editQuestionnaire(item, index, button) {
                //reset all questionnaires and responses
                this.contrl = false;
                this.people = false;
                this.exectn = false;
                this.buscon = false;
                this.rskctl = false;
                this.intlam = false;
                this.phsacc = false;
                this.polpro = false;
                this.ccrass = false;
                this.ccradm = false;
                this.modmgt = false;
                this.datqty = false;
                this.trding = false;
                this.prdapp = false;
                this.extlam = false;
                this.corsys = false;
                this.vendor = false;
                this.trdeal = false;
                this.liqdty = false;
                this.intrat = false;
                this.contrl_form = { answer01: true, answer02: true, answer03: true };
                this.people_form = { answer01: true, answer02: 0, answer03: 100, answer04: 100, answer05: 100, answer06: true };
                this.exectn_form = { answer01_04: 100, answer05: 100, answer06: 100 };
                this.buscon_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                this.rskctl_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                this.intlam_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                this.phsacc_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                this.polpro_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                this.datqty_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                this.vendor_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                this.corsys_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                this.extlam_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true };
                this.trding_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                this.modmgt_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true, answer11: true, answer12: true };
                this.ccrass_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true, answer10: true };
                this.ccradm_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true };
                this.liqdty_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                this.trdeal_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true };
                this.prdapp_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true, answer09: true };
                this.intrat_form = { answer01: true, answer02: true, answer03: true, answer04: true, answer05: true, answer06: true, answer07: true, answer08: true };

                console.log(item);
                console.log(index);
                this.selected_item = item;

                switch (item.status) {
                    case "NEW":
                        this.form.q_buttons = true;
                        //console.log(item.response.business_component);
                        window.user_data.forEach(element => {
                            if (element.business_component == item.response.business_component) {
                                element.ercsa.forEach(elm => this[elm.toLowerCase()] = true)
                            }
                        })
                        break;

                    case "IN PROGRESS":
                        this.form.q_buttons = true;
                        item.response.questionnaire.forEach(elm => {
                            this[elm.ercsa.toLowerCase()] = true;
                            this[elm.ercsa.toLowerCase() + "_form"] = elm.form;
                        })
                        break;

                    case "DONE":
                    default:
                        break;
                }


            }
        },
        template: `
        <div>
        <b-card title="User profile" class="my-2">
            <b-card-text>
            <b>Corporation: {{corporation}}</b>
            </b-card-text>

            <b-card-text>
            Business Components and Serivces user: <b>{{user}}</b> is responsible for, with their associated ERCSA Categories:
            </b-card-text>

            <b-table :items="bcercsa"></b-table>
            
        </b-card>

        <b-card title="ERCSA Questionnaire" class="my-2">
        <b-card-text>
        Create new questionnaire or continue the last saved one. Only one questionnaire per quarter is allowed. Previous periods should be closed automatically.
        </b-card-text>

        <b-table striped hover :items="table_responses" :fields="table_fields">
        <template #cell(actions)="row">
        <b-button size="sm" @click="editQuestionnaire(row.item, row.index, $event.target)" class="mr-1" :disabled="row.item.status=='DONE'">
          {{ (row.item.status=="NEW")?'New Questionnaire':(row.item.status =="IN PROGRESS"?'Continue Responding':'No Further Action')}}
        </b-button>
      </template>
        </b-table>

        </b-card>

        <b-container fluid>
            <template v-if="contrl">
                <b-row class="mx-3 p-3"> <b-col> <contrl v-bind:form="contrl_form"></contrl> </b-col> </b-row>
            </template>
            <template v-if="people">
                <b-row class="mx-3 p-3"> <b-col> <people v-bind:form="people_form"></people> <b-col> </b-row>
            </template>
            <template v-if="exectn">
                <b-row class="mx-3 p-3"> <b-col> <exectn v-bind:form="exectn_form"></exectn> </b-col> </b-row>
            </template>
            <template v-if="buscon">
                <b-row class="mx-3 p-3"> <b-col> <buscon v-bind:form="buscon_form"></buscon> </b-col> </b-row>
            </template>
            <template v-if="rskctl">
                <b-row class="mx-3 p-3"> <b-col> <rskctl v-bind:form="rskctl_form"></rskctl> </b-col> </b-row>
            </template>
            <template v-if="intlam">
                <b-row class="mx-3 p-3"> <b-col> <intlam v-bind:form="intlam_form"></intlam> </b-col> </b-row>
            </template>
            <template v-if="phsacc">
                <b-row class="mx-3 p-3"> <b-col> <phsacc v-bind:form="phsacc_form"></phsacc> </b-col> </b-row>
            </template>
            <template v-if="polpro">
                <b-row class="mx-3 p-3"> <b-col> <polpro v-bind:form="polpro_form"></polpro> </b-col> </b-row>
            </template>
            <template v-if="ccrass">
                <b-row class="mx-3 p-3"> <b-col> <ccrass v-bind:form="ccrass_form"></ccrass> </b-col> </b-row>
            </template>
            <template v-if="ccradm">
                <b-row class="mx-3 p-3"> <b-col> <ccradm v-bind:form="ccradm_form"></ccradm> </b-col> </b-row>
            </template>
            <template v-if="modmgt">
                <b-row class="mx-3 p-3"> <b-col> <modmgt v-bind:form="modmgt_form"></modmgt> </b-col> </b-row>
            </template>
            <template v-if="datqty">
                <b-row class="mx-3 p-3"> <b-col> <datqty v-bind:form="datqty_form"></datqty> </b-col> </b-row>
            </template>
            <template v-if="trding">
            <b-row class="mx-3 p-3"> <b-col> <trding v-bind:form="trding_form"></trding> </b-col> </b-row>
            </template>
            <template v-if="prdapp">
            <b-row class="mx-3 p-3"> <b-col> <prdapp v-bind:form="prdapp_form"></prdapp> </b-col> </b-row>
            </template>
            <template v-if="extlam">
            <b-row class="mx-3 p-3"> <b-col> <extlam v-bind:form="extlam_form"></extlam> </b-col> </b-row>
            </template>
            <template v-if="corsys">
            <b-row class="mx-3 p-3"> <b-col> <corsys v-bind:form="corsys_form"></corsys> </b-col> </b-row>
            </template>
            <template v-if="vendor">
            <b-row class="mx-3 p-3"> <b-col> <vendor v-bind:form="vendor_form"></vendor> </b-col> </b-row>
            </template>
            <template v-if="trdeal">
            <b-row class="mx-3 p-3"> <b-col> <trdeal v-bind:form="trdeal_form"></trdeal> </b-col> </b-row>
            </template>
            <template v-if="liqdty">
            <b-row class="mx-3 p-3"> <b-col> <liqdty v-bind:form="liqdty_form"></liqdty> </b-col> </b-row>
            </template>
            <template v-if="intrat">
            <b-row class="mx-3 p-3"> <b-col> <intrat v-bind:form="intrat_form"></intrat> </b-col> </b-row>
            </template>

            <template v-if="form.q_buttons">
            <b-row class="mx-3 p-3">
                <b-col cols="10">
                    <b-button variant="warning" @click="saveReport($event,'DONE')">Finalize and Close Questionnaire</b-button>
                </b-col>
                <b-col cols="2">
                    <b-button pill variant="success" @click="saveReport($event,'IN PROGRESS')">Save</b-button>
                </b-col>
            </b-row>
            </template>
        </b-container>

        </div>
        `
    }
);


Vue.component('reports',
    {
        props: ['ercsa_report'],
        data: function () {
            return {
                ercsa_table: this.ercsa_report
            }
        },
        template: `
        <div>
        <b-card title="Reports" sub-title="Some stuff extra">
            <b-card-text>
            ERCSA progress at Corporation level
            </b-card-text>
            <b-table striped hover :items="ercsa_table">
            </b-table>

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