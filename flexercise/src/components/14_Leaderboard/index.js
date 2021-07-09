import { useEffect, useState, useCallback } from "react";

const TOKEN = "60a8e2c18f40bb64ec94690b";
const URL = `https://www.dreamlo.com/lb/${TOKEN}/json`;

const Leaderboard = () => {
  const [result, setResult] = useState({});

  const updateResults = useCallback(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setResult(data.dreamlo.leaderboard.entry);
    console.log(result);
  }, [result]);

  useEffect(() => {
    updateResults();
  }, [updateResults]);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table>
        {result.length > 0 ? (
          result.map((user) => {
            return (
              <tr>
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
          })
        ) : (
          <p>Loading...</p>
        )}
      </table>
    </div>
  );
};

export default Leaderboard;
