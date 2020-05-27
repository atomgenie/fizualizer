import { IS_ELECTRON } from "config"

interface AsticodeWindow extends Window {
    astilectron: any
}

export class ElectronHelper {
    public isElectron(elm: Window): elm is AsticodeWindow {
        return IS_ELECTRON
    }
}
