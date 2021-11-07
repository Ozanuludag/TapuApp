export default function (state, action) {
    switch (action.type) {
        case "Login":
            return { 
                ...state, 
                email:action.payload.email,
                password:action.payload.password,
                country:action.payload.country,
                isLoggedIn: true
            };
        case "Logout":
            return {...state,
            email:"",
            password:"",
            isLoggedIn:false,
            country:""
            };
        case "addToChart":
            return {
                ...state,
                price: state.price+50
            };   
        default:
            return state;
    }
}