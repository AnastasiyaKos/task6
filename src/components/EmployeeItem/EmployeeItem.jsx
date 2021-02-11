import React, {useState} from 'react';
import {connect} from "react-redux";

import deleteIcon from '../EmployeeItem/img/delete.svg';
import s from './EmployeeItem.module.css';
import {removeEmployeeAction} from "../../actions";


const EmployeeItem = ({employee, dispatch}) => {

    const removeEmployee = () => {
        dispatch(removeEmployeeAction(employee.id));
    }


    return (
        <div className={s.employeeItems}>
            <span className={s.employeeName}>{employee.first_name} {employee.last_name}</span>
            <button className={s.deleteEmployee} onClick={removeEmployee}>
                <img src={deleteIcon} width='20' height='20'/>
            </button>
        </div>
    )
}

export default connect()(EmployeeItem);