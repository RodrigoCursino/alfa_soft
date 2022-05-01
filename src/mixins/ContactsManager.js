import {v4 as uuidv4} from 'uuid'
import Contact        from "@/components/contacts-form/Contact.js"

export const ContactsManager = {
    created() {
        this.getContacts()
    },
    data: () => ({
        contacts: []
    }),
    methods: {
        
        getContacts() {
            let contacts = localStorage.getItem('contacts')
            
            if(!contacts) {
                this.contacts = []
                localStorage.setItem('contacts', JSON.stringify(this.contacts))
            } else {
                this.contacts = JSON.parse(contacts) 
            }
        },
        
        getContactById(id) {
            
            let contact = this.contacts.filter( x => x.id === id)
            
            if(contact) {
                contact = contact[0]
                return new Contact(contact.id, contact.name, contact.contact, contact.email, contact.picture)
            } 
        },
        
        saveContact(contact) {
            
            if(contact.id) {
                this.removeContact(contact)
            } else {
                contact.id = uuidv4()
                let valid = this.contacts.filter( x => x.contact === contact.contact || x.email === contact.email)
                if(valid.length>0) {
                    this.$swal("Atenção !!!", "Contato já cadastrado", "warning")
                    return false
                }
            }
            
            this.contacts.push(contact)
            this.updateList()
            this.$router.push({name: 'contacts-list'})
        },

        removeContact(contact) {
            
            let _index = this.contacts.findIndex((index) => {
                return index.id == contact.id
            })

            if(_index>-1) {
                this.contacts.splice(_index, 1)
            } else {
                this.$swal("Atenção !!!", "Contato não encontrado", "warning")
            }
            
            this.updateList()
        },

        updateList() {
            localStorage.setItem('contacts', JSON.stringify(this.contacts))
            this.getContacts()
        }
    }
}
    