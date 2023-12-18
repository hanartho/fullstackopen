import { useState } from "react";

const StatisticsLine = ({ name, statistic }) => {
  console.log("StatsiticsLine", statistic);
  return (
    <div>
      <p>
        {name} {statistic}
      </p>
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, avg, positive }) => {
  //console.log("Statistics", good, neutral, bad, all, avg, positive);
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine name="good" statistic={good} />
      <StatisticsLine name="neutral" statistic={neutral} />
      <StatisticsLine name="bad" statistic={bad} />
      <StatisticsLine name="all" statistic={all} />
      <StatisticsLine name="average" statistic={avg} />
      <StatisticsLine name="positive" statistic={positive} />
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  //console.log("Button", handleClick, text);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);
  const [avg, setAvg] = useState(0);

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);

    const updateAll = updateGood + neutral + bad;
    setAll(updateAll);

    const updateAvg = avg + 1;
    setAvg(updateAvg);
  };

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);

    const updateAll = good + updateNeutral + bad;
    setAll(updateAll);

    const updateAvg = avg + 0;
    setAvg(updateAvg);
  };

  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);

    const updateAll = good + neutral + updateBad;
    setAll(updateAll);

    const updateAvg = avg - 1;
    setAvg(updateAvg);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={allClicks}
        avg={avg / allClicks}
        positive={(good / allClicks) * 100}
      />
    </div>
  );
};

export default App;
