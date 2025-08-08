import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import DogeCoin from "./components/WhatisDogecoin";
import LineGraph from "./components/LineGraph";
import Footer from "./components/Footer";
// import BarGraph from "./components/BarGraph";
// import LineGraphTable from "./components/LineGraphTable";

function App() {
  const whatRef = useRef(null);
  const forecastRef = useRef(null);

  const handleNavClick = (section) => {
    if (section === "what" && whatRef.current) {
      whatRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "forecast" && forecastRef.current) {
      forecastRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header onNavigate={handleNavClick} />
      <section ref={whatRef}>
        <DogeCoin />
      </section>
      <section ref={forecastRef}>
        <LineGraph />
      </section>
      {/* <BarGraph /> */}
      {/* <LineGraphTable /> */}
      <Footer />
    </>
  );
}

export default App;
