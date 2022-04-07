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
        <div className="container px-lg-0">
          <div className="row p-2 gy-5 m-0 px-lg-0">
            <FaqQuestions data="Top FAQ" />
            <FaqQuestions data="Contact Us" />
            <FaqQuestions data="Subscriptions & Billing" />
            <FaqQuestions data="Account Setting" />
            <FaqQuestions data="Troubleshooting" />
            <FaqQuestions data="Using Headspace" />
            <FaqQuestions data="Headspace Family Plan" />
            <FaqQuestions data="Meditation Tips" />
            <FaqQuestions data="Headspace Gifts" />
            <FaqQuestions data="Headspace for Work" />
            <FaqQuestions data="Scientific Benefits of Meditation" />
            <FaqQuestions data="Privacy at Headspace" />
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
