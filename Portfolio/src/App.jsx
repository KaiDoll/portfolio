import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import{ Container } from "react-bootstrap";
import '../src/App.css'

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Header />
        <Container>
        <Outlet />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
