import { IS_ELECTRON } from "config"

interface AsticodeWindow extends Window {
    asticode: any
    astilectron: any
}

export class ElectronHelper {
    public isElectron(elm: Window): elm is AsticodeWindow {
        return IS_ELECTRON
    }

    public init() {
        if (this.isElectron(window)) {
            window.asticode.loader.init()
            window.asticode.modaler.init()
            window.asticode.notifier.init()
            console.log("Great init !")
        }
    }
}
