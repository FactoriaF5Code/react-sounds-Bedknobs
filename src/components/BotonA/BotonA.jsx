import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonA";

export default function BotonA() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>A</button>
    </>
  );
}
