import { createContext, useContext, useState } from "react";
import { bets, Bet } from "../bet-data";

const AppContext = createContext({});

const AppProvider = ({ children }: any) => {
  //state
  const [allBets, setAllBets] = useState(bets);
  const [userComment, setUserComment] = useState("");
  const [childBetText, setChildBetText] = useState("");

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
      childBets: [],
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
    setUserComment("");
  };

  const addChildBet = (id: number, childBet: string) => {
    const newChildBet = allBets.map((bet) => {
      if (bet.id === id) {
        return {
          ...bet,
          childBets: [
            ...bet.childBets,
            {
              user: `user${Math.random().toFixed(3).slice(2)}`,
              bet: childBet,
              date: new Date().toLocaleDateString(),
            },
          ],
        };
      } else {
        return bet;
      }
    });
    setAllBets(newChildBet);
    setChildBetText("");
  };

  return (
    <AppContext.Provider
      value={{
        allBets,
        setAllBets,
        deleteBet,
        createBet,
        addComment,
        userComment,
        setUserComment,
        childBetText,
        setChildBetText,
        addChildBet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
