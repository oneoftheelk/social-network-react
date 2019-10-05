const CHANGE_LINK = "CHANGE_LINK";

let initialState = {
    friends: [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Jane"},
        {id: 3, name: "Mary"},
        {id: 4, name: "Ian"},
        {id: 5, name: "Alice"}
    ],
    links: [
        {id: 1, linkTo: "/profile"},
        {id: 2, linkTo: "/dialogs"},
        {id: 3, linkTo: "/users"},
        {id: 4, linkTo: "/news"},
        {id: 5, linkTo: "/music"},
        {id: 6, linkTo: "/settings"},
        {id: 7, linkTo: "/friends"}
    ],
    activeLink: 1
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LINK: {
            return {...state, activeLink: action.newActiveLink};
        }
        default: return state;
    }
}

export const changeLink = (newActiveLink) => ({type: CHANGE_LINK, newActiveLink});

export default navbarReducer;