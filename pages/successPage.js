import { Selector } from 'testcafe';

export default class SuccessPageElements {
    constructor() {
        //Booking success
        this.successMsgBox = Selector('.success-box.unpaid')
        this.successMsg = Selector('.success-box.unpaid')
        // pay on arrival
        this.payOnArrivalBtn = Selector('.arrivalpay.btn.btn-default')
        this.reservedBox = Selector('.reserved.success-box')
        // pay now
        this.payNowBtn = Selector('[type="button"]')
    }
}