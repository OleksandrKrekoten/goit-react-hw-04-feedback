import PropTypes from 'prop-types';
import { List } from './Statistics.styled';
export const Statistics = ({ positiveFeedback, total, good, neutral, bad }) => {
  return (
    <List>
      <li>
        <p>
          Good: <span>{good}</span>{' '}
        </p>
      </li>
      <li>
        <p>
          Neutral: <span>{neutral}</span>{' '}
        </p>
      </li>
      <li>
        <p>
          Bad: <span>{bad}</span>{' '}
        </p>
      </li>
      <li>
        <p>
          Total: <span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive Feedback: <span>{positiveFeedback}%</span>
        </p>
      </li>
    </List>
  );
};
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
