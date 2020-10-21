import { Selector } from 'testcafe';

export default class FillDataPageElements {
    constructor() {
        // click first book now
        this.clickFirstBookNowBtn = Selector('#LIST .oneway_0:nth-of-type(1) .theme-search-results-item-price-btn')
        // enter first name, last name, email, confirm email
        this.enterFName = Selector('[class="col-12 col-sm-6 o2"] .pure-material-textfield-outlined')
        this.enterLName = Selector('[class="row gap-20 mb-0"] [class="col-md-6 col-12 o1"] .pure-material-textfield-outlined')
        this.enterEmailId = Selector('[class="col-md-6 col-12 o2"] .pure-material-textfield-outlined')
        this.confirmEmailId = Selector('#guestform .form-group:nth-of-type(2) [class="col-md-6 col-12 o1"] .pure-material-textfield-outlined')
        this.enterPhoneNo = Selector('#guestform .form-group:nth-of-type(3) span')
        // select country
        this.clickCountryDD = Selector('.chosen-single span')
        this.selectCountry = Selector('[data-option-array-index="6"]')
        // enter pasenger details
        this.enterPassengerName = Selector('input#passenger_name_0')
        this.enterPassengerAge = Selector('input#passenger_age_0')
        this.enterPassengerPassport = Selector('input#passenger_passport_0',)
        // confirm booking
        this.clickBookinBtn = Selector('button[name="guest"]')
    }
}