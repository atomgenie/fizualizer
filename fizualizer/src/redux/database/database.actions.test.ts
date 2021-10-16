import * as database_actions from "./database.actions"
// @ponicode
describe("database_actions.setDatabaseUrl", () => {
    test("0", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("http://base.com", "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("https://accounts.google.com/o/oauth2/revoke?token=%s", "Checking Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("Www.GooGle.com", "Investment Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("https://api.telegram.org/", "Credit Card Account")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            database_actions.setDatabaseUrl("", "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("database_actions.setLoaded", () => {
    test("0", () => {
        let callFunction: any = () => {
            database_actions.setLoaded()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("database_actions.reset", () => {
    test("0", () => {
        let callFunction: any = () => {
            database_actions.reset()
        }
    
        expect(callFunction).not.toThrow()
    })
})
