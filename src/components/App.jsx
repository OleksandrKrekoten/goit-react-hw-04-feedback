import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics ';

export default function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = val => {
    switch (val) {
      case 'good':
        setGoodFeedback(good => good + 1);
        break;

      case 'neutral':
        setNeutralFeedback(neutral => neutral + 1);
        break;

      case 'bad':
        setBadFeedback(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const arrBtn = ['good', 'neutral', 'bad'];

  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions arrBtn={arrBtn} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {total === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            total={total}
            positiveFeedback={positiveFeedback}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        </Section>
      )}
    </div>
  );
}
