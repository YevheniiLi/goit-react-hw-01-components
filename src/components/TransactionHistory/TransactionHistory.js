import PropTypes  from "prop-types";
// import { Box } from "components/Box";
import { Tablet } from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
return (

  <Tablet as='table'>
    <tbody>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    

       
        {items.map(item => {
          const {id, type, amount, currency} = item;
          return (
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
          )
        })}
      </tbody>
</Tablet>
)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf (
    PropTypes.exact ({ 
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ).isRequired
};