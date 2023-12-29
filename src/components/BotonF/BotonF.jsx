import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonF";

export default function BotonF() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>F</button>
    </>
  );
}
