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
      academics: { name: "Academics", score: 0, spec: false, specText: "" },
      computer: { name: "Computer", score: 0, spec: false, specText: "" },
      craft: { name: "Craft", score: 0, spec: false, specText: "" },
      investigation: {
        name: "investigation",
        score: 0,
        spec: false,
        specText: ""
      },
      medicine: { name: "medicine", score: 0, spec: false, specText: "" },
      occult: { name: "occult", score: 0, spec: false, specText: "" },
      politics: { name: "politics", score: 0, spec: false, specText: "" },
      science: { name: "science", score: 0, spec: false, specText: "" }
    },
    physical: {
      athletics: { name: "athletics", score: 0, spec: false, specText: "" },
      brawl: { name: "brawl", score: 0, spec: false, specText: "" },
      drive: { name: "drive", score: 0, spec: false, specText: "" },
      firearms: { name: "firearms", score: 0, spec: false, specText: "" },
      larceny: { name: "larceny", score: 0, spec: false, specText: "" },
      stealth: { name: "stealth", score: 0, spec: false, specText: "" },
      survival: { name: "survival", score: 0, spec: false, specText: "" },
      weaponry: { name: "weaponry", score: 0, spec: false, specText: "" }
    },
    social: {
      animalKen: { name: "animalKen", score: 0, spec: false, specText: "" },
      empathy: { name: "empathy", score: 0, spec: false, specText: "" },
      expression: { name: "expression", score: 0, spec: false, specText: "" },
      intimidation: {
        name: "intimidation",
        score: 0,
        spec: false,
        specText: ""
      },
      persuasion: { name: "persuasion", score: 0, spec: false, specText: "" },
      socialize: { name: "socialize", score: 0, spec: false, specText: "" },
      streetwise: { name: "streetwise", score: 0, spec: false, specText: "" },
      subterfuge: { name: "subterfuge", score: 0, spec: false, specText: "" }
    }
  },
  merits: [],
  combatStats: {
    health: { total: 0, boxes: [] },
    willpower: { total: 0, boxes: [] },
    wyrd: { total: 0, boxes: [] },
    glamour: { total: 0, boxes: [] },
    clarity: { total: 0, boxes: [] },
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
  notes: [""],
  contracts: [],
  pledges: [],
  expandedMerits: {
    faeMounts: [],
    mantles: [],
    hollows: [],
    tokens: []
  },
  otherTraits: {
    seemingBless: [],
    seemingCurse: [],
    kithBless: [],
    goblinDebt: []
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

export { charCoDChangeling };
