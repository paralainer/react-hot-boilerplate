export const ActionTypes = {
    ADD_TO_LIST: 'ADD_TO_LIST',
    REMOVE_ODD: 'REMOVE_ODD'
};


export function addToList(value){
    return {
        type: ActionTypes.ADD_TO_LIST,
        value
    }
}

export function removeOdd(){
    return {
        type: ActionTypes.REMOVE_ODD
    }
}