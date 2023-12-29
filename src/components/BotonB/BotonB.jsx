import { useEffect } from "react";
import { playSound, addKeyPressListener } from "./BotonB";

export default function BotonB() {
  useEffect(() => {
    const removeKeyPressListener = addKeyPressListener(playSound);

    return () => {
      removeKeyPressListener();
    };
  }, []);

  return (
    <>
      <button onClick={playSound}>B</button>
    </>
  );
}
