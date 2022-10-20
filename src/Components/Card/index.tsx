import "./index.css";
import { Bet } from "../../Utils/bet-data";

import { useNavigate } from "react-router-dom";

function Card({
  bet: { date, user, betStr, id, comments, betTitle, bets },
}: Bet | any) {

  const navigate = useNavigate()

  const colors = [
    "#d0c4e7",
    "#c2dae1",
    "#ffd0d0",
    "#fff7ad",
    "#9EF8DF",
    "#FFFCB8",
    "#FCC470",
    "#77F8FD",
    "#EBCCD0",
    "#FFE9D0",
    "#BBDBAB",
  ];

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
        {bets.map(({ user, bet, date }: any) => {
          return <p>{`${user}: ${bet} - ${date}`}</p>;
        })}
        <hr />

        {/* Comments */}
        <h3>Comments</h3>
        {comments.slice(0, 3).map(({ user, comment, id }: any, idx: number) => {
          if (idx === 2) {
            return <div>... continued</div>;
          }
          return (
            <div key={id}>
              <p>{`${user}: "${comment}" ${idx}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
