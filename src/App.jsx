import "./App.css";
import Boton from "./components/Boton";

function App() {
  return (
    <>
      <main>
        <div>Acordes de Guitarra</div>
        <section>
          <Boton tecla="A" sonido="../../../src/audio/acordeA.mp3" />
          <Boton tecla="B" sonido="../../../src/audio/acordeB.mp3" />
          <Boton tecla="D" sonido="../../../src/audio/acordeD.mp3" />
          <Boton tecla="E" sonido="../../../src/audio/acordeE.mp3" />
          <Boton tecla="F" sonido="../../../src/audio/acordeF.mp3" />
          <Boton tecla="G" sonido="../../../src/audio/acordeG.mp3" />
        </section>
      </main>
    </>
  );
}

export default App;
