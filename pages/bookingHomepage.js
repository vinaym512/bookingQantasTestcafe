import { Selector } from 'testcafe';

export default class HomePageElements {
    constructor () {
        //Select booking btn 
        this.goToBookingPageBtn = Selector('div:nth-of-type(2) > .resource-box .btn.btn-block.btn-lg.btn-primary')
        //Select flight tab
        this.flightTab = Selector('.flights.text-center')
    }
}