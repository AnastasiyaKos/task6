import { v4 as uuidv4 } from 'uuid';
import {combineReducers} from "redux";


export const ON_DATA_SUCCESS = 'ON_DATA_SUCCESS';
export const ON_DATA_ERROR = 'ON_DATA_ERROR';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';



const employees = (state = [], action) => {
    switch (action.type) {
        case ON_DATA_SUCCESS:
            return action.data.map(item => {
                return {
                ...item,
                id: item.id,
            }});

        case ON_DATA_ERROR:
            return state;

        case ADD_EMPLOYEE:
            console.log(action)
            return [{
                id: uuidv4(),
                first_name: action.first_name,
                last_name: action.last_name
            },
                ...state

            ];

        case REMOVE_EMPLOYEE:
            return state.filter(employee => employee.id !== action.id);


        default:
            return state
    }

}

export default combineReducers({employees});



