Vue.component("contrl", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'CONTRL',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 90,
                answer03: 80,
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
        <b-card sub-title="This E-RCSA relates to the status of key controls. A key control is an important control that you rely on to ensure control objectives are met, namely, inputs to your unit, whether from within the group or from external sources, have been properly approved and their processing by your unit will be complete, accurate and timely." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Internal Control</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-contrl1" 
                          label="[ 01 ] All required controls are in place, i.e. there are no missing key controls:"
                          label-for="input-contrl1" aria-describedby="help-block-contrl1">
            <b-form-checkbox id="input-contrl1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-contrl1">
            If your unit is responsible for managing reference external sources, e.q. market data, your key data, including reference data from controls apply to the total population of data managed by your unit.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-contrl2" 
                          label="[ 02 ] The reports and information provided by other units from within the group or from external sources that you rely on to perform your key controls are available in a complete, accurate and timely manner:" 
                          label-for="input-contrl2" aria-describedby="help-block-contrl2">
            <b-form-checkbox id="input-contrl2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-contrl2">
            Answer 'no' if key controls are permanently incomplete, controls are permanently incomplete, e.g. reconciliations have permanent differences, or controls are often delayed due to the failure of other units to provide the reports and information you require.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-contrl3" 
                          label="[ 03 ] All your key controls are current:" 
                          label-for="input-contrl3"  aria-describedby_="help-block-contrl3">
            <b-form-checkbox id="input-contrl3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-contrl3">
            Answer 'no' if the completion of one or more key controls is/are overdue by at least one day due to a lack of sufficient time or resources to complete it/them.
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
