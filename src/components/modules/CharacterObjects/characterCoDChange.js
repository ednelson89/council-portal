const charCoDChangeling = () => ({
  charUser: "",
  system: "CoDChangeling",
  charID: generateID(),
  portraitSrc:
    "https://live.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png",
  genBlock: {
    charName: "",
    age: 0,
    chronicle: "",
    needle: "",
    thread: "",
    concept: "",
    seeming: "",
    kith: "",
    court: ""
  },
  attributes: {
    int: 0,
    wits: 0,
    resolve: 0,
    str: 0,
    dex: 0,
    stam: 0,
    pres: 0,
    manip: 0,
    comp: 0
  },
  skills: {
    mental: {
      academics: { name: "Academics", score: 0, prof: false },
      computer: { name: "Computer", score: 0, prof: false },
      craft: { name: "Craft", score: 0, prof: false },
      investigation: { name: "investigation", score: 0, prof: false },
      medicine: { name: "medicine", score: 0, prof: false },
      occult: { name: "occult", score: 0, prof: false },
      politics: { name: "politics", score: 0, prof: false },
      science: { name: "science", score: 0, prof: false }
    },
    physical: {
      athletics: { name: "athletics", score: 0, prof: false },
      brawl: { name: "brawl", score: 0, prof: false },
      drive: { name: "drive", score: 0, prof: false },
      firearms: { name: "firearms", score: 0, prof: false },
      larceny: { name: "larceny", score: 0, prof: false },
      stealth: { name: "stealth", score: 0, prof: false },
      survival: { name: "survival", score: 0, prof: false },
      weaponry: { name: "weaponry", score: 0, prof: false }
    },
    social: {
      animalKen: { name: "animalKen", score: 0, prof: false },
      empathy: { name: "empathy", score: 0, prof: false },
      expression: { name: "expression", score: 0, prof: false },
      intimidation: { name: "intimidation", score: 0, prof: false },
      persuasion: { name: "persuasion", score: 0, prof: false },
      socialize: { name: "socialize", score: 0, prof: false },
      streetwise: { name: "streetwise", score: 0, prof: false },
      subterfuge: { name: "subterfuge", score: 0, prof: false }
    }
  },
  merits: [],
  combatStats: {
    health: 0,
    willpower: 0,
    wyrd: 1,
    glamour: 0,
    clarity: 0,
    touchstones: [],
    favRegalia: [],
    frailties: [],
    conditions: [],
    aspirations: [],
    size: "",
    speed: 0,
    defense: 0,
    armor: 0,
    initMod: 0,
    beats: 0,
    experiences: ""
  },
  weaponAttks: [
    { name: "", dmg: "", range: "", clip: "", init: "", str: "", size: "" }
  ],
  equipment: [
    { name: "", durability: "", structure: "", size: "", cost: "", qnty: "" }
  ],
  backstory: [""],
  notes: [""]
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

export { charCoDChangeling };
