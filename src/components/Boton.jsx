import { Howl } from "howler";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Boton = ({ tecla, sonido }) => {
  const sound = useRef(new Howl({ src: [sonido], volume: 0.5 }));
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // eslint-disable-next-line react/prop-types
      if (event.key.toUpperCase() === tecla.toUpperCase()) {
        sound.current.play();
      }
    };

    const buttonElement = buttonRef.current;

    if (buttonElement) {
      buttonElement.addEventListener("keydown", handleKeyPress);

      return () => {
        buttonElement.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [tecla]);

  const handleClick = () => {
    sound.current.play();
  };

  return (
    <button ref={buttonRef} onClick={handleClick}>
      {tecla}
    </button>
  );
};

export default Boton;
