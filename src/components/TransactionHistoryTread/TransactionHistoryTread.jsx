import PropTypes from 'prop-types';

import {
  TransactionTread,
  TransactionTd,
} from './TransactionHistoryTread.styled';

export default function TransactionHistoryTread({ type, amount, currency }) {
  return (
    <TransactionTread>
      <TransactionTd>{type}</TransactionTd>
      <TransactionTd>{amount}</TransactionTd>
      <TransactionTd>{currency}</TransactionTd>
    </TransactionTread>
  );
}

TransactionHistoryTread.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
