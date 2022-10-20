import Card from "../Card";
import "../../Utils/utils.css";
import "./index.css";
import { Bet } from "../../Utils/bet-data";

function CardList({ allBets }: any) {
  return (
    <div className="flex-row">
      {allBets.map((bet: Bet) => {
        return (
          <div key={bet.id}>
            <Card bet={bet} />
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
