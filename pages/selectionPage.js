import { Selector } from 'testcafe';

export default class SelectionPageElements {
    constructor() {
        //Select date
        this.clickDate = Selector('[class="class12 col-6 col-12"] .form-icon-left')
        this.selectDate = Selector('div:nth-of-type(9) .datepicker--cells.datepicker--cells-days > div:nth-of-type(35)')
        //Select from
        this.clickFromLoc = Selector('.no-gutters.row > div:nth-of-type(1) > .form-group > .form-icon-left.typeahead__container')
        this.enterFromLocValue = Selector('div#select2-drop  .select2-input')
        this.selectFromLoc = Selector('.select2-highlighted.select2-result.select2-result-selectable.select2-results-dept-0')
        //Select to
        this.clickToLoc = Selector('.no-gutters.row > div:nth-of-type(2) > .form-group > .form-icon-left.typeahead__container')
        this.enterToLocValue = Selector('div#select2-drop  .select2-input')
        this.selectToLoc = Selector('li:nth-of-type(1) > .select2-result-label')
        //Select number of guests
        this.clickGuestAdult = Selector('[class="col-lg-4 col-sm-12 col-xs-12 col-4"]:nth-of-type(1) .input-group-btn-vertical [type="button"]:nth-of-type(1)')
        this.clickGuestChild = Selector('[class="col-lg-4 col-sm-12 col-xs-12 col-4"]:nth-of-type(2) .input-group-btn-vertical [type="button"]:nth-of-type(1)')
        // click search button
        this.clickSearchBtn = Selector('[class="col-lg-1 col-sm-12 col-xs-12"] .btn')
    }
}