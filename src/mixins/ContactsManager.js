export const ContactManager = {
    data: () => ({
        contacts: []
    }),
    methods: {
        getContacts() {
            let contacts = localStorage.getItem('contacts')
            
            if(!contacts) {
                localStorage.setItem('contacts', JSON.stringify([]))
                this.contacts = []
            } else {
                this.contacts = JSON.parse(contacts) 
            }

            console.info("Contacts", contacts)
        }
    }
}
    