import TransactionHistoryTread from 'components/TransactionHistoryTread/TransactionHistoryTread';

export default function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
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
    </table>
  );
}
