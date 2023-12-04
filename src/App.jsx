import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Navigation />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
