import { useEffect, useState } from "react";

const TOKEN = "60a8e2c18f40bb64ec94690b";
const URL = `https://www.dreamlo.com/lb/${TOKEN}/json`;

const Leaderboard = () => {
    const [result, setResult] = useState({});
    
    useEffect(() => {
        async function updateResults() {
            const response = await fetch(URL);
            const data = await response.json();
            setResult(data.dreamlo.leaderboard.entry);
            console.log(result);
        }
        updateResults();
    }, [result]);
    
    return (
        <div className="leaderboard">
      <h1>Leaderboard</h1>
      {result.length > 0 ?
          result.map((user) => {
        return (
            <tr>
            <td><img className="results-avatar" src={`https://avatars.dicebear.com/api/${user.text}/${user.name}.svg`} alt="avatar" /></td>
                <td>{user.name}</td>
                <td>{user.score}</td>
            </tr>
        )
      }) : <p>Loading...</p>
      }
    </div>
  );
};

export default Leaderboard;
