import { useState } from "react";
import Card from "../Card";
import "../../Utils/utils.css";
import "./index.css";
import { bets, Bet } from "../../Utils/bet-data";

function CardList() {
  const [allBets, setAllBets] = useState(bets);

  //funcs
  const deleteBet = (id: any) => {
    const newBets = allBets.filter((bet) => bet.id !== id);
    console.log(newBets);

    setAllBets(newBets);
  };


  const addComment = (id: number, comment: string) => {
    const newBets = allBets.map((bet) => {
      if (bet.id === id) {
        return {
          ...bet,
          comments: [
            ...bet.comments,
            {
              id: Math.random(),
              user: `user${Math.random().toFixed(3).slice(2)}`,
              comment,
            },
          ],
        };
      } else {
        return bet;
      }
    });
    setAllBets(newBets);
  };

  return (
    <div className="flex-row">
      {allBets.map((bet: Bet) => {
        const { user, date, betStr, id, comments } = bet;
        return (
          <div key={id}>
            <Card
              {...{
                date,
                user,
                betStr,
                id,
                deleteBet,
                comments,
                addComment,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
