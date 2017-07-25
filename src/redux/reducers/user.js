let users={
    username:"",
    email:"",
    avatar:""
}
export default function userReducer(state=users,action){
    switch (action.type){
        case 'ADD_COMMENT':
            return state
        default:
            return state;
    }
}