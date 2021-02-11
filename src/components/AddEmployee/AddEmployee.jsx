import React, {useState} from 'react';
import {connect} from "react-redux";


import s from './AddEmployee.module.css';
import {addEmployeeAction} from "../../actions";


const AddEmployee = ({dispatch}) => {

    const newEmployee = {
        first_name: '',
        last_name: ''
    };

    const [employeesName, setEmployeesName] = useState(newEmployee);

    const employeesFirstNameInputChange = event => setEmployeesName({
        ...employeesName,
        [event.target.name]: event.target.value
    });

    const employeesLastNameInputChange = event => setEmployeesName({
        ...employeesName,
        [event.target.name]: event.target.value
    });

    const addEmployee = () => {
        dispatch(addEmployeeAction(employeesName));
        setEmployeesName(newEmployee);

    };

    return (
        <div className={s.addEmployeeWrap}>
            <h2>Добавить нового сотрудника</h2>
            <div className={s.addEmployeeInput}>
                <input className={s.employeeNameInput} name='first_name' placeholder='Имя сотрудника'
                       onChange={employeesFirstNameInputChange} value={employeesName.first_name} />
                <input className={s.employeeNameInput} name='last_name' placeholder='Фамилия сотрудника'
                       onChange={employeesLastNameInputChange} value={employeesName.last_name} />
                <button className={s.addEmployee} onClick={addEmployee}>
                    Добавить в список
                </button>
            </div>


        </div>
    )
};



export default connect()(AddEmployee);