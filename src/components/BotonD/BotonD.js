import { Howl } from "howler";

const sound = new Howl({
  src: ["../../../src/audio/acordeD.mp3"],
  volume: 0.5,
});

export const playSound = () => {
  sound.play();
};

export const addKeyPressListener = (callback) => {
  const handleKeyPress = (event) => {
    if (event.key === "d" || event.key === "D") {
      callback();
    }
  };

  document.addEventListener("keydown", handleKeyPress);

  return () => {
    document.removeEventListener("keydown", handleKeyPress);
  };
};
