import { connect } from 'react-redux';
import store from './store';
 
const TodoList = (props) => {
    const {inputChange,value,hanldeClick,subClick,list} = props;
    return ( 
        <div>
            <input onChange={inputChange} value={value}/>
            <button onClick={hanldeClick}>添加</button>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index} onClick={()=>{subClick(index)}}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

const stateToProps = (state)=>{
    return {
        value:state.value,
        list:state.list
    }
}

const dispathToProps = (dispatch)=>{
    return {
        inputChange (e) {
            const action = {
                type: 'input_change',
                value: e.target.value
            }
            store.dispatch(action)
        },
        hanldeClick () {
            const action = {
                type: 'add_input',
            }
            store.dispatch(action)
        },
        subClick (index) {
            const action = {
                type: 'sub_input',
                index
            }
            store.dispatch(action)
        }
    }
}

export default connect(stateToProps,dispathToProps)(TodoList);