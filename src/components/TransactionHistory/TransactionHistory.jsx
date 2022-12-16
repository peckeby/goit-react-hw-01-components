import PropTypes from 'prop-types';

import TransactionHistoryTread from 'components/TransactionHistoryTread/TransactionHistoryTread';
import {
  TransactionTableTh,
  TransactionTable,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTableTh>Type</TransactionTableTh>
          <TransactionTableTh>Amount</TransactionTableTh>
          <TransactionTableTh>Currency</TransactionTableTh>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TransactionHistoryTread
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionHistoryTread>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
