import Card from "../Card";
import "../../Utils/utils.css";
import "./index.css";
import { Bet } from "../../Utils/bet-data";
import { useGlobalContext } from "../../Utils/Context";

function CardList() {
  const { allBets }: any = useGlobalContext();

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
