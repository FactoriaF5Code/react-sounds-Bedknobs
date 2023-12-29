import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonE";

export default function BotonE() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>E</button>
    </>
  );
}
