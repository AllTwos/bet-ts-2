import { useState } from "react";
import "./index.css";
import { Bet } from "../../Utils/bet-data";

function Card({
  date,
  user,
  betStr,
  id,
  comments,
  deleteBet,
  addComment,
}: Bet | any) {

  const [userComment, setUserComment] = useState("");

  return (
    <div>
      <div className="card">
        {/* Info */}
        <h1>{user}</h1>
        <h3>Bet: {betStr}</h3>
        <p>{date}</p>
        <hr />
        {/* Comments */}
        {comments.map(({ user, comment, id }: any) => {
          return (
            <div key={id}>
              <p>{`${user}: "${comment}"`}</p>
            </div>
          );
        })}
        <input
          onChange={(e) => {
            setUserComment(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addComment(id, userComment);
              setUserComment("");
            }
          }}
          type="text"
          value={userComment}
        />
        <button
          onClick={() => {
            addComment(id, userComment);
            setUserComment("");
          }}
        >
          Add comment
        </button>
        <hr />
        {/* Delete */}
        <button onClick={() => deleteBet(id)}>Delete Bet</button>
      </div>
    </div>
  );
}

export default Card;
