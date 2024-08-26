let initialState = {
  contactList: [],
  filteredContactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      const updatedContactList = [
        ...state.contactList,
        { name: payload.name, phoneNumber: payload.phoneNumber },
      ];
      return {
        ...state,
        contactList: updatedContactList,
        filteredContactList: updatedContactList,
      };
    case "FILTER_CONTACTS":
      const filteredList = state.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        filteredContactList: filteredList,
      };
    default:
      return state;
  }
}

export default reducer;
