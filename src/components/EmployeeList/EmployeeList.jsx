import React, {useEffect} from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import {connect} from "react-redux";

import s from './EmployeeList.module.css';
import {getEmployeeAction} from "../../actions";
import AddEmployee from "../AddEmployee/AddEmployee";


const EmployeeList = ({employees, dispatch}) => {

    useEffect(() => {
        !employees.length && dispatch(getEmployeeAction());
        }, []
    );

    return <div >
        <AddEmployee/>

        <h2>Список сотрудников</h2>
        <div className={s.itemWrap}>
            {employees.map((item) => <EmployeeItem key={item.id} employee={item}/>)}
        </div>
    </div>
};

const mapStateToProps = state => ({
    employees: state.employees
})

export default connect(mapStateToProps)(EmployeeList);