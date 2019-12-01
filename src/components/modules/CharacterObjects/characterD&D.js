const charDnD5e = () => ({
  charUser: "",
  charID: generateID(),
  portraitSrc:
    "https://live.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png",
  genBlock: {
    charName: "",
    charRace: "",
    charBackground: "",
    charAlign: "",
    charLvl: 0,
    charClass: "",
    charSub: "",
    charClassLvl: "",
    charXP: ""
  },
  statsBlock: {
    str: 0,
    strMod: 0,
    strSave: 0,
    dex: 0,
    dexMod: 0,
    dexSave: 0,
    con: 0,
    conMod: 0,
    conSave: 0,
    int: 0,
    intMod: 0,
    intSave: 0,
    wis: 0,
    wisMod: 0,
    wisSave: 0,
    cha: 0,
    chaMod: 0,
    chaSave: 0
  }
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

export { charDnD5e };
