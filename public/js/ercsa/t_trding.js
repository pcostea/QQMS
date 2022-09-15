Vue.component("trding", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'TRDING',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 70,
                answer05: 70,
                answer06: 60,
                answer07: 50,
                answer08: 50,
                answer09: 40,
                answer10: 40,
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
        <b-card sub-title="This E-RCSA relates to the governance of trading activities and the management of trading limits and associated risk parameters." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Trading Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-trding1" 
                          label="[ 01 ] Trading activities are subject to group-wide governance exercised by a formally designated committee, a similar body or suitable senior individual:"
                          label-for="input-trding1" aria-describedby="help-block-trding1">
            <b-form-checkbox id="input-trding1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding1">
            The body that exercises governance over trading activities ensures compliance with corporate policies, sets and approves trading limits and monitors adherence to such limits.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-trding2" 
                          label="[ 02 ] Trading limits have been formally set for each trading desk in your unit:" 
                          label-for="input-trding2" aria-describedby="help-block-trding2">
            <b-form-checkbox id="input-trding2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding2">
            Answer 'yes' if trading limits reference, at a minimum, the products authorized for trading by each trading desk, the counterparties authorized for trading, how each limit is structured and the risk parameters within which trading must remain.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-trding3" 
                          label="[ 03 ] Risk positions vs. approved trading limits for the trading desks in your unit are updated and reported in real-time:" 
                          label-for="input-trding3"  aria-describedby="help-block-trding3">
            <b-form-checkbox id="input-trding3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding3">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trding4" 
            label="[ 04 ] Pre-trade validation checks are completed prior to trade execution:"
            label-for="input-trding4" aria-describedby="help-block-trding4">
            <b-form-checkbox id="input-trding4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding4">
            Answer 'yes' if validation checks include, at a minimum, ensuring that the product being traded is authorized and sufficient trading and credit limits are available to accommodate the trade.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-trding5" 
                        label="[ 05 ] On execution, all trades are immediately input into, or automatically captured by their respective core trading systems:" 
                        label-for="input-trding5" aria-describedby="help-block-trding5">
            <b-form-checkbox id="input-trding5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding5">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trding6" 
                        label="[ 06 ] All trading risk positions are expressed in a common metric to enable monitoring and risk control to be applied across all trading desks in the aggregate:" 
                        label-for="input-trding6"  aria-describedby_="help-block-trding6">
            <b-form-checkbox id="input-trding6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding6">
            The technique most commonly applied is value-at-risk (VaR).
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trding7" 
            label="[ 07 ] A market analytics, or similar unit conducts ongoing expert analysis of market conditions and recommends limit policies, pricing assumptions and model inputs:"
            label-for="input-trding7" aria-describedby="help-block-trding7">
            <b-form-checkbox id="input-trding7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-trding8" 
            label="[ 08 ] All trades executed in your unit are confirmed between the respective counterparties:" 
            label-for="input-trding8" aria-describedby="help-block-trding8">
            <b-form-checkbox id="input-trding8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding8">
            Confirmation involves each counterparty providing details of the trade to the other counterparty (e.g. deal date, rate or price, settlement date etc.) which are counter-checked by both counterparties prior to further processing and settlement.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trding9" 
            label="[ 09 ] Trading profit and loss (P&L) accounts and trading risk positions for each trading desk in your unit are reconciled to official accounting records at least daily:" 
            label-for="input-trding9"  aria-describedby="help-block-trding9">
            <b-form-checkbox id="input-trding9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding9">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-trding10" 
            label="[ 10 ] All trading desk conversations are recorded so that trading activities can be subsequently reconstructed, independently of traders, in the event of disputes, unauthorized trading, exceptional losses etc. :" 
            label-for="input-trding10"  aria-describedby_="help-block-trding10">
            <b-form-checkbox id="input-trding10" v-model="form.answer10" switch required><b>{{ form.answer10?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-trding10">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
