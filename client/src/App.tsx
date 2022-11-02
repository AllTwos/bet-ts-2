import CardList from "./Components/CardList";
import { useGlobalContext } from "./Utils/Context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BetPage from "./Components/BetPage";
import axios from "axios";

function App() {
  const { createBet }: any = useGlobalContext();

  const testServer = () => {
    axios.post(`http://localhost:5003/test`, {
      name: `Brangus ${Math.random()}`,
      age: "19",
    });
  };

  const testGet = async () => {
    try {
      let data = await axios.get("http://localhost:5003/test-get");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
              <button onClick={() => testServer()}>TestServer</button>
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
