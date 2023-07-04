import "./ExpenseDate.css"

function ExpenseDate(props){
    const month=props.date.toLocalString("en-US",{month:"long"});  
    const day=props.date.toLocalString("en-US",{day:"long"});  
    const year=props.date.getFullYear();

    return(
        <div className="expenseDate">
            <div className="expenseDate__month">{month}</div>
            <div className="expenseDate__day">{day}</div>
            <div className="expenseDate__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;
