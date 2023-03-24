let initialState = {
  contactList: [],
  result:[]
};

function reducer(state = initialState, action) {
  const {type,payload}=action
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phoneNum: payload.phoneNum },
        ],
      };
    case "SEARCH":
      return{
        ...state,
        result:state.contactList.filter((item)=>item.name.includes(payload.search))

      };
    case "remove":
      return{
        ...state,
        result:state.result.filter((item)=>item !==item)
      }    
      default:
        return{...state};
  }
}

export default reducer;
