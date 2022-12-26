import './app-info.css';

const AppInfo = (props) => {
    const { employees, increased } = props;
    return (
        <div className="app-info">
            <h1>Accounting for employees in the company N </h1>
            <h2>Total amount of employees: {employees}</h2>
            <h2>The prize will receive: {increased}</h2>
        </div>
    );
};

export default AppInfo;
