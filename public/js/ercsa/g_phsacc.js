Vue.component("phsacc", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'PHSACC',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 80,
                answer03: 60,
                answer04: 30,
                answer05: 20,
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
        <b-card sub-title="This E-RCSA relates to the risk controls applied over the physical access of individuals to security areas." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Physical Access</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-phsacc1" 
                          label="[ 01 ] Access to your unit and high security areas within your unit (if any) are protected by appropriate mechanisms commensurate with the degree of security required:"
                          label-for="input-phsacc1" aria-describedby="help-block-phsacc1">
            <b-form-checkbox id="input-phsacc1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc1">
            The degree of security required and protection mechanisms must comply with standards and set by an independent real estate management, protection, or similar function. Physical security mechanisms include electronic pass readers, biometric devices, passcodes + keypad and dual control (e.g. key + combination held by separate individuals).
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-phsacc2" 
                          label="[ 02 ] The physical access rights of personnel assigned to your unit are immediately revoked upon leaving a role:" 
                          label-for="input-phsacc2" aria-describedby="help-block-phsacc2">
            <b-form-checkbox id="input-phsacc2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc2">
            If the individual has access to a high security area, 'immediately' means upon the individual leaving the role; in all other cases, it means no later than the actual day of departure. Examples of high security areas include a vault, areas where high value or sensitive equipment is located, e.g. a data center and areas where sensitive and/or confidential documents are stored.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-phsacc3" 
                          label="[ 03 ] All accesses to high security areas within your unit are separately logged and subject to 24-hour surveillance:" 
                          label-for="input-phsacc3"  aria-describedby_="help-block-phsacc3">
            <b-form-checkbox id="input-phsacc3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc3">
            Answer 'yes' if this is not applicable, i.e. there are no high security areas within your unit 24-hour surveillance is typically achieved via CC TV or similar mechanism. Examples of high security areas include a vault, areas where high value or sensitive equipment is located, e.g. a data center, areas where sensitive and/or confidential documents are stored.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-phsacc4" 
            label="[ 04 ] Access rights of personnel assigned to your unit to high security areas are linked to formal job descriptions and are independently reviewed and signed-off by a security specialist:"
            label-for="input-phsacc4" aria-describedby="help-block-phsacc4">
            <b-form-checkbox id="input-phsacc4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc4">
            Answer 'yes' if this is not applicable, i.e. there are no high security areas within your unit. Examples of high security areas include a vault, areas where high value or sensitive equipment is located, e.g. a data center and areas where sensitive and/or confidential documents are stored.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-phsacc5" 
                        label="[ 05 ] Access rights of the personnel assigned to your unit have been recertified within the last six months:" 
                        label-for="input-phsacc5" aria-describedby="help-block-phsacc5">
            <b-form-checkbox id="input-phsacc5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc5">
            Recertification involves your manager or supervisor receiving a schedule of all personnel assigned to your unit with details of their access rights. The schedule is reviewed and signed-off to confirm that the schedule is complete and accurate with respect to the personnel working in your unit and the access rights granted are consistent with their roles.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-phsacc6" 
                        label="[ 06 ] Visitors that require access to your unit and security areas within it are preapproved, issued with visible 'visitor' badges and are subject to oversight from authorized personnel:" 
                        label-for="input-phsacc6"  aria-describedby_="help-block-phsacc6">
            <b-form-checkbox id="input-phsacc6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-phsacc7" 
            label="[ 07 ] The arrival and departure times of all accesses to your unit are logged:"
            label-for="input-phsacc7" aria-describedby="help-block-phsacc7">
            <b-form-checkbox id="input-phsacc7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-phsacc7">
            </b-form-text>
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
