import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonG";

export default function BotonG() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>G</button>
    </>
  );
}
