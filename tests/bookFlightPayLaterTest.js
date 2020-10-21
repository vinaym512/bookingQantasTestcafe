import { Selector } from 'testcafe';

fixture `test qantas hotel booking`
    // .page `http://devexpress.github.io/testcafe/example`;
// .page `http://google.com`
    const val = Selector('#developer-name');

test('My first test', async t => {
    await t
    .navigateTo('http://phptravels.com/demo/')
    //Select flight tab
        .click('div:nth-of-type(2) > .resource-box .btn.btn-block.btn-lg.btn-primary')
        .click('.flights.text-center')
        //Select date
                .click('[class="class12 col-6 col-12"] .form-icon-left')
                .click('div:nth-of-type(9) .datepicker--cells.datepicker--cells-days > div:nth-of-type(35)')
        //Select from
        .click('.no-gutters.row > div:nth-of-type(1) > .form-group > .form-icon-left.typeahead__container')
        .typeText('div#select2-drop  .select2-input', 'SYD')
        .click('.select2-highlighted.select2-result.select2-result-selectable.select2-results-dept-0')
        //Select to
        .click('.no-gutters.row > div:nth-of-type(2) > .form-group > .form-icon-left.typeahead__container')
        .typeText('div#select2-drop  .select2-input', 'DEL')
        //// .click('.select2-highlighted.select2-result.select2-result-selectable.select2-results-dept-0')
        .click('li:nth-of-type(1) > .select2-result-label')
        //Select number of guests
        for (let i =0; i<2;i++){
        await t.click('[class="col-lg-4 col-sm-12 col-xs-12 col-4"]:nth-of-type(1) .input-group-btn-vertical [type="button"]:nth-of-type(1)')
            .click('[class="col-lg-4 col-sm-12 col-xs-12 col-4"]:nth-of-type(2) .input-group-btn-vertical [type="button"]:nth-of-type(1)')    
        }
        // click search button
        await t.click('[class="col-lg-1 col-sm-12 col-xs-12"] .btn')
        // click first book now
        .click('#LIST .oneway_0:nth-of-type(1) .theme-search-results-item-price-btn')
        // enter first name, last name, email, confirm email
        // .typeText('[class="col-12 col-sm-6 o2"] span', 'abc')
        .typeText('[class="col-12 col-sm-6 o2"] .pure-material-textfield-outlined', 'abc')
        .typeText('[class="row gap-20 mb-0"] [class="col-md-6 col-12 o1"] .pure-material-textfield-outlined', 'xyz')

        .typeText('[class="col-md-6 col-12 o2"] .pure-material-textfield-outlined','abc@d.com')
        .typeText('#guestform .form-group:nth-of-type(2) [class="col-md-6 col-12 o1"] .pure-material-textfield-outlined','abc@d.com')
        .typeText('#guestform .form-group:nth-of-type(3) span', '0412345678')
        // select country
        .click('.chosen-single span')
        .click('[data-option-array-index="6"]')
        // enter pasenger details
        .typeText('input#passenger_name_0','abc')
        .typeText('input#passenger_age_0','55')
        .typeText('input#passenger_passport_0','ABC123456')
// confirm booking
.click('button[name="guest"]')
.expect(Selector('.success-box.unpaid').exists).ok()
.expect(Selector('.success-box.unpaid').withText('Your booking status is Unpaid').exists).ok()
// pay on arrival
.setNativeDialogHandler(() => true)
.click('.arrivalpay.btn.btn-default')
.expect(Selector('.reserved.success-box').exists).ok()
.expect(Selector('.reserved.success-box').innerText).contains('Your booking status is Reserved')

        await t.wait(5000)

});