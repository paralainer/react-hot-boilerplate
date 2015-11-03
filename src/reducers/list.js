import { ActionTypes }  from '../actions/actions.js'

export function listReducer(state = [], action = {}){
    switch (action.type) {
        case ActionTypes.ADD_TO_LIST:
            return state.concat([action.value]);
        case ActionTypes.REMOVE_ODD:
        {
            var list = [];
            state.forEach(function (el) {
                el % 2 == 0 && list.push(el);
            });
            return list;
        }
    }
    return state;
}