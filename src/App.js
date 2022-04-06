import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import FaqQuestions from "./components/FaqQuestions";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <section>
        <SearchSection />
        <FaqQuestions />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
