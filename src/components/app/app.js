import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: false, rise: true, id: this.getId() },
                { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: this.getId() },
                { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: this.getId() }
            ],
            term: '',
            filter: 'all'
        };
    }
    counter() {
        let i = 1;
        return () => {
            return i++;
        };
    }

    getId = this.counter();

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((el) => el.id !== id)
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.getId()
        };
        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        }));
    };

    // onToggleRise = (id) => {
    //     this.setState(({ data }) => {
    //         const index = data.findIndex((el) => el.id === id);

    //         const old = data[index];
    //         const newItem = { ...old, rise: !old.rise };
    //         const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //         return {
    //             data: newArray
    //         };
    //     });
    // };

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            const regex = new RegExp(`${term}`, 'gi');
            return regex.test(item.name);
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter((item) => item.rise);
            case 'moreThen1000':
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const increased = data.filter((el) => el.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
