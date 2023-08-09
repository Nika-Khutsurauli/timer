import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">
      <h1>
        WE<i>' </i>RE LAUNCHING SOON
      </h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
