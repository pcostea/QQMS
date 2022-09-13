Vue.component("ccradm", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'CCRADM',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 80,
                answer05: 60,
                answer06: 50,
                answer07: 30,
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
        <b-card sub-title="This E-RCSA relates to the monitoring of credit exposures vs. approved facilities and the maintenance of borrowers' documentation." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Corporate Credit Administration</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-ccradm1" 
                          label="[ 01 ] Credit management and monitoring systems (credit exposures vs. approved credit facilities and lending authorities) are maintained independently of your unit, i.e. your client relationship managers and other sales personnel have 'read only' access to these systems:"
                          label-for="input-ccradm1" aria-describedby="help-block-ccradm1">
            <b-form-checkbox id="input-ccradm1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm1">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-ccradm2" 
                          label="[ 02 ] A formal report is prepared for each borrower which summarizes the approved credit facilities, the risk rating, the identity of the credit committee and/or individual(s) who approved the credit facilities and the rationale for such approval:" 
                          label-for="input-ccradm2" aria-describedby="help-block-ccradm2">
            <b-form-checkbox id="input-ccradm2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm2">
            This document is typically referred to as a Credit Facility Report or CFR.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-ccradm3" 
                          label="[ 03 ] Complete and current credit files are maintained for each borrower that contain audited financial statements, credit analyses and any other documentation used in the assessment of the borrower's creditworthiness:" 
                          label-for="input-ccradm3"  aria-describedby_="help-block-ccradm3">
            <b-form-checkbox id="input-ccradm3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm3">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccradm4" 
            label="[ 04 ] Complete, accurate and timely reports of each borrowers' approved credit facilities and associated exposures are available on a 'one-obligor' basis:"
            label-for="input-ccradm4" aria-describedby="help-block-ccradm4">
            <b-form-checkbox id="input-ccradm4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm4">
            'One-obligor' means each borrower and those related parties (subsidiaries and affiliates) globally where the borrower has a direct control or interest. 'Timely' typically means reports are fully updated in real-time (best case) or at the start-of- business the next day (worst case).
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-ccradm5" 
                        label="[ 05 ] Loan agreements and associated legal documentation are reviewed and signed-off by internal or external legal counsel:" 
                        label-for="input-ccradm5" aria-describedby="help-block-ccradm5">
            <b-form-checkbox id="input-ccradm5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccradm6" 
                        label="[ 06 ] The allocation of lending limits to business lines within approved credit facilities are approved by your unit's formally appointed client relationship managers and centrally controlled independently of relationship managers:" 
                        label-for="input-ccradm6"  aria-describedby_="help-block-ccradm6">
            <b-form-checkbox id="input-ccradm6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm6">
            This process is typically referred to as a 'line allocation'. Relationship managers are members of your business line's sales management team that manage and control the firm's credit exposures with clients.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-ccradm7" 
            label="[ 07 ] Originals of sensitive loan documentation or loan documentation with intrinsic value, e.g. guarantees, securities tendered as collateral etc. are kept in safekeeping with copies placed on the credit files:"
            label-for="input-ccradm7" aria-describedby="help-block-ccradm7">
            <b-form-checkbox id="input-ccradm7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-ccradm7">
            Answer 'yes' if this is not applicable, i.e. loan documentation, collateral etc. are under the control of an operations unit that is organizationally independent of your unit. 'Safekeeping' typically means a fireproof safe or vault with access subject to dual control.
            </b-form-text>
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
