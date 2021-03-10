import * as assertHelper from '../helpers/assertions'
import * as BusinessHelpers from '../helpers/businessHelper'

class loginPOM {

    visitPage(weburl) {
        return cy.visit(weburl);
    }

    txtUserName(uname) {
        return BusinessHelpers.typeText('#txtUsername', uname)
    }

    txtPassword(upassword) {
        return BusinessHelpers.typeText('#txtPassword', upassword)
    }

    btnClickLogin() {
        return BusinessHelpers.clickElement('#btnLogin')
    }

    dashboardAssert() {
        return assertHelper.assertText("#content > div > div.head > h1", BusinessHelpers.dataSets.dashboardText)
    }
}

export default new loginPOM()