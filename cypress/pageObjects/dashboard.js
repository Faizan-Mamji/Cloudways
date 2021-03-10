import * as BusinessHelpers from '../helpers/businessHelper'
import * as Assertions from '../helpers/assertions'


class dashboardPOM {
    navigationUserManagement() {
        BusinessHelpers.clickElement('#menu_admin_UserManagement')
    }

    navigationUsers() {
        BusinessHelpers.clickElement('#menu_admin_viewSystemUsers')
    }

    assertUsersText() { 
        Assertions.assertText('#search_form > fieldset > ol > li:nth-child(1) > label',BusinessHelpers.dataSets.usersText)
    }
}

export default new dashboardPOM()