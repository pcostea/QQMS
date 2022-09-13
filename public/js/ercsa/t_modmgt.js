Vue.component("modmgt", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'MODMGT',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 100,
                answer04: 100,
                answer05: 100,
                answer06: 80,
                answer07: 60,
                answer08: 40,
                answer09: 40,
                answer10: 30,
                answer11: 20,
                answer12: 10,
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
        <b-card sub-title="This E-RCSA relates to the management of quantitative models applied in the measurement of exposure to risk. It applies equally to models developed internally, by external consultants or purchased from third party vendors." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Model Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-modmgt1" 
                          label="[ 01 ] A quantitative model is used by your unit to provide measurements of exposure to risk and risk analytics for decision support:"
                          label-for="input-modmgt1" aria-describedby="help-block-modmgt1">
            <b-form-checkbox id="input-modmgt1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt1">
            The support of a quantitative model is required for: product pricing, pre-trade validation, risk position and portfolio management and determining the adequacy of capital reserves.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-modmgt2" 
                          label="[ 02 ] The model is subject to group-wide governance exercised by a formally designated committee, a similar body or suitably senior individual.:" 
                          label-for="input-modmgt2" aria-describedby="help-block-modmgt2">
            <b-form-checkbox id="input-modmgt2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt2">
            The body that exercises model risk governance sets group-wide policies and standards, approves the implementation of new models and material changes to existing models and oversees their operation.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-modmgt3" 
                          label="[ 03 ] The model has a designated 'model owner':" 
                          label-for="input-modmgt3"  aria-describedby="help-block-modmgt3">
            <b-form-checkbox id="input-modmgt3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt3">
            The model owner need not be independent of the model's users and developers. The model owner is accountable for the model's proper use and performance and is responsible for ensuring that its operation complies with group-wide policies and standards.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt4" 
            label="[ 04 ] Responsibility for controlling the model is assigned to a risk control or similar unit that is independent of your unit:"
            label-for="input-modmgt4" aria-describedby="help-block-modmgt4">
            <b-form-checkbox id="input-modmgt4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt4">
            Controlling includes the periodic independent validation and review of the model.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-modmgt5" 
                        label="[ 05 ] Responsibility for developing and/or maintaining the model is assigned to a unit that is independent of your unit:" 
                        label-for="input-modmgt5" aria-describedby="help-block-modmgt5">
            <b-form-checkbox id="input-modmgt5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt5">
            Developing and/or maintaining means the coding or programing of the model's automated functions and processes including its mathematical formulae.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt6" 
                        label="[ 06 ] Inputs to the model are complete, accurate and timely relative to the model's uses and the reliance placed on its outputs:" 
                        label-for="input-modmgt6"  aria-describedby="help-block-modmgt6">
            <b-form-checkbox id="input-modmgt6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt7" 
            label="[ 07 ] The model has been subject to an independent review at least once in the past 12 months or upon a material change to the model:"
            label-for="input-modmgt7" aria-describedby="help-block-modmgt7">
            <b-form-checkbox id="input-modmgt7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt7">
            The review determines whether the model is working as intended and existing validation activities are effective.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-modmgt8" 
            label="[ 08 ] The model has been subject to a program of stress testing and a sensitivity analysis at least once in the past 12 months or upon a material change to the model:" 
            label-for="input-modmgt8" aria-describedby="help-block-modmgt8">
            <b-form-checkbox id="input-modmgt8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt8">
            Stress testing checks the model's performance over a wide range of input and parameter values, including extreme values, to verify that the model is robust. A sensitivity analysis checks the impact of small changes in inputs and parameter values on model outputs to ensure they fall within expected ranges.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt9" 
            label="[ 09 ] The model is subject to an ongoing program of backtesting:" 
            label-for="input-modmgt9"  aria-describedby_="help-block-modmgt9">
            <b-form-checkbox id="input-modmgt9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt9">
            Backtesting involves the comparison of actual outcomes with model forecasts within observation frequencies that match the forecast horizon or performance window of the model.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt10" 
            label="[ 10 ] Complete and current documentation relating to the model exists and is readily accessible to personnel in your unit that use or rely on its outputs:" 
            label-for="input-modmgt10"  aria-describedby_="help-block-modmgt10">
            <b-form-checkbox id="input-modmgt10" v-model="form.answer10" switch required><b>{{ form.answer10?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt10">
            Answer 'yes' if the documentation includes, at a minimum, a detailed description of its architecture and functions, how it operates, its limitations and key assumptions.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt11" 
            label="[ 11 ] The model has been benchmarked at least once in the past 12 months or upon a material change to the model:" 
            label-for="input-modmgt11"  aria-describedby_="help-block-modmgt11">
            <b-form-checkbox id="input-modmgt11" v-model="form.answer11" switch required><b>{{ form.answer11?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt11">
            Benchmarking is the comparison of the model's inputs and outputs to estimates from alternative internal or external data or models.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-modmgt12" 
            label="[ 12 ] All model overrides are logged, reviewed and signed-off by the model owner:" 
            label-for="input-modmgt12"  aria-describedby_="help-block-modmgt12">
            <b-form-checkbox id="input-modmgt12" v-model="form.answer12" switch required><b>{{ form.answer12?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-modmgt12">
            Model overrides relate to instances where model outputs are ignored, altered or reversed based on the expert judgement of users.
            </b-form-text> 
            </b-form-group>            

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
