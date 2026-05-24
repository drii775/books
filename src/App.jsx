import Navigation from "./components/Navigation";
import Router from "./routes/Router";
// import { useBookReturns } from "./hooks/useBookReturns";

import "./App.css";

function App() {
  // const { bookReturns } = useBookReturns();
  return (
    <>
      <div className="container mx-auto px-4 py-3">
        <Navigation />
        <Router />
      </div>
    </>
  );
}

export default App;
