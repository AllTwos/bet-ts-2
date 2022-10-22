import { useState } from "react";
import "./index.css";
import { useGlobalContext } from "../../Utils/Context";
import { useParams } from "react-router-dom";

const BetPage = () => {
  const {
    allBets,
    addComment,
    userComment,
    setUserComment,
    childBetText,
    setChildBetText,
    addChildBet,
  }: any = useGlobalContext();

  let params = useParams();

  let theBet = allBets.filter((bet: any) => bet.id.toString() === params.id)[0];

  let { id, user, betTitle, betStr, date, comments, childBets } = theBet;

  return (
    <div className="bet-page">
      <h1>{betTitle}</h1>
      <p>{date}</p>
      <h3>{betStr}</h3>
      <p>{user}</p>
      <hr />
      <h1>Bets</h1>
      {childBets.map(({ user, bet, date }: any) => {
        return (
          <div key={Math.random()}>
            <p>{`${user}: ${bet} - ${date}`}</p>
          </div>
        );
      })}
      <input
        onChange={(e) => setChildBetText(e.target.value)}
        type="text"
        value={childBetText}
      />
      <button onClick={() => addChildBet(id, childBetText)}>Bet Now!</button>
      <hr />
      <h3>Comments</h3>
      {comments.map(({ user, id, comment }: any) => {
        return (
          <div key={id}>
            <p>{`${user}: ${comment}`}</p>
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
          }
        }}
        type="text"
        value={userComment}
      />
      <button
        onClick={() => {
          addComment(id, userComment);
        }}
      >
        Add comment
      </button>
    </div>
  );
};

// function BetPage({
//   date,
//   user,
//   betStr,
//   id,
//   comments,
//   deleteBet,
//   addComment,
// }: Bet | any) {
//   const [userComment, setUserComment] = useState("");

//   return (
//     <div>
//       <div className="card">
//         {/* Info */}
//         <h1>{betStr}</h1>
//         <h3>User: {user}</h3>
//         <p>{date}</p>
//         <hr />
//         {/* Comments */}
//         {comments.slice(0, 5).map(({ user, comment, id }: any, idx: number) => {
//           if (idx > 3) {
//             return <div>...</div>;
//           }
//           return (
//             <div key={id}>
//               <p>{`${user}: "${comment}" ${idx}`}</p>
//             </div>
//           );
//         })}
//         <input
//           onChange={(e) => {
//             setUserComment(e.target.value);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addComment(id, userComment);
//               setUserComment("");
//             }
//           }}
//           type="text"
//           value={userComment}
//         />
//         <button
//           onClick={() => {
//             addComment(id, userComment);
//             setUserComment("");
//           }}
//         >
//           Add comment
//         </button>
//         <hr />
//         {/* Delete */}
//         <button onClick={() => deleteBet(id)}>Delete Bet</button>
//       </div>
//     </div>
//   );
// }

export default BetPage;
