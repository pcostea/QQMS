Vue.component("exectn", {
    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'EXECTN',
            type: 'Generic',
        }
    },
    methods: {
        computeScore() {
            return Math.min(this.form.answer01_04, this.form.answer05, this.form.answer06);
        }
    },
    template: `
    <b-card sub-tile="This E-RCSA relates to the degree of process automation, the reliability and robustness of IT and the quality of inputs." header-tag="header" footer-tag="footer">
    <template #header>
    <h6 class="mb-0">Generic Execution</h6>
    </template>
    <b-card-text>
        <b-form-group label="Select the corresponding answer:" v-slot="{ariaDescribedby}">
        <b-form-radio v-model="form.answer01_04" :aria-describedby="ariaDescribedby" name="exectn" value="100">[ 01 ] Your unit is fully automated.</b-form-radio>
        <b-form-text id="ariaDescribedby">'Fully automated' means straight-through-processing (STP) i.e. your unit is supported by a single core system that captures, processes, controls and reports substantially all inputs and data in a 'locked-in' automated process in real-time. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.</b-form-text>
        <b-form-radio v-model="form.answer01_04" :aria-describedby="ariaDescribedby" name="exectn" value="80">[ 02 ] Your processes are highly automated.</b-form-radio>
        <b-form-text id="ariaDescribedby">You should consider user developed LOols (e.g. macro driven spreadsheets, databases etc.) as non-automated processes. </b-form-text>
        <b-form-radio v-model="form.answer01_04" :aria-describedby="ariaDescribedby" name="exectn" value="50">[ 03 ] Your processes are moderately automated.</b-form-radio>
        <b-form-text id="ariaDescribedby">You should consider user developed tools (e.g. macro driven spreadsheets, databases etc.) as non-automated processes.</b-form-text>
        <b-form-radio v-model="form.answer01_04" :aria-describedby="ariaDescribedby" name="exectn" value="0">[ 04 ] Your processes are predominantly manual.</b-form-radio>
        <b-form-text id="ariaDescribedby">You should consider user developed tools (e.g. macro driven spreadsheets, databases etc.) as non-automated processes.</b-form-text>
        </b-form-group>
        <b-form-group label="[ 05 ] What percentage of your' unit's inputs needs to be repaired or rejected prior to processing?" v-slot="{ariaDescribedby}">
        <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="exectn5" value="100">&lt;1%</b-form-radio>
        <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="exectn5" value="75">&ge;1% &amp; &lt; 5%</b-form-radio>
        <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="exectn5" value="50">&ge; 5% &amp; &lt; 10%</b-form-radio>
        <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="exectn5" value="25">&ge; 10% &amp; &lt; 20%</b-form-radio>
        <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="exectn5" value="0">&ge; 20%</b-form-radio>
        </b-form-group>
        <b-form-group label="[ 06 ] How many core systems failures have occurred within the past 12 months?" v-slot="{ ariaDescribedby }">
        <b-form-text id="ariaDescribedby">Only count technology related failures that caused a major operational impact due to one or a combination of: processing re-runs, idle time, recovery or workaround procedares, significant processing delays, loss of service quality etc. A core system is one that provides a significant portion of the automated functions that you rely on to capture, process, control and report data.</b-form-text>
        <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.answer06" name="exectn6" value="100">0</b-form-radio>
        <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.answer06" name="exectn6" value="75">1</b-form-radio>
        <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.answer06" name="exectn6" value="50">2 to 3</b-form-radio>
        <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.answer06" name="exectn6" value="25">4 to 8</b-form-radio>
        <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.answer06" name="exectn6" value="0">&gt; 8</b-form-radio>
        </b-form-group>
    </b-card-text>
    <template #footer>
    <h2>Score: {{computeScore()}}</h2>
    </template> 
    </b-card>
    `
});