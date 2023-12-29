import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonD";

export default function BotonD() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>D</button>
    </>
  );
}
