class Contact {
    constructor (id, name, contact, email, picture) {
        this.id       = id      ? id      : ""
        this.name     = name    ? name    : ""
        this.contact  = contact ? contact : ""
        this.email    = email   ? email   : ""
        this.picture  = picture ? picture : ""
    }
}

export default Contact