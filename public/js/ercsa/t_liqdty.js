Vue.component("liqdty", {

    props: ["form"],
    data() {
        return {
            form: this.form,
            ercsa: 'LIQDTY',
            type: 'Technical',
            weights: {
                answer01: 100,
                answer02: 100,
                answer03: 80,
                answer04: 80,
                answer05: 60,
                answer06: 50,
                answer07: 50,
                answer08: 50,
                answer09: 40,
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
        <b-card sub-title="This E-RCSA relates to the governance and management of liquidity (funding) including ensuring compliance with corporate policies and regulatory requirements concerning the liquidity coverage ratio (LCR) and net stable funding ratio (NSFR)." header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Technical Liquidity Management</h6>
        </template>
        <b-card-text>
            <b-form-group id="input-group-liqdty1" 
                          label="[ 01 ] Liquidity (funding) management is subject to groupwide governance exercised by a formally designated committee, a similar body or suitable senior individual:"
                          label-for="input-liqdty1" aria-describedby="help-block-liqdty1">
            <b-form-checkbox id="input-liqdty1" v-model="form.answer01" switch required><b>{{ form.answer01?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty1">
            The body that exercises governance over liquidity management ensures compliance with corporate policies and regulatory requirements.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-liqdty2" 
                          label="[ 02 ] The liquidity coverage ratio (LCR) and net stable funding ratio (NSFR) are computed daily and reported to your unit within an acceptable degree of completeness, accuracy and timeliness:" 
                          label-for="input-liqdty2" aria-describedby="help-block-liqdty2">
            <b-form-checkbox id="input-liqdty2" v-model="form.answer02" switch required><b>{{ form.answer02?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty2">
            The LCR and NSFR computations and associated reports should be available on the day to which the computation relates or on the next day at the latest.
            </b-form-text> 
            </b-form-group>
            
            <b-form-group id="input-group-liqdty3" 
                          label="[ 03 ] An internal stress test has been conducted at least once in the past 12 months independently of the liquidity coverage ratio (LCR) and net stable funding ratio (NSFR):" 
                          label-for="input-liqdty3"  aria-describedby="help-block-liqdty3">
            <b-form-checkbox id="input-liqdty3" v-model="form.answer03" switch required><b>{{ form.answer03?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty3">
            The internal stress test should view the LCR and NSFR as minimum requirements and consider liquidity stress scenarios aligned to actual business activities with time horizons beyond the regulatory minimum.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-liqdty4" 
            label="[ 04 ] A schedule of contractual maturity mismatch is prepared daily to identify projected gaps in cash in- and outflows after considering behavioral assumptions and stress conditions:"
            label-for="input-liqdty4" aria-describedby="help-block-liqdty4">
            <b-form-checkbox id="input-liqdty4" v-model="form.answer04" switch required><b>{{ form.answer04?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty4">
            Maturity gap analysis is an essential input to liquidity management.
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-liqdty5" 
                        label="[ 05 ] Each class of asset included in the stock of high-quality liquid assets (HQLA) has been subject to a monetization test at least once in the past 12 months:" 
                        label-for="input-liqdty5" aria-describedby="help-block-liqdty5">
            <b-form-checkbox id="input-liqdty5" v-model="form.answer05" switch required><b>{{ form.answer05?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty5">
            The monetization test involves the sale or repo of a representative portion of each class of asset to confirm market access, the monetization processes, the availability of assets and minimization of the risk of negative signaling during a period of actual stress.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-liqdty6" 
                        label="[ 06 ] The stock of high-quality liquid assets (HQLA) is under the exclusive control of your unit:" 
                        label-for="input-liqdty6"  aria-describedby_="help-block-liqdty6">
            <b-form-checkbox id="input-liqdty6" v-model="form.answer06" switch required><b>{{ form.answer06?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty6">
            As the unit that is responsible for ensuring compliance with the LCR you must have exclusive control of the stock of HQLA, i.e. your unit has continuous authority and legal operational capability to monetize the assets in the stock.
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-liqdty7" 
            label="[ 07 ] The liquidity coverage ratio (LCR) is computed and monitored daily in one single currency and in significant other currencies:"
            label-for="input-liqdty7" aria-describedby="help-block-liqdty7">
            <b-form-checkbox id="input-liqdty7" v-model="form.answer07" switch required><b>{{ form.answer07?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty7">
            </b-form-text>
            </b-form-group>

            <b-form-group id="input-group-liqdty8" 
            label="[ 08 ] A market analytics, or similar unit conducts ongoing expert analysis of market information and conditions to provide early warning of developments that may significantly impact liquidity management:" 
            label-for="input-liqdty8" aria-describedby="help-block-liqdty8">
            <b-form-checkbox id="input-liqdty8" v-model="form.answer08" switch required><b>{{ form.answer08?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty8">
            </b-form-text> 
            </b-form-group>

            <b-form-group id="input-group-liqdty9" 
            label="[ 09 ] The concentration of each source of wholesale funding by counterparty, instrument/ product and currency is calculated daily:" 
            label-for="input-liqdty9"  aria-describedby="help-block-liqdty9">
            <b-form-checkbox id="input-liqdty9" v-model="form.answer09" switch required><b>{{ form.answer09?'Yes':'No' }}</b>
            </b-form-checkbox>
            <b-form-text id="help-block-liqdty9">
            Wholesale funding concentration analysis is an essential input to liquidity management. A significant counterparty or instrument/product (or groups of similar types of instruments/ products) concentration exists where the amount of each source of funding exceeds 1% of the total balance sheet. A significant currency concentration is where the aggregate liabilities denominated in that currency amount to 5% or more of total liabilities.
            </b-form-text> 
            </b-form-group>

        </b-card-text>
        <template #footer>
        <h2>Score: {{computeScore()}}</h2>
        </template> 
        </b-card> 
        `
});
