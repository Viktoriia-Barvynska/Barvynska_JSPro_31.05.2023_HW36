const initislState = {
    contacts: []
}

const DISPLAY_CONTACTS = 'DISPLAY_CONTACTS';
const DELETE_CONTACT = 'DELETE_CONTACT';
const ADD_CONTACT = 'ADD_CONTACT';
const UPDATE_CONTACT = 'UPDATE_CONTACT';


const contact = (state = initislState, action) => {
    switch(action.type){
        case DISPLAY_CONTACTS:
            return {
                ...state, 
                contacts:  action.payload
            }
            // delete
            case DELETE_CONTACT:
                const updatedContacts = state.contacts.filter((contact) => contact.id !== action.payload);
            return {
                ...state,
                contacts: updatedContacts,
                     };
                // add

            case ADD_CONTACT:
               
                const newId = Math.floor(Math.random() * 10000);
                const newContact = { ...action.payload, id: newId };
                
                return {
                    ...state,
                    contacts: [...state.contacts, newContact]
                }
                // edit
                case UPDATE_CONTACT:
                const editedContacts = state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact
                );
                console.log(editedContacts)
                return {
                    ...state,
                    contacts: editedContacts,
                  };
        default: return state     
    }    
}




export const displayContacts = (data) => {
    return{
        type: DISPLAY_CONTACTS,
        payload: data
    }
};
export const deleteContact = (contactId) => {
    return {
      type: DELETE_CONTACT,
      payload: contactId,
    };
  };
  export const addContact = (newContact) => {
    return {
      type: ADD_CONTACT,
      payload: newContact,
    };
  };

  export const updateContact = (editedContact) => ({
    type: UPDATE_CONTACT,
    payload: editedContact,
  });

export default contact;