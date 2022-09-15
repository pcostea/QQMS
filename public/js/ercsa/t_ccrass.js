Vue.component("ccrass", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'CCRASS',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 80,
                answer05: 80,
                answer06: 60,
                answer07: 50,
                answer08: 40,
                answer09: 20,
                answer10: 20,
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
        <b-card sub-title="This E-RCSA relates to the application of corporate credit assessment and approval policies and standards." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Corporate Credit Assessment and Approval</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-ccrass1" 
                          label="[ 01 ] Credit granting to corporate clients is subject to group- wide governance exercised by a formally designated committee, a similar body or suitably senior individual:"
                          label-for="input-ccrass1" aria-describedby="help-block-ccrass1">
            <b-form-checkbox id="input-ccrass1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass1">
            The body that exercises governance over the granting of credit to corporate clients sets group-wide policies and standards, approves credit facilities where required, approves lending authorities and monitors the quality of loan portfolios.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-ccrass2" 
                          label="[ 02 ] Credit assessment, approval and documentation standards, including the criteria that must be applied when determining whether a prospective borrower is eligible for credit, are documented and readily accessible to all personnel assigned to your unit that are engaged in granting credit:" 
                          label-for="input-ccrass2" aria-describedby="help-block-ccrass2">
            <b-form-checkbox id="input-ccrass2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass2">
            The document that contains credit assessment, approval and documentation standards is typically referred to as the 'credit manual'.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-ccrass3" 
                          label="[ 03 ] The creditworthiness of current and prospective borrowers is expressed by reference to an internally approved and suitably calibrated system of standardized and structured credit risk ratings.:" 
                          label-for="input-ccrass3"  aria-describedby="help-block-ccrass3">
            <b-form-checkbox id="input-ccrass3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass3">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccrass4" 
            label="[ 04 ] Credit proposals are approved by credit committees and/or individuals with formally assigned lending authorities that incorporate a combination of risk rating and credit amount:"
            label-for="input-ccrass4" aria-describedby="help-block-ccrass4">
            <b-form-checkbox id="input-ccrass4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-ccrass5" 
                        label="[ 05 ] Approved lending authorities are hierarchically structured and vested exclusively in credit committees and/or individuals of appropriate seniority that have demonstrated the required levels of knowledge and expertise in credit assessment standards and techniques and credit-bearing products:" 
                        label-for="input-ccrass5" aria-describedby="help-block-ccrass5">
            <b-form-checkbox id="input-ccrass5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccrass6" 
                        label="[ 06 ] Specialist credit analysts are assigned to your unit to review and assess the creditworthiness of current and prospective borrowers and assign risk ratings independently of relationship managers:" 
                        label-for="input-ccrass6"  aria-describedby_="help-block-ccrass6">
            <b-form-checkbox id="input-ccrass6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass6">
            Relationship managers are members of a business line's sales management team that do not have lending authority.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccrass7" 
            label="[ 07 ] Credit approvals are based on internal credit assessments and analyses of each current and prospective borrower and consider third party credit assessments and/or credit risk ratings where available:"
            label-for="input-ccrass7" aria-describedby="help-block-ccrass7">
            <b-form-checkbox id="input-ccrass7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-ccrass8" 
            label="[ 08 ] Internal credit risk ratings are automatically generated by credit assessment/pricing models that can only be overridden by credit committees and/or individuals with appropriate lending authority:" 
            label-for="input-ccrass8" aria-describedby="help-block-ccrass8">
            <b-form-checkbox id="input-ccrass8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccrass9" 
            label="[ 09 ] The Risk Adjusted Return on Capital (RAROC), or equivalent metric, is calculated for each loan proposal independently of relationship managers; where RAROC does not exceed the required hurdle rate additional approval is required:" 
            label-for="input-ccrass9"  aria-describedby="help-block-ccrass9">
            <b-form-checkbox id="input-ccrass9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass9">
            Relationship managers are members of a business line's sales management team that do not have lending authority. The 'hurdle rate' is the firm's minimum required return on capital typically approved by the firm's Asset and Liability Management (or equivalent) committee.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccrass10" 
            label="[ 10 ] All credit proposals have undergone Know Your Customer (KYC) checks:" 
            label-for="input-ccrass10"  aria-describedby_="help-block-ccrass10">
            <b-form-checkbox id="input-ccrass10" v-model="form.answer10" switch required><b>{{ form.answer10?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccrass10">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
