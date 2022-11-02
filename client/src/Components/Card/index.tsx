import "./index.css";
import { Bet } from "../../Utils/bet-data";
import { useNavigate } from "react-router-dom";
import { colors } from "../../Assets/CardColors";

function Card({
  bet: { date, user, betStr, id, comments, betTitle, childBets },
}: Bet | any) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => navigate(`/bet/${id}`)}
        className="card"
        style={{
          background: colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        {/* Info */}
        <h1>{betTitle}</h1>
        <p>{betStr}</p>
        <h5>User: {user}</h5>
        <p>{date}</p>
        <hr />
        {/* Bets */}
        <h3>Bets</h3>
        {childBets.slice(0, 3).map(({ user, bet, date }: any, idx: number) => {
          if (idx === 2) {
            return <div key={Math.random()}>... continued</div>;
          }
          return (
            <div key={Math.random()}>
              <p>{`${user}: ${bet} - ${date}`}</p>
            </div>
          );
        })}
        <hr />

        {/* Comments */}
        <h3>Comments</h3>
        {comments.slice(0, 3).map(({ user, comment, id }: any, idx: number) => {
          if (idx === 2) {
            return <div key={Math.random()}>... continued</div>;
          }
          return (
            <div key={id}>
              <p>{`${user}: "${comment}"`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
