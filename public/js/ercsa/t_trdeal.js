Vue.component("trdeal", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'TRDEAL',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 70,
                answer04: 70,
                answer05: 50,
                answer06: 40,
            }
        }
    },
    methods: {
        computeScore() {
            let sum = 0;
            for (const [key, value] of Object.entries(this.form)) {
                sum += value ? 0 : this.weights[key];
            }
            return Math.max(0, 100 - sum);
        }
    },
    template: `
        <b-card sub-title="This E-RCSA relates to the governance and management of deals executed by treasury in relation to money market, securities and derivatives with respect to the management and control of liquidity risk and interest rate risk in the banking book (IRRBB)." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Treasury Deal Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-trdeal1" 
                          label="[ 01 ] Treasury deals are subject to group-wide governance exercised by a formally designated committee, a similar body or suitable senior individual:"
                          label-for="input-trdeal1" aria-describedby="help-block-trdeal1">
            <b-form-checkbox id="input-trdeal1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal1">
            The body that exercises governance over treasury deals ensures compliance with corporate policies, sets and approves deal limits and monitors adherence to such limits.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-trdeal2" 
                          label="[ 02 ] Deal limits have been formally set for each dealing desk within your unit:" 
                          label-for="input-trdeal2" aria-describedby="help-block-trdeal2">
            <b-form-checkbox id="input-trdeal2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal2">
            Answer 'yes' if deal limits reference, at a minimum, the products authorized for dealing by each desk, the counterparties authorized for dealing, how each limit is structured and the risk parameters within which deals must remain.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-trdeal3" 
                          label="[ 03 ] Pre-deal validation checks are completed prior to deal execution:" 
                          label-for="input-trdeal3"  aria-describedby_="help-block-trdeal3">
            <b-form-checkbox id="input-trdeal3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal3">
            Answer 'yes' if validation checks include, at a minimum, ensuring that the product being dealt is authorized, the counterparty is authorized, and sufficient deal and credit limits are available to accommodate the deal.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trdeal4" 
            label="[ 04 ] On execution, all deals are immediately input into, or automatically captured by their respective core treasury systems:"
            label-for="input-trdeal4" aria-describedby="help-block-trdeal4">
            <b-form-checkbox id="input-trdeal4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal4">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-trdeal5" 
                        label="[ 05 ] All deals are confirmed between the respective counterparties:" 
                        label-for="input-trdeal5" aria-describedby="help-block-trdeal5">
            <b-form-checkbox id="input-trdeal5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal5">
            Confirmation involves each counterparty providing details of the deal to the other counterparty (e.g. deal date, rate or price, settlement date etc.) which are counter-checked by both counterparties prior to further processing and settlement.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trdeal6" 
                        label="[ 06 ] All treasury dealing desk conversations are recorded so that dealing activities can be subsequently reconstructed, independently of dealers, in the event of disputes, unauthorized dealing, exceptional losses etc.:" 
                        label-for="input-trdeal6"  aria-describedby_="help-block-trdeal6">
            <b-form-checkbox id="input-trdeal6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trdeal6">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
