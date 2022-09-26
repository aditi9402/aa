import "./expense.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
    //let title = props.title
    // const [title, setTitle] = useState(props.title);
    // const listener = () => {
    //     setTitle(props.title);

    //     // console.log(title);
    // };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={listener}>change title</button> */}
        </Card>
    );
}

export default ExpenseItem;
