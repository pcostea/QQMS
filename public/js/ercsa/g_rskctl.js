Vue.component("rskctl", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'RSKCTL',
            type: 'Generic',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 70,
                answer05: 50,
                answer06: 40,
                answer07: 40,
                answer08: 25,
                answer09: 15,
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
        <b-card sub-title="This E-RCSA relates to the role of an independent risk control function (second line of defense) and how the status of risk controls is monitored by business origination and transaction processing functions (first line of defense)." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Generic Risk Control</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-rskctl1" 
                          label="[ 01 ] An independent risk control, risk management or similar function is assigned to your unit to provide ongoing support and guidance on risk, control, audit and compliance issues:"
                          label-for="input-rskctl1" aria-describedby="help-block-rskctl1">
            <b-form-checkbox id="input-rskctl1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl1">
            Independent risk control functions typically include operational risk management (operations and data management), technology risk management (IT), credit risk management/credit analysts (credit) and middle offices (trading, liquidity and interest rate management).
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-rskctl2" 
                          label="[ 02 ] The status of risk controls relative to all your key risks is subject to continuous monitoring against predefined operating limits and benchmarks:" 
                          label-for="input-rskctl2" aria-describedby="help-block-rskctl2">
            <b-form-checkbox id="input-rskctl2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl2">
            Answer 'yes' only if your risk control monitoring involves a comparison of the actual status of all your key risks with predefined operating limits and benchmarks. Operating control benchmarks and limits include key risk indicators (KRIs), lending authorities, approved credit facilities and trading/dealing limits.The most widely adopted form of risk monitoring in operating units is key risk indicators (KRIs) where predefined benchmarks determine acceptable operating conditions ('green'), marginally acceptable ('amber') and unacceptable ('red').
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-rskctl3" 
                          label="[ 03 ] Risk control operating limits and benchmarks applicable to your unit are categorized according to their criticality:" 
                          label-for="input-rskctl3"  aria-describedby_="help-block-rskctl3">
            <b-form-checkbox id="input-rskctl3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl3">
            Answer 'yes' only if the system of criticality categorization is standardized within your business division.The criticality categorization determines the timing and distribution of notifications of limit or benchmark excesses.Operating limits and benchmarks include key risk indicators (KRIs), lending authorities, approved credit facilities, trading limits, treasury dealing limits and limits relating to liquidity risk and interest rate risk in the banking book (IRRBB). Timings typically used are 'real-time' (immediately upon occurrence), 'near real-time' (the same day of occurrence), 'next day' (the day after occurrence) or 'other'. Benchmark excesses in the case of KRIs typically means all 'red' conditions.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-rskctl4" 
            label="[ 04 ] An independent risk control function has signed-off on all your operating risk control benchmarks and limits including their criticality categorization:"
            label-for="input-rskctl4" aria-describedby="help-block-rskctl4">
            <b-form-checkbox id="input-rskctl4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl4">
            Operating control benchmarks and limits include key risk indicators (KRIs), lending authorities, approved credit facilities and trading limits.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-rskctl5" 
                        label="[ 05 ] An independent risk control function routinely receives copies of all notifications of operating limit and benchmark excesses occurring in your unit:" 
                        label-for="input-rskctl5" aria-describedby="help-block-rskctl5">
            <b-form-checkbox id="input-rskctl5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl5">
            Operating limits and benchmarks include key risk indicators (KRIs), lending authorities, approved credit facilities, trading limits, treasury dealing limits and limits relating to liquidity risk and interest rate risk in the banking book (IRRBB). Benchmark excesses in the case of KRIs typically means all 'red' conditions.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-rskctl6" 
                        label="[ 06 ] Risk and control documentation relative to your unit has been reviewed and updated within the past 12 months:" 
                        label-for="input-rskctl6"  aria-describedby_="help-block-rskctl6">
            <b-form-checkbox id="input-rskctl6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl6">
            This is usually in the form of a 'Risk Register' whose minimum information requirements are: a description of each key risk; a description of the key controls that are designed to provide reasonable assurance that key risks are effectively mitigated; and a description of the key risk indicators (KRIs) that report the ongoing status of the effectiveness of the key risk controls.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-rskctl7" 
            label="[ 07 ] Process maps covering your unit's activities are current and were prepared by suitably expert personnel and include an assessment of the effectiveness of the design of risk controls:"
            label-for="input-rskctl7" aria-describedby="help-block-rskctl7">
            <b-form-checkbox id="input-rskctl7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl7">
            Process maps describe the information flows and associated processes within a business unit, usually in the form of flow diagrams, including who is responsible for each process, the quality standards applicable to the process and how the success of a business process is determined.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-rskctl8" 
            label="[ 08 ] Newly hired personnel assigned to your unit receive risk and control awareness training coordinated by the independent risk control function as part of their induction:" 
            label-for="input-rskctl8" aria-describedby="help-block-rskctl8">
            <b-form-checkbox id="input-rskctl8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-rskctl9" 
            label="[ 09 ] All personnel assigned to your unit have received risk and control awareness training coordinated by the independent risk control function within the last 12 months:" 
            label-for="input-rskctl9"  aria-describedby_="help-block-rskctl9">
            <b-form-checkbox id="input-rskctl9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-rskctl9">
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
