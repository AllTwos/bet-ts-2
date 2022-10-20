import { useState } from "react";
import CardList from "./Components/CardList";
import { bets, Bet } from "./Utils/bet-data";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BetPage from "./Components/BetPage";

function App() {
  const [allBets, setAllBets] = useState(bets);

  //funcs
  const deleteBet = (id: any) => {
    const newBets = allBets.filter((bet: Bet) => bet.id !== id);
    console.log(newBets);

    setAllBets(newBets);
  };

  const createBet = () => {
    const newBet = {
      id: Math.random(),
      user: "Big fargus",
      betTitle: "Test Creation!",
      betStr: "We diiiid it!",
      date: new Date().toLocaleDateString(),
      comments: [],
      bets: [],
    };

    setAllBets([...allBets, newBet]);
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // Make a Home Component
            <div>
              <button onClick={() => createBet()}>Create bet</button>
              <CardList {...{ allBets }} />
            </div>
          }
        />
        <Route
          path="bet/:id"
          element={<BetPage {...{ allBets, addComment }} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
