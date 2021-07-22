// This creates the leaderboard with the information gathered from the start
import React, { useEffect, useState, useCallback } from "react";

// Leaderboard information
const TOKEN = "60a8e2c18f40bb64ec94690b";
const URL = `https://www.dreamlo.com/lb/${TOKEN}/json`;

// Creates Leaderboard
const Leaderboard = () => {
  // Sets inital value of state to be an empty object
  const [result, setResult] = useState({});

  // Callback function used to handle data from leaderboard API
  const updateResults = useCallback(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setResult(data.dreamlo.leaderboard.entry);
  }, []);

  // Only run when update results happens
  useEffect(() => {
    updateResults();
  }, [updateResults]);

  // displays the leader board on the page
  return (
    <div className="leaderboard">
      {result.length > 0 ? (
      <table key="leaderboard-table" data-testid="leaderboard-table">
        <tbody key="results">
          {result.map((user, index) => {
            return (
              <tr key={`${index}_${user.name}`}>
                <td id="table-avatar">
                  <img
                    className="results-avatar"
                    src={`https://avatars.dicebear.com/api/${user.text}/${user.name}.svg`}
                    alt="avatar"
                  />
                </td>
                <td id="table-name">{user.name}</td>
                <td id="table-score">{user.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>):<p>Loading...</p>}
    </div>
  );
};

export default Leaderboard;
