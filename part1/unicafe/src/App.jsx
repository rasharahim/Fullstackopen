import React, { useState } from 'react';

// Button Component
const Button = ({ handleClick, text }) => (
  <button
    onClick={handleClick}
    style={{
      padding: '10px 20px',
      margin: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
    }}
  >
    {text}
  </button>
);

// StatisticLine Component
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Statistics Component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table style={{ margin: '0 auto', borderCollapse: 'collapse', width: '50%' }}>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
      </tbody>
    </table>
  );
};

// Main App Component
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Give Feedback</h1>

      <div>
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      </div>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;