import HomePageElements from '../pages/bookingHomepage';
import SelectionPageElements from '../pages/selectionPage';
import FillDataPageElements from '../pages/fillDataPage';
import SuccessPageElements from '../pages/successPage';

const homePage = new HomePageElements();
const selectPage = new SelectionPageElements();
const fillDataPage = new FillDataPageElements();
const successPage = new SuccessPageElements();

fixture`test flight booking`

test('book flight pay later', async t => {
    await t
        .navigateTo('http://phptravels.com/demo/')
        //Select flight tab
        .click(homePage.goToBookingPageBtn)
        .click(homePage.flightTab)
        //Select date
        .click(selectPage.clickDate)
        .click(selectPage.selectDate)
        //Select from
        .click(selectPage.clickFromLoc)
        .typeText(selectPage.enterFromLocValue, 'SYD')
        .click(selectPage.selectFromLoc)
        //Select to
        .click(selectPage.clickToLoc)
        .typeText(selectPage.enterToLocValue, 'DEL')
        .click(selectPage.selectToLoc)
    //Select number of guests
    for (let i = 0; i < 2; i++) {
        await   t.click(selectPage.clickGuestAdult)
                .click(selectPage.clickGuestChild)
    }
    // click search button
    await t.click(selectPage.clickSearchBtn)
        // click first book now
        .click(fillDataPage.clickFirstBookNowBtn)
        // enter first name, last name, email, confirm email
        .typeText(fillDataPage.enterFName, 'abc')
        .typeText(fillDataPage.enterLName, 'xyz')

        .typeText(fillDataPage.enterEmailId, 'abc@d.com')
        .typeText(fillDataPage.confirmEmailId, 'abc@d.com')
        .typeText(fillDataPage.enterPhoneNo, '0412345678')
        // select country
        .click(fillDataPage.clickCountryDD)
        .click(fillDataPage.selectCountry)
        // enter pasenger details
        .typeText(fillDataPage.enterPassengerName, 'abc')
        .typeText(fillDataPage.enterPassengerAge, '55')
        .typeText(fillDataPage.enterPassengerPassport, 'ABC123456')
        // confirm booking
        .click(fillDataPage.clickBookinBtn)
        .expect(successPage.successMsgBox.exists).ok()
        .expect(successPage.successMsg.withText('Your booking status is Unpaid').exists).ok()
        // pay on arrival
        .setNativeDialogHandler(() => true)
        .click(successPage.payOnArrivalBtn)
        .expect(successPage.successMsgBox.exists).ok()
        .expect(successPage.successMsg.innerText).contains('Your booking status is Reserved')

        // just so can see the final page while local execution
    await t.wait(5000)

});