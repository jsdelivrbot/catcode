import { createStore } from 'redux'

const treeState = {
  chat: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_CHAT":
            return Object.assign({}, state, { chat: action.chat } )
        default:
          break
    }
}

export default createStore(
    reducer,
    treeState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
