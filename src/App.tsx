import { useState } from "react";
import CardList from "./Components/CardList";
import { bets, Bet } from "./Utils/bet-data";

function App() {
  const [allBets, setAllBets] = useState(bets);

  //funcs
  const deleteBet = (id: any) => {
    const newBets = allBets.filter((bet: Bet) => bet.id !== id);
    console.log(newBets);

    setAllBets(newBets);
  };

  const addComment = (id: number, comment: string) => {
    const newBets = allBets.map((bet: Bet) => {
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
    <div>
      <h1>APP</h1>
      <h2>CardList</h2>
      <CardList {...{ allBets }} />
    </div>
  );
}

export default App;
