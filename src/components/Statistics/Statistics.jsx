import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticItem/StatisticItem';
import {
  StatisticsList,
  StatisticsTitle,
  StatisticsSection,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
          ></StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

export default Statistics;
// StatisticsItem.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf
// };
