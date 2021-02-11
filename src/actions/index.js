import { v4 as uuidv4 } from 'uuid';

import {ADD_EMPLOYEE, ON_DATA_SUCCESS, ON_DATA_ERROR, REMOVE_EMPLOYEE} from "../reducers";
import {getAllEmployees} from "../api/EmployeesStoreService";


export const onDataSuccessAction = data => ({
    type: ON_DATA_SUCCESS,
    data: data
});

export const onDataErrorAction = error => ({
    type: ON_DATA_ERROR,
    error: error
});

export const getEmployeeAction = () => {
    return (dispatch) => {
        getAllEmployees()
            .then(({data}) => {
                const apiData = data.data;
                dispatch(onDataSuccessAction(apiData))
            })
            .catch(error => {
                dispatch(onDataErrorAction(error))
            })
    }
};

export const addEmployeeAction = employee => ({
    type: ADD_EMPLOYEE,
    id: uuidv4(),
    ...employee
});


export const removeEmployeeAction = id => ({
    type: REMOVE_EMPLOYEE,
    id: id
});

