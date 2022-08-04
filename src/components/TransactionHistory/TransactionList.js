import { TransactionHistory } from "./TransactionHistory";

function TransactionList({items}) {
    return (
    <ul>
        {items.map(item => (
        <li key={item.id}>
            <TransactionHistory 
            items={item} 
            type={item.type}
            ammount={item.ammount}
            currency={item.currency}
        />
        </li>
           ))}
    </ul>
    );
}


export default TransactionList;