const mobToken = () => ({
  playerToken: false,
  imgSrc:
    "https://vhss.oddcast.com/vhss_editors/ve_html/img/cats/hover/character.png",
  top: 0,
  left: 0,
  width: 150,
  height: 150,
  tokenID: generateID()
});

var generateID = function() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

export { mobToken };
