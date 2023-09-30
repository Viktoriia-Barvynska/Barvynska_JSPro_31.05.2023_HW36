const initislState = {
    show: false,
    contactIdToDelete: null,   
}

const SHOW_MODAL ='SHOW_MODAL'
const HIDE_MODAL ='HIDE_MODAL'


const modal = (state = initislState, action) => {
    switch(action.type){
        case SHOW_MODAL:
        return {
          ...state,
          show: true,
          contactIdToDelete: action.payload,
          
        };
      case HIDE_MODAL:
        return {
          ...state,
          show: false,
          contactIdToDelete: null,
          
        };
        default:
            return state;
    }      
}

export const showModal = (contactId) => ({
  type: SHOW_MODAL,
  payload: contactId,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});



export default modal;