Vue.component("polpro", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'POLPRO',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 30,
                answer04: 30,
                answer05: 25,
                answer06: 20,
                answer07: 10,
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
        <b-card sub-title="This E-RCSA relates to the status, accessibility and maintenance of policies and procedures." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Policies and Procedures</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-polpro1" 
                          label="[ 01 ] Corporate policies that affect your unit have been documented and approved at the Board or similar level and are complete and current in all material aspects:"
                          label-for="input-polpro1" aria-describedby="help-block-polpro1">
            <b-form-checkbox id="input-polpro1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro1">
            Corporate policies typically address the organization's mission and objectives and the guiding principles that will drive corporate behavior and strategic decisions aimed at fulfilling mission and objectives. In addition, there will be specific policies addressing the management of exposures to risk including credit risk, market (trading) risk, liquidity risk, interest rate risk in the banking book (IRRBB), conduct risk and operational risk.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-polpro2" 
                          label="[ 02 ] Your unit's operating procedures have been documented and are complete and current in all material aspects:" 
                          label-for="input-polpro2" aria-describedby="help-block-polpro2">
            <b-form-checkbox id="input-polpro2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro2">
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-polpro3" 
                          label="[ 03 ] Your unit's operating procedures have been reviewed and signed-off by your unit's senior management on at least a 'one-up' basis:" 
                          label-for="input-polpro3"  aria-describedby_="help-block-polpro3">
            <b-form-checkbox id="input-polpro3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro3">
            A 'one-up' manager is the first level of management your unit reports into that is not directly involved in your unit's day-to-day activities.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-polpro4" 
            label="[ 04 ] Your unit's operating procedures have been reviewed and signed-off by appropriate specialists to ensure they comply with corporate policies and applicable legal and regulatory requirements:"
            label-for="input-polpro4" aria-describedby="help-block-polpro4">
            <b-form-checkbox id="input-polpro4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro4">
            'Appropriate specialists' include risk management, audit, compliance and legal.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-polpro5" 
                        label="[ 05 ] Corporate policies and operating procedures that affect your unit are archived in searchable electronic form and are readily accessible to your unit's personnel:" 
                        label-for="input-polpro5" aria-describedby="help-block-polpro5">
            <b-form-checkbox id="input-polpro5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-polpro6" 
                        label="[ 06 ] Changes to corporate policies and operating procedures that affect your unit's personnel are communicated directly to them upon occurrence:" 
                        label-for="input-polpro6"  aria-describedby_="help-block-polpro6">
            <b-form-checkbox id="input-polpro6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-polpro7" 
            label="[ 07 ] All changes to your unit's operating procedures are reviewed and signed-off by your unit's supervisor and a 'one-up' manager upon occurrence:"
            label-for="input-polpro7" aria-describedby="help-block-polpro7">
            <b-form-checkbox id="input-polpro7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-polpro7">
            A 'one-up' manager is the first level of management your unit reports into that is not directly involved in your unit's day-to-day activities.
            </b-form-text>
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
