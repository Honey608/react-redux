const defaultValue = {
    value: 'hello to',
    list: []
}

export default ((state = defaultValue ,actions) => {
    switch(actions.type) {
        case 'input_change':
            const newState = JSON.parse(JSON.stringify(state));
            newState.value = actions.value;
            return newState
        case 'add_input':
            const newStateAdd = JSON.parse(JSON.stringify(state));
            newStateAdd.list.push(newStateAdd.value);
            newStateAdd.value = '';
            return newStateAdd
        case 'sub_input':
            const newStateSub = JSON.parse(JSON.stringify(state));
            newStateSub.list.splice(actions.index,1);
            return newStateSub
        default:
            return state
    }
})