import CardList from "./Components/CardList";
import { useGlobalContext } from "./Utils/Context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BetPage from "./Components/BetPage";

function App() {
  const { createBet }: any = useGlobalContext();  

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // Make a Home Component
            <div>
              <button onClick={() => createBet()}>Create bet</button>
              <CardList />
            </div>
          }
        />
        <Route path="bet/:id" element={<BetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
