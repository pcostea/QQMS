Vue.component("prdapp", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'PRDAPP',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 100,
                answer04: 80,
                answer05: 80,
                answer06: 40,
                answer07: 40,
                answer08: 20,
                answer09: 20,
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
        <b-card sub-title="This E-RCSA relates to the approval of new products and the periodical review/reapproval of existing products." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Product Approval and Review</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-prdapp1" 
                          label="[ 01 ] Product approval and review is subject to group-wide governance exercised by a formally designated committee, a similar body or suitably senior individual:"
                          label-for="input-prdapp1" aria-describedby="help-block-prdapp1">
            <b-form-checkbox id="input-prdapp1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp1">
            The body that exercises governance over product approval and review sets group-wide policies and standards, approves the implementation of new products and material changes to existing products and oversees periodic product reviews.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-prdapp2" 
                          label="[ 02 ] Product approval and review policies and standards are documented in a form that is readily accessible to all personnel engaged in sales or trading related activities in your unit:" 
                          label-for="input-prdapp2" aria-describedby="help-block-prdapp2">
            <b-form-checkbox id="input-prdapp2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp2">
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-prdapp3" 
                          label="[ 03 ] The products and services offered to clients or traded with counterparties by your unit have been either approved (if a new product) or reviewed/reapproved within the last 12 months:" 
                          label-for="input-prdapp3"  aria-describedby="help-block-prdapp3">
            <b-form-checkbox id="input-prdapp3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp3">
            Answer 'no' if the product or service is bundled with one or more other products when sold, e.g. a loan with insurance or a loan with an interest rate swap, and the bundled product has not been subject to the product approval and review process as a standalone product. Bundled means that clients have been offered multiple products whose cash flows are linked either contractually or by verbal or written explanation at the point of sale.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-prdapp4" 
            label="[ 04 ] The product is sold only to customers that have undergone a formal and documented profiling aimed at ensuring that they fall within the approved target for the product and the product and amount sold is suitable considering factors such as customers' risk tolerance, net worth and confirmation that product complexities are understood:"
            label-for="input-prdapp4" aria-describedby="help-block-prdapp4">
            <b-form-checkbox id="input-prdapp4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-prdapp5" 
                        label="[ 05 ] The product has a designated 'product owner':" 
                        label-for="input-prdapp5" aria-describedby="help-block-prdapp5">
            <b-form-checkbox id="input-prdapp5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp5">
            The product owner can be a committee, product management department or individual, e.g. a product manager, and need not be independent of the product's respective sales teams or trading desks. The product owner is responsible for ensuring that the product's offering complies with group-wide policies and standards and any specific conditions of its approval, e.g. amounts sold limited by customers' net worth, or restricted to customers coded 'speculative' who have a certain minimum risk tolerance.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-prdapp6" 
                        label="[ 06 ] Customer complaints and grievances relative to the product are logged and a fully documented audit trail of follow-up actions is maintained:" 
                        label-for="input-prdapp6"  aria-describedby_="help-block-prdapp6">
            <b-form-checkbox id="input-prdapp6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-prdapp7" 
            label="[ 07 ] Compliance with limitations imposed on the product's offering as a condition of its approval is actively monitored by the product owner:"
            label-for="input-prdapp7" aria-describedby="help-block-prdapp7">
            <b-form-checkbox id="input-prdapp7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-prdapp8" 
            label="[ 08 ] The product owner reviews and signs off on all complaints and grievances and respective follow-up actions:" 
            label-for="input-prdapp8" aria-describedby="help-block-prdapp8">
            <b-form-checkbox id="input-prdapp8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-prdapp9" 
            label="[ 09 ] Legal documents and sales materials (brochures, advertising etc.) relating to the product have been reviewed and signed-off by internal or external legal counsel and compliance:" 
            label-for="input-prdapp9"  aria-describedby="help-block-prdapp9">
            <b-form-checkbox id="input-prdapp9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-prdapp9">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
