Vue.component("vendor", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'VENDOR',
            type: 'Technical',
            weights: {
                answer01: 0,
                answer02: 100,
                answer03: 100,
                answer04: 80,
                answer05: 80,
                answer06: 50,
                answer07: 25,
            }
        }
    },
    methods: {
        computeScore() {
            let sum = 0;
            for (const [key, value] of Object.entries(this.form)) {
                sum += value ? 0 : this.weights[key];
            }
            if(this.form.answer01 == false){
                this.form.answer02 = true;
                this.form.answer03 = true;
                this.form.answer04 = true;
                this.form.answer05 = true;
                this.form.answer06 = true;
                this.form.answer07 = true;
            }
            return Math.max(0, 100 - sum);
        }
    },
    template: `
        <b-card sub-title="This E-RCSA relates to the management of relationships with third party vendors in relation to data, quantitative (financial) models and software." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Vendor Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-vendor1" 
                          label="[ 01 ] Is your unit materially dependent on third-party suppliers (vendors) for software, quantitative (financial) models or reference data (e.g. market data):"
                          label-for="input-vendor1" aria-describedby="help-block-vendor1">
            <b-form-checkbox id="input-vendor1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor1">
            Materially dependent means your unit could not operate without these services.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-vendor2" 
                          label="[ 02 ] The relationship with the third-party vendor is subject to governance exercised by a formally designated committee, a similar body or suitably senior individual:" 
                          label-for="input-vendor2" aria-describedby="help-block-vendor2">
            <b-form-checkbox id="input-vendor2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor2">
            The body or individual that exercises governance over the third-party vendor ensures compliance with approved policies and standards, approves terms and conditions and associated supplier contracts and monitors service delivery performance.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-vendor3" 
                          label="[ 03 ] Vendor services are covered by a formal contract that has been signed-off by internal or external legal counsel:" 
                          label-for="input-vendor3"  aria-describedby_="help-block-vendor3">
            <b-form-checkbox id="input-vendor3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor3">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-vendor4" 
            label="[ 04 ] Vendor contracts include details of information security requirements that must be complied with if the vendor accesses, processes, stores, communicates or provides IT infrastructure components relative to your organization's information:"
            label-for="input-vendor4" aria-describedby="help-block-vendor4">
            <b-form-checkbox id="input-vendor4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-vendor5" 
                        label="[ 05 ] Service Level Agreements (SLAs), or similar process, have been agreed with vendors concerning the timeliness and quality of the services and are subject to ongoing monitoring with immediate escalation of failures:" 
                        label-for="input-vendor5" aria-describedby="help-block-vendor5">
            <b-form-checkbox id="input-vendor5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-vendor6" 
                        label="[ 06 ] There is a continuous and real-time service quality feedback process:" 
                        label-for="input-vendor6"  aria-describedby_="help-block-vendor6">
            <b-form-checkbox id="input-vendor6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-vendor7" 
            label="[ 07 ] A qualitative evaluation of the third-party vendor, including credit checks and comparisons with potential competitors, has been performed at least once within the past 12 months:"
            label-for="input-vendor7" aria-describedby="help-block-vendor7">
            <b-form-checkbox id="input-vendor7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-vendor7">
            </b-form-text>
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
