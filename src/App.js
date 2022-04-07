import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import FaqQuestions from "./components/FaqQuestions";
import Footer from "./components/Footer";
import { questionsURL } from "./data/data";

function App() {
  return (
    <main>
      <section>
        <SearchSection />
        <div className="container">
          <div className="row py-5 g-5">
            {questionsURL.map((question, index) => {
              return <FaqQuestions data={question} key={index} />;
            })}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
