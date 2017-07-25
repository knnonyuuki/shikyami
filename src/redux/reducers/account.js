let accounts={
    isAuthenticted:false,
    currentUser:""
}
export default function accountReducer(state=accounts,action){
    switch (action.type){
        case 'AUTH_USER':
           console.log('action.user',action.user)
            return {isAuthenticted:true,currentUser:action.user}
        case 'LOG_OUT':
            return { isAuthenticted: false, currentUser: '' }
        default:
            return state;
    }
}