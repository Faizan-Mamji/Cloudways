import * as assertHelper from '../helpers/assertions'

class loginPOM {

    visitPage(weburl) {
        return cy.visit(weburl);
    }

    txtUserName() {
        return cy.get("#userEmail");
    }

    txtPassword() {
        return cy.get("#input_0");
    }

    btnClickLogin() {
        return cy.get("#cw-app_container > section > div > div.login-wrap.login-right.flex-xs-100.flex-order-gt-xs-2.flex-50 > div:nth-child(3) > form > div.glb-loaderBtn-wrap > button");
    }

    dashboardAssert() {
        return assertHelper.assertText("#page-ctrl > div:nth-child(1) > header", "Servers")
    }
}

export default new loginPOM()