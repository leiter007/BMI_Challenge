const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can calculate BMI', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    });

    it('by inputing his weight and height with METRIC method', async () => {

        await browser.fillIn("input[id='weight-in-kgs']", { with: "95" })
        await browser.fillIn("input[id='height-in-cm']", { with: "185" })

        await browser.clickOnButton("button[id='metric']")
        let content = await browser.getContent("span[id='display_value']")
        expect(content).to.eql('Your BMI is 27.76');
    });

    it('by inputing his weight and height with IMPERIAL method', async () => {

        await browser.fillIn("input[id='weight-in-pounds']", { with: "200" })
        await browser.fillIn("input[id='height-in-inches']", { with: "70" })

        await browser.clickOnButton("button[id='imperial']")
        let content = await browser.getContent("span[id='display_IMP_value']")
        expect(content).to.eql('Your BMI is 28.69');
    });
});