Vue.component("intrat", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'INTRAT',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 90,
                answer04: 80,
                answer05: 70,
                answer06: 60,
                answer07: 50,
                answer08: 20,
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
        <b-card sub-title="This E-RCSA relates to the governance and management of interest rate risk in the banking book (IRRBB) with emphasis on how it is identified, measured, monitored and controlled." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Interest Rate Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-intrat1" 
                          label="[ 01 ] Interest rate risk in the banking book (IRRBB) is subject to group-wide governance exercised by a formally designated committee, a similar body or suitable senior individual:"
                          label-for="input-intrat1" aria-describedby="help-block-intrat1">
            <b-form-checkbox id="input-intrat1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat1">
            The body that exercises governance over IRRBB ensures compliance with corporate policies and regulatory requirements, sets limits for IRRBB in line with approved risk appetite and is responsible for oversight of the management framework.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intrat2" 
                          label="[ 02 ] The risk appetite and measurement of IRRBB is based on outcomes of both economic value and earnings- based measures arising from a wide and appropriate range of interest rate shocks:" 
                          label-for="input-intrat2" aria-describedby="help-block-intrat2">
            <b-form-checkbox id="input-intrat2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat2">
            Economic value means the change in the net present value of assets, liabilities and off-balance sheet items when subject to specific interest rate shock and stress scenarios while earnings- based measures focus on changes to future profitability within a given time horizon eventually affecting equity capital. Such scenarios should be based on internally selected interest rate shock scenarios, historical and hypothetical interest rate stress scenarios and others prescribed by regulators.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-intrat3" 
                          label="[ 03 ] Measurements of IRRBB and hedging strategies that are the responsibility of your unit are performed daily and are available to your unit with an acceptable degree of completeness, accuracy and timeliness:" 
                          label-for="input-intrat3"  aria-describedby="help-block-intrat3">
            <b-form-checkbox id="input-intrat3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat3">
            IRRBB exposure measurements and associated reports should be available on the day to which the measurement relates or on the next day at the latest.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intrat4" 
            label="[ 04 ] Your unit has access to reports of IRRB exposures calculated for each currency:"
            label-for="input-intrat4" aria-describedby="help-block-intrat4">
            <b-form-checkbox id="input-intrat4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intrat5" 
                        label="[ 05 ] Your unit periodically reviews significant IRRBB measurement assumptions and they have been approved/reapproved by the governing body at least once in the past 12 months:" 
                        label-for="input-intrat5" aria-describedby="help-block-intrat5">
            <b-form-checkbox id="input-intrat5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intrat6" 
                        label="[ 06 ] Significant hedging or risk management initiatives are approved by your unit's governing body prior to their implementation:" 
                        label-for="input-intrat6"  aria-describedby_="help-block-intrat6">
            <b-form-checkbox id="input-intrat6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intrat7" 
            label="[ 07 ] A market analytics, or similar unit conducts ongoing expert analysis of market information and conditions to provide early warning of developments that may significant impact IRRBB management:"
            label-for="input-intrat7" aria-describedby="help-block-intrat7">
            <b-form-checkbox id="input-intrat7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intrat8" 
            label="[ 08 ] Qualitative and quantitative reverse stress tests have been performed at least once in the past 24 months:" 
            label-for="input-intrat8" aria-describedby="help-block-intrat8">
            <b-form-checkbox id="input-intrat8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intrat8">
            A reverse stress test starts with a severe outcome, e.g. a breach of regulatory capital ratios, illiquidity or insolvency etc. The events and conditions that could cause such outcomes are identified and evaluated to confirm that existing risk mitigation is sufficient to prevent such severe outcomes.
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
