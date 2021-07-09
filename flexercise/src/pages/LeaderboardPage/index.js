import Leaderboard from "../../components/14_Leaderboard";

const LeaderboardPage = ({onComplete}) => {
  return (
    <div>
      <Leaderboard />
      <button className="my-button" onClick={onComplete}>Finished</button>
    </div>
  );
};

export default LeaderboardPage;
