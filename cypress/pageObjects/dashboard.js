import * as BusinessHelper from '../helpers/businessHelper'


class dashboardPOM {

    btnAddServer() {
        return BusinessHelper.click("#cw-app_container > div > div > cw-page-switch > div > button:nth-child(2)", { timeout: 6000 })
    }

    drpApplication() {
        return BusinessHelper.click("#select_11")
    }

    selectDropdown() {
        return BusinessHelper.click("#select_option_24 > div.md-text > span")
    }

    enterManageName(textManage) {
        return BusinessHelper.typeText("#input_26", textManage)
    }

    clickManageApp() { 
        return BusinessHelper.click("#input_26")
    }

    clickManageServer() { 
        return BusinessHelper.click("#input_27")
    }

    enterManageServerName(textManage) {
        return BusinessHelper.typeText("#input_27", textManage)
    }

    btnLaunchNow() {
        return BusinessHelper.click("#create-server")
    }
}

export default new dashboardPOM()