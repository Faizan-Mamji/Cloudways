import * as Assertions from '../../helpers/assertions'
import * as BusinessHelper from '../../helpers/businessHelper'
import loginPOM from '../../pageObjects/login';
import dashboardPOM from '../../pageObjects/dashboard';


before(() => {
    cy.login();
})


describe('E2E flow for CloudWays', () => {
    it('Creating new server', function () {
        // cy.server()
        // cy.route("GET", '**/api/v1/app/fetchVersionSpecs').as('testapi')
        // cy.wait('@testapi').its('status').should('eq', 200)
        cy.log("testingggggg")
        loginPOM.dashboardAssert()
        dashboardPOM.navigationUserManagement()
        dashboardPOM.navigationUsers()
        dashboardPOM.assertUsersText()

        // loginPOM.visitPage(BusinessHelper.dataSets.serverUrl)
        // dashboardPOM.drpApplication().click()
        // dashboardPOM.selectDropdown().click()
        // dashboardPOM.enterManageName().next().type(BusinessHelper.dataSets.manageName)
        // dashboardPOM.clickManageServer().click()
        // dashboardPOM.enterManageServerName(BusinessHelper.dataSets.manageServerName)
        // dashboardPOM.btnLaunchNow().click()
    })
})