Vue.component("datqty", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'DATQTY',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 100,
                answer04: 80,
                answer05: 75,
                answer06: 50,
                answer07: 40,
                answer08: 25,
                answer09: 25,
                answer10: 10,
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
        <b-card sub-title="This E-RCSA relates to data governance and the management of data quality assurance, the degree of uniqueness of reference data within the organization and the application and monitoring of data standards." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Data Quality Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-datqty1" 
                          label="[ 01 ] Data standards and quality is subject to group-wide governance exercised by a formally designated committee, a similar body or suitable senior individual:"
                          label-for="input-datqty1" aria-describedby="help-block-datqty1">
            <b-form-checkbox id="input-datqty1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty1">
            The body that exercises governance over data quality and standards ensures compliance with corporate policies, sets and approves data quality standards and monitors performance against those standards.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-datqty2" 
                          label="[ 02 ] All data elements are assigned a standardized classification according to their business criticality:" 
                          label-for="input-datqty2" aria-describedby="help-block-datqty2">
            <b-form-checkbox id="input-datqty2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty2">
            A business-critical data element is one that, if faulty or subject to unauthorized disclosure, can potentially cause material losses due to, for example, any legal or regulatory requirements, improper use or the values associated with the data element.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-datqty3" 
                          label="[ 03 ] Business critical data elements are subject to ongoing validation against at least one single approved and independent authoritative source or imported through an approved source and your unit is authorized to repair inaccurate or inconsistent data:" 
                          label-for="input-datqty3"  aria-describedby="help-block-datqty3">
            <b-form-checkbox id="input-datqty3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty3">
            A business-critical data element is one that, if faulty or subject to unauthorized disclosure, can potentially cause material losses due to, for example, any legal or regulatory requirements, improper use or the values associated with the data element.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-datqty4" 
            label="[ 04 ] The reference data source your unit maintains is the single source of reference data applied in end-to-end transaction processing and accounting either for the whole group or a whole business division within the group:"
            label-for="input-datqty4" aria-describedby="help-block-datqty4">
            <b-form-checkbox id="input-datqty4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty4">
            Answer 'no' if the reference data source maintained by your unit is tied to specific product applications, geographies, legal entities or business units resulting in the probability that the same reference data is duplicated in multiple reference data sources within the group.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-datqty5" 
                        label="[ 05 ] Amendments made to reference data by your unit as the result of data quality validation checks are subject to dual control:" 
                        label-for="input-datqty5" aria-describedby="help-block-datqty5">
            <b-form-checkbox id="input-datqty5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty5">
            Dual control means that no single individual can amend data without the obligatory involvement of a second individual.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-datqty6" 
                        label="[ 06 ] An audit trail of all data amendments is available as evidence of data validation provenance:" 
                        label-for="input-datqty6"  aria-describedby_="help-block-datqty6">
            <b-form-checkbox id="input-datqty6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-datqty7" 
            label="[ 07 ] Where industry standard identifiers are mandated by regulators for external reporting purposes, e.g. legal entity identifiers (LEIs), these have displaced any other internal, non-standard identifiers in end-to-end transaction processing and related core systems thereby eliminating the need for data mapping:"
            label-for="input-datqty7" aria-describedby="help-block-datqty7">
            <b-form-checkbox id="input-datqty7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty7">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-datqty8" 
            label="[ 08 ] There is a defined process to escalate and address recurring data quality issues:" 
            label-for="input-datqty8" aria-describedby="help-block-datqty8">
            <b-form-checkbox id="input-datqty8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-datqty9" 
            label="[ 09 ] There is a defined process to provide feedback to the internal or external source of recurring data quality issues:" 
            label-for="input-datqty9"  aria-describedby="help-block-datqty9">
            <b-form-checkbox id="input-datqty9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty9">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-datqty10" 
            label="[ 10 ] Data formats and content have been standardized in a complete and current data dictionary or similar resource:" 
            label-for="input-datqty10"  aria-describedby_="help-block-datqty10">
            <b-form-checkbox id="input-datqty10" v-model="form.answer10" switch required><b>{{ form.answer10?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-datqty10">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
