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
