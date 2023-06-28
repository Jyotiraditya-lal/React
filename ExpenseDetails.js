import React,{useState} from "react/client"

function ExpenseDetails(props){


    const [amount,setAmount]=useState(props.amount)

    function clickHandler(){
        amount=amount+100;
        setAmount(amount);
    }

    return(
        <div>
            <div>{props.title}</div>
            <div>{props.location}</div>
            <div>{amount}</div>
            <button onClick={clickHandler}>Add Expense</button>
        </div>
        
    )
}

export default ExpenseDetails;
