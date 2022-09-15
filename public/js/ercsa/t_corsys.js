Vue.component("corsys", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'CORSYS',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 80,
                answer05: 80,
                answer06: 80,
                answer07: 80,
                answer08: 60,
                answer09: 60,
                answer10: 40,
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
        <b-card sub-title="This E-RCSA relates to the governance, development, maintenance and security of core systems. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Core Systems Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-corsys1" 
                          label="[ 01 ] The core system is subject to groupwide governance exercised by a formally designated committee, a similar body or suitably senior individual:"
                          label-for="input-corsys1" aria-describedby="help-block-corsys1">
            <b-form-checkbox id="input-corsys1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys1">
            The body that exercises group- wide governance over the core system ensures compliance with approved project/development lifecycle and change-control standards, sets development and maintenance priorities, approves the implementation of new operating software and material changes to existing software, monitors the event log and oversees the core system's operation and performance. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-corsys2" 
                          label="[ 02 ] Transmissions of business- critical data elements to and from third party users and the core system are encrypted:" 
                          label-for="input-corsys2" aria-describedby="help-block-corsys2">
            <b-form-checkbox id="input-corsys2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys2">
            A business-critical data element is one that, if faulty or subject to unauthorized disclosure, can potentially cause material losses due to, for example, any legal or regulatory requirements, improper use, or values associated with the data element. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-corsys3" 
                          label="[ 03 ] The use of privileged utility programs that can either change the core system's data or override system controls are used exclusively for essential and/or emergency maintenance and their use is subject to dual control and restricted to authorized IT personnel who are independent of the system's processing:" 
                          label-for="input-corsys3"  aria-describedby="help-block-corsys3">
            <b-form-checkbox id="input-corsys3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys3">
            Dual control means that no single individual can alter the core system's data or override system controls without the obligatory involvement or independent review of a second individual.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-corsys4" 
            label="[ 04 ] Separate development, testing and operational environments are maintained with access restricted to authorized personnel:"
            label-for="input-corsys4" aria-describedby="help-block-corsys4">
            <b-form-checkbox id="input-corsys4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys4">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-corsys5" 
                        label="[ 05 ] The core system is protected against malware through state-of-the-art detection, prevention and recovery programs and controls:" 
                        label-for="input-corsys5" aria-describedby="help-block-corsys5">
            <b-form-checkbox id="input-corsys5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys5">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-corsys6" 
                        label="[ 06 ] The core system's data and software are regularly backed-up and stored in a secure, off-site location:" 
                        label-for="input-corsys6"  aria-describedby_="help-block-corsys6">
            <b-form-checkbox id="input-corsys6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys6">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-corsys7" 
            label="[ 07 ] Transmissions of business- critical data elements to and from core systems within the group (internal) are encrypted.:"
            label-for="input-corsys7" aria-describedby="help-block-corsys7">
            <b-form-checkbox id="input-corsys7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys7">
            A business-critical data element is one that, if faulty or subject to unauthorized disclosure, can potentially cause material losses due to, for example, any legal or regulatory requirements, improper use, sensitivity or the values associated with the data element. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-corsys8" 
            label="[ 08 ] Access to the core system's source code is restricted to authorized technology personnel who are independent of the system's processing:" 
            label-for="input-corsys8" aria-describedby="help-block-corsys8">
            <b-form-checkbox id="input-corsys8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-corsys9" 
            label="[ 09 ] The core system is periodically stress tested (capacity management) to confirm that it can deliver the required performance when subject to extreme but plausible processing volumes and operating conditions:" 
            label-for="input-corsys9"  aria-describedby="help-block-corsys9">
            <b-form-checkbox id="input-corsys9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys9">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-corsys10" 
            label="[ 10 ] Processing exceptions, faults, unusual user activity and security breaches are logged in an 'events log', or similar document and regularly reviewed:" 
            label-for="input-corsys10"  aria-describedby_="help-block-corsys10">
            <b-form-checkbox id="input-corsys10" v-model="form.answer10" switch required><b>{{ form.answer10?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-corsys10">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
