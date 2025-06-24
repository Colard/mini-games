import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/wordly" element={<h1>Wordly</h1>} />
          <Route path="/tic-tac-toe" element={<h1>Tic Tac Toe</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
