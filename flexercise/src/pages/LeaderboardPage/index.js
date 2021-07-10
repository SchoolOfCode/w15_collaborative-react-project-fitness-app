import Leaderboard from "../../components/14_Leaderboard";
import HeadingText from "../../components/6_HeadingText";

const LeaderboardPage = ({ onComplete }) => {
  return (
    <div className="page-div">
      <HeadingText heading="Leaderboard" />
      <Leaderboard />
      <button className="my-button" onClick={onComplete}>
        Finished
      </button>
    </div>
  );
};

export default LeaderboardPage;
