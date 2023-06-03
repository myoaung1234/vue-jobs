export default class Storage {
    key
    storageType
    
    constructor (key) {
        this.key = key
    }

    get() {
        try {
            const value = localStorage.getItem(this.key) ?? ''
            return JSON.parse(value)
        } catch {
            return null
        }
    }
    
    set (value) {
        const strValue = JSON.stringify(value)
        localStorage.setItem(this.key, strValue)

    }

    remove () {
        localStorage.removeItem(this.key)
    }
}

