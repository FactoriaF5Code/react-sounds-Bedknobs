import "./App.css";
import BotonE from "./components/BotonE/BotonE.jsx";
import BotonA from "./components/BotonA/BotonA.jsx";
import BotonD from "./components/BotonD/BotonD.jsx";
import BotonG from "./components/BotonG/BotonG.jsx";
import BotonB from "./components/BotonB/BotonB.jsx";
import BotonF from "./components/BotonF/BotonF.jsx";

function App() {
  return (
    <>
      <main>
        <div>Acordes de Guitarra</div>
        <section>
          <BotonE />
          <BotonA />
          <BotonD />
          <BotonG />
          <BotonB />
          <BotonF />
        </section>
      </main>
    </>
  );
}

export default App;
