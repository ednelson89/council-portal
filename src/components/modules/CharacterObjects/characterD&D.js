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
  statsBlock: [
    {
      statName: "Strength",
      stat: 0,
      mod: 0,
      save: 0
    },
    {
      statName: "Dexterity",
      stat: 0,
      mod: 0,
      save: 0
    },
    {
      statName: "Constitution",
      stat: 0,
      mod: 0,
      save: 0
    },
    {
      statName: "Intelligence",
      stat: 0,
      mod: 0,
      save: 0
    },
    {
      statName: "Wisdom",
      stat: 0,
      mod: 0,
      save: 0
    },
    {
      statName: "Charisma",
      stat: 0,
      mod: 0,
      save: 0
    }
  ]
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
