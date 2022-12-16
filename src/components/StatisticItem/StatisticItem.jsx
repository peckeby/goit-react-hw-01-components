import PropTypes from 'prop-types';

export default function StatisticsItem({ label, percentage }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 70,
        backgroundColor: `#${randomColor}`,
      }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
