import "./index.css";
import { Bet } from "../../Utils/bet-data";

import { useNavigate } from "react-router-dom";

function Card({
  bet: { date, user, betStr, id, comments, betTitle, bets },
}: Bet | any) {

  const navigate = useNavigate()

  return (
    <div>
      <div className="card">
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
        {comments.slice(0, 4).map(({ user, comment, id }: any, idx: number) => {
          if (idx === 3) {
            return <div>... continued</div>;
          }
          return (
            <div key={id}>
              <p>{`${user}: "${comment}" ${idx}`}</p>
            </div>
          );
        })}
        {/* Page */}
        <button onClick={() => navigate(`/bet/${id}`)}>Go</button>
      </div>
    </div>
  );
}

export default Card;
