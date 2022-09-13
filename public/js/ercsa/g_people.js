Vue.component("people",
{
    props: ["form"],
    data(){
        return {
            ercsa: 'PEOPLE',
            type: 'Generic',
            form: this.form
        }
    },
    methods:{
        computeScore(){
            return Math.min(this.form.answer01?100:0, 
                this.form.answer03, this.form.answer04, this.form.answer05,
                this.form.answer06?100:0);
        }
    },
    template:`
    <b-card sub-title="This E-RCSA relates to the degree of stress, experience and competence of personnel assigned to your unit." header-tag="header" footer-tag="footer">
    <template #header>
    <h6 class="mb-O">Generic People</h6>
    </template>
    
    <b-card-text>
    <b-form-group id="input-group-people1" label="[ 01 ] Is there a formal , structured and periodic, at least quarterly program of staff performance evaluations?" label-for="input-people1" aria-describedby="help-block-people1">
    <b-form-checkbox id="input-people1" v-model="form.answer01" switch required><b>{{form.answer01?'Yes':'No'}}</b></b-form-checkbox>
    <b-form-text id="help-block-people1">Answer 'Yes' only if the program of staff performance evaluation meets <b><U>ALL</U></b> these four conditions:
        <ol>
        <li>The program is formally structured and is overseen by a Human Resources function</li>
        <li>Feedback to the individual being evaluated is provided and outcomes are documented</li>
        <li>The program is applicable to all employees and fixed term contract staff</li>
        <li >Evaluations are conducted at least quarterly. </li>
        </ol>
    </b-form-text > 
    </b-form-group>
    
    <b-form-group id="input-group-people2" label="[ 02 ] What is your unit's approved headcount?" label-for="input-people2" aria-describedby="help-block-people2">
    <b-form-spinbutton id="input-people2" min="0" max="999999" v-model="form.answer02" aria-describedby="help-block-people2" inline></b-form-spinbutton>
    <b-form-text id="help-block-people2">Include employees and fixed term contractors. Include part-time employees as one whole headcount (no fractions). Only include personnel that are assigned to your unit being assessed; do not include management and admini strat i ve personnel whose responsibilities cover multiple units. </b-form-text>
    </b-form-group>
    <b-form-group label="[ 03 ] Of the approved headcount, how many individuals are developing in their respective roles?" v-slot="{ariaDescribedby}">
    <b-form-text id="ariaDescribedby">Include individuals whose role, and/or are individuals who hare ither recently joined your unit (say) within the last 3 months or are learning a new skill, processes or technology. Your expectation is taht the individuals concerned will achiteve competence over time.</b-form-text>
    <b-form-radio v-model="form.answer03" :aria-describedby="ariaDescribedby" name="people3" value="100">0%</b-form-radio>
    <b-form-radio v-model="form.answer03" :aria-describedby="ariaDescribedby" name="people3" value="75">&gt; 0% &amp; &lt; 10%</b-form-radio>
    <b-form-radio v-model="form.answer03" :aria-describedby="ariaDescribedby" name="people3" value="50">&ge; 10% &amp; &lt; 30%</b-form-radio>
    <b-form-radio v-model="form.answer03" :aria-describedby="ariaDescribedby" name="people3" value="25">&ge; 30% &amp; &lt; 60%</b-form-radio>
    <b-form-radio v-model="form.answer03" :aria-describedby="ariaDescribedby" name="people3" value="0">&ge; 60% </b-form-radio>
    </b-form-group>
    <b-form-group label="[ 04 ] What is your unit's average daily overtime hours worked per individual, whether paid or unpaid, during the last 5 working days?" v-slot="{ariaDescribedby}">
    <b-form-text id="ariaDescribedby">For each of the past five working days, divide the total overtime hours worked by the individuals included in the approved headcount and were at work on those days to arrive at the daily average overtime worked per employee on each day. sum the daily average for the 5 days and divide by 5 and enter the result (round up to the next whole number). If you don't know the precise amount of overtime hours worked, use estimates</b-form-text>
    <b-form-radio v-model="form.answer04" :aria-describedby="ariaDescribedby" name="people4" value="100">&lt; 0.5 hours</b-form-radio>
    <b-form-radio v-model="form.answer04" :aria-describedby="ariaDescribedby" name="people4" value="75">&ge; 0.5 hours &amp; &lt; 1 hour</b-form-radio>
    <b-form-radio v-model="form.answer04" :aria-describedby="ariaDescribedby" name="people4" value="50">&ge; 1 hour &amp; &lt; 2 hours</b-form-radio>
    <b-form-radio v-model="form.answer04" :aria-describedby="ariaDescribedby" name="people4" value="25">&ge; 2 hours &amp; &lt; 4 hours</b-form-radio>
    <b-form-radio v-model="form.answer04" :aria-describedby="ariaDescribedby" name="people4" value="0">&ge; 4 hous</b-form-radio>
    </b-form-group>
    <b-form-group label="[ 05 ] Of your approved headcount, how many individuals are not meeting the expectations of their respective roles due to poor performance?" v-slot="{ariaDescribedby}">
    <b-form-text id="ariaDescribedby">Include individuals whose most recent performance evaluation was 'not meeting expectations' or similar due to poor performance.</b-form-text>
    <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="people5" value="100">0%</b-form-radio>
    <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="people5" value="75">&gt; 0% &amp; &lt; 2%</b-form-radio>
    <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="people5" value="50">&ge; 2% &amp; &lt; 5%</b-form-radio>
    <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="people5" value="25">&ge; 5% &amp; &lt; 8%</b-form-radio>
    <b-form-radio v-model="form.answer05" :aria-describedby="ariaDescribedby" name="people5" value="0">&ge; 8%</b-form-radio>
    </b-form-group>
    <b-form-group id="input-group-people6" label="[ 06 ] All employees and fixed term contractors assigned to your unit have taken 10 consecutive working days' vacation within the past 12 months?" label-for="input-people6" aria-describedby="help-block-people6">
    <b-form-checkbox id="input-people6" v-model="form.answer06" switch required><b>{{form.answer06?'Yes':'No' }}</b></b-form-checkbox>
    </b-form-group>
    </b-card-text>
    <template #footer>
    <h2>Score: {{computeScore()}}</h2>
    </template> 
    </b-card>
    `
});