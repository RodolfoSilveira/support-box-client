export const Types = {
    TOGGLE_MENU: 'subject/TOGGLE_MENU'
}

export const Creators = {
    toggleMenu: state => {
        let newState = Object.assign({}, state)
        newState.showMenu = !newState.showMenu
        return newState;
    }
}

const subject = ( state = {}, { type }) => {
    switch(type) {
        case Types.TOGGLE_MENU:
            return Creators.toggleMenu(state)
        default:
            return state
    }
}

export default subject