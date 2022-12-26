import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All employees' },
        { name: 'rise', label: 'To raise' },
        { name: 'moreThen1000', label: 'Salary greater than 1000$' }
    ];
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const classList = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                type="button"
                className={`btn ${classList}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });
    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
