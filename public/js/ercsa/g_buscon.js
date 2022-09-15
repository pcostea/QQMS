Vue.component("buscon", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'BUSCON',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 75,
                answer04: 30,
                answer05: 15,
                answer06: 10,
                answer07: 5,
                answer08: 5,
                answer09: 5,
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
        <b-card sub-title="This E-RCSA relates to the effectiveness of business continuity plans and planning." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Business Continuity</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-buscon1" 
                          label="[ 01 ] Your unit's activities can be recovered and reactivated at an alternative site in an acceptable timeframe:"
                          label-for="input-buscon1" aria-describedby="help-block-buscon1">
            <b-form-checkbox id="input-buscon1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon1">
            Answer 'yes' if there has been a formal assessment made and documented of your unit's required recovery timeframe which will be dependent on the time-criticality of its operations.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-buscon2" 
                          label="[ 02 ] Your unit has a fully documented business continuity plan:" 
                          label-for="input-buscon2" aria-describedby="help-block-buscon2">
            <b-form-checkbox id="input-buscon2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon2">
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-buscon3" 
                          label="[ 03 ] The recovery of your unit's activities at an alternative site has been fully tested through a live simulation of a disaster scenario, under the direction of a business continuity specialist, within the past 12 months:" 
                          label-for="input-buscon3"  aria-describedby_="help-block-buscon3">
            <b-form-checkbox id="input-buscon3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon3">
            A business continuity specialist is an individual who has been specifically designated in that role and whose role and responsibilities have been communicated to all affected personnel. The business continuity specialist can be either a member of your unit's staff or an independent specialist function with organization-wide responsibility or both.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-buscon4" 
            label="[ 04 ] Your unit's business continuity plan has been reviewed and signed-off by a business continuity specialist within the last 12 months:"
            label-for="input-buscon4" aria-describedby="help-block-buscon4">
            <b-form-checkbox id="input-buscon4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon4">
            A business continuity specialist is an individual who has been specifically designated in that role and whose role and responsibilities have been communicated to all affected personnel. The business continuity specialist can be either a member of your unit's staff or an independent specialist function with organization-wide responsibility or both.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-buscon5" 
                        label="[ 05 ] All key personnel assigned to your unit have been fully briefed by the business continuity specialist on the procedures to be followed and their respective roles and responsibilities if the business continuity plan were to be invoked.:" 
                        label-for="input-buscon5" aria-describedby="help-block-buscon5">
            <b-form-checkbox id="input-buscon5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon5">
            A business continuity specialist is an individual who has been specifically designated in that role and whose role and responsibilities have been communicated to all affected personnel. The business continuity specialist can be either a member of your unit's staff or an independent specialist function with organization-wide responsibility or both.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-buscon6" 
                        label="[ 06 ] Your unit's business continuity plan has been reviewed and signed-off by your unit's manager:" 
                        label-for="input-buscon6"  aria-describedby_="help-block-buscon6">
            <b-form-checkbox id="input-buscon6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-buscon7" 
            label="[ 07 ] Contact information (names, functions and contact details) relative to all personnel affected by the plan, if invoked, is current and readily accessible by key personnel (supervisors and managers) from an offsite location.:"
            label-for="input-buscon7" aria-describedby="help-block-buscon7">
            <b-form-checkbox id="input-buscon7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-buscon8" 
            label="[ 08 ] A notification (callout) test coordinated by the business continuity specialist has been performed within the last 12 months:" 
            label-for="input-buscon8" aria-describedby="help-block-buscon8">
            <b-form-checkbox id="input-buscon8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon8">
            A callout test typically involves the business continuity specialist delivering a test message to one or more key personnel who then cascade the message down their predefined communications chain. Upon completion of the test, the business continuity specialist ensures that the test message has been delivered to all affected personnel in a timely manner and in uncorrupted form. A business continuity specialist is an individual who has been specifically designated in that role and whose role and responsibilities have been communicated to all affected personnel. The business continuity specialist can be either a member of your unit's staff or an independent specialist function with organization-wide responsibility or both.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-buscon9" 
            label="[ 09 ] All key personnel (supervisors and managers) have been issued a copy of an up-to-date business continuity plan with instructions to maintain it readily accessible at an offsite location:" 
            label-for="input-buscon9"  aria-describedby_="help-block-buscon9">
            <b-form-checkbox id="input-buscon9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-buscon9">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
