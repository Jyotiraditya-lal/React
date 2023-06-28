function ExpenseDetails(props){
    const title=props.title;
    const amount=props.amount;
    const location=props.location;

    function DeleteHandler(){
        console.log("Delete!!")
    }

    return(
        <div>
            <div>{title}</div>
            <div>{location}</div>
            <div>{amount}</div>
            <button onClick={DeleteHandler}>Delete Expense</button>
        </div>
        
    )
}

export default ExpenseDetails;
