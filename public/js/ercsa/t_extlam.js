Vue.component("extlam", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'EXTLAM',
            type: 'Technical',
            weights: {
                answer01: 0,
                answer02: 100,
                answer03: 100,
                answer04: 60,
                answer05: 60,
                answer06: 20,
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
            }
            return Math.max(0, 100 - sum);
        }
    },
    template: `
        <b-card sub-title="This E-RCSA relates to the risk controls applied over the access to IT systems by third parties (e.g. customers, suppliers etc.) including via mobile devices." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical External Logical Access Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-extlam1" 
                          label="[ 01 ]The core system can be accessed by third parties (e.g. customers, suppliers etc.) including via mobile devices:"
                          label-for="input-extlam1" aria-describedby="help-block-extlam1">
            <b-form-checkbox id="input-extlam1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam1">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-extlam2" 
                          label="[ 02 ] Third party passwords are strong:" 
                          label-for="input-extlam2" aria-describedby="help-block-extlam2">
            <b-form-checkbox id="input-extlam2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam2">
            A strong password must have the following minimum properties: comprise at least eight characters; include at least one special character; and include a variety of upper- and lower-case letters.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-extlam3" 
                          label="[ 03 ] Third party user ID and password combinations require additional security for inherently risky activities:" 
                          label-for="input-extlam3"  aria-describedby_="help-block-extlam3">
            <b-form-checkbox id="input-extlam3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam3">
            Extra security layers include biometric, USB token, passcode exchange on pre-approved mobile devices, verbal call-back/ confirmation etc. Inherently risky activities include authorizations to release values, e.g. payments, transfer of securities, access to confidential or sensitive information etc.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-extlam4" 
            label="[ 04 ] Passwords are periodically disabled forcing the third party to request a password reset:"
            label-for="input-extlam4" aria-describedby="help-block-extlam4">
            <b-form-checkbox id="input-extlam4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-extlam5" 
                        label="[ 05 ] Third party user IDs are blocked after three failed access attempts and require reset:" 
                        label-for="input-extlam5" aria-describedby="help-block-extlam5">
            <b-form-checkbox id="input-extlam5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-extlam6" 
                        label="[ 06 ] Third party access is automatically logged out after a predetermined period of inactivity (timeout):" 
                        label-for="input-extlam6"  aria-describedby_="help-block-extlam6">
            <b-form-checkbox id="input-extlam6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-extlam6">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
