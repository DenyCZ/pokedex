export const useAudio = (url: string) => {
  if (typeof Audio === "undefined") {
    return {};
  }

  const audio = new Audio(url);

  const play = () => {
    audio.play();
  };

  return { play };
};
