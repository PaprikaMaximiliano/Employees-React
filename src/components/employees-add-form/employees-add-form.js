import { Component } from 'react';

// import './employees-add-form.css';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: ''
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        if (name.length < 3 && !salary) return;
        this.props.onAdd(name, salary);
        this.setState({ name: '', salary: '' });
    };

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="What is his name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light" onClick={this.onSubmit}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
