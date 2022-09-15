Vue.component("intlam", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'INTLAM',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 85,
                answer03: 80,
                answer04: 60,
                answer05: 60,
                answer06: 60,
                answer07: 50,
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
        <b-card sub-title="This E-RCSA relates to the controls applied over the access to IT systems, including remote access, by personnel (employees, contractors and temps) authorized to use company owned PCs (desktops and laptops)." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Internal Logical Access Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-intlam1" 
                          label="[ 01 ] Passwords required by personnel assigned to your unit to access core systems are strong:"
                          label-for="input-intlam1" aria-describedby="help-block-intlam1">
            <b-form-checkbox id="input-intlam1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam1">
            A strong password must have the following minimum properties: comprised of at least eight characters; include at least one special character; and include a variety of upper- and lower-case letters. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intlam2" 
                          label="[ 02 ] User ID and password combinations required by personnel assigned to your unit to access core systems are complemented by an extra security layer:" 
                          label-for="input-intlam2" aria-describedby="help-block-intlam2">
            <b-form-checkbox id="input-intlam2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam2">
            Extra security layers include biometric, USB token, passcode exchange on pre-approved mobile devices, verbal call-back/ confirmation etc. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-intlam3" 
                          label="[ 03 ] Attempts by personnel assigned to your unit to download business-critical data to a removable storage or mobile device, or to an unauthorized application are automatically blocked and attempts are logged and followed-up by an independent risk control function:" 
                          label-for="input-intlam3"  aria-describedby_="help-block-intlam3">
            <b-form-checkbox id="input-intlam3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam3">
            A business-critical data element is one that, if faulty or subject to unauthorized disclosure, can potentially cause material losses due to, for example, any legal or regulatory requirements, improper use or the values associated with the data element.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intlam4" 
            label="[ 04 ] Passwords required by personnel assigned to your unit to access core systems are forced to reset at least once within every three months:"
            label-for="input-intlam4" aria-describedby="help-block-intlam4">
            <b-form-checkbox id="input-intlam4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam4">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intlam5" 
                        label="[ 05 ] User IDs of personnel assigned to your unit to access core systems are blocked after three failed access attempts and require reset:" 
                        label-for="input-intlam5" aria-describedby="help-block-intlam5">
            <b-form-checkbox id="input-intlam5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam5">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intlam6" 
                        label="[ 06 ] The core system access rights assigned to personnel in your unit are immediately revoked upon leaving a role:" 
                        label-for="input-intlam6"  aria-describedby_="help-block-intlam6">
            <b-form-checkbox id="input-intlam6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam6">
            If the individual has access to highly sensitive data or high-risk functions 'immediately' means upon the individual leaving the role; in all other cases, it means no later than the actual day of departure. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intlam7" 
            label="[ 07 ] The core system access rights of personnel assigned to your unit are linked to formal job descriptions and are independently reviewed and signed-off by a systems security specialist:"
            label-for="input-intlam7" aria-describedby="help-block-intlam7">
            <b-form-checkbox id="input-intlam7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam7">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-intlam8" 
            label="[ 08 ] Access to your core systems is automatically terminated after a predetermined period of inactivity (timeout):" 
            label-for="input-intlam8" aria-describedby="help-block-intlam8">
            <b-form-checkbox id="input-intlam8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam8">
            A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-intlam9" 
            label="[ 09 ] Core system access rights for all personnel assigned to your unit have been recertified within the last six months:" 
            label-for="input-intlam9"  aria-describedby_="help-block-intlam9">
            <b-form-checkbox id="input-intlam9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-intlam9">
            Recertification involves your manager or supervisor receiving a schedule of all personnel assigned to your unit with details of their access rights. The schedule is reviewed and signed-off to confirm that the schedule is complete and accurate with respect to the personnel working in your unit and the access rights granted are consistent with their roles. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
