import PropTypes  from "prop-types";
import { Box } from "components/Box";
export const TransactionHistory = ({items}) => {
return (

  <Box as='table'>
    <thead> 
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

      <Box as='tbody'> 
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
      </Box>
</Box>
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