import { useState } from "react";
import "./index.css";
import { Bet } from "../../Utils/bet-data";

const BetPage = ({ allBets }: any) => {
  return (
    <div className="bet-page">
      <h1>BetPage Component</h1>
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
