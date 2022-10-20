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
  const [name, setName] = useState("");
  const [userComment, setUserComment] = useState(""); //move to CardList so can reset state after button pushed

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
          onChange={(e) => setUserComment(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && addComment(id, userComment);
          }}
          type="text"
          value={userComment}
        />
        <button onClick={() => addComment(id, userComment)}>Add comment</button>
        <hr />
        {/* Delete */}
        <button onClick={() => deleteBet(id)}>Delete Bet</button>
      </div>
    </div>
  );
}

export default Card;
