const charCoDMage = () => ({
  charUser: "",
  system: "CoDMage",
  charID: generateID(),
  portraitSrc:
    "https://live.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png",
  genBlock: {
    charName: "",
    age: 0,
    chronicle: "",
    virtue: "",
    vice: "",
    concept: "",
    path: "",
    order: "",
    legacy: "",
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
    comp: 0,
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
        specText: "",
      },
      medicine: { name: "medicine", score: 0, spec: false, specText: "" },
      occult: { name: "occult", score: 0, spec: false, specText: "" },
      politics: { name: "politics", score: 0, spec: false, specText: "" },
      science: { name: "science", score: 0, spec: false, specText: "" },
    },
    physical: {
      athletics: { name: "athletics", score: 0, spec: false, specText: "" },
      brawl: { name: "brawl", score: 0, spec: false, specText: "" },
      drive: { name: "drive", score: 0, spec: false, specText: "" },
      firearms: { name: "firearms", score: 0, spec: false, specText: "" },
      larceny: { name: "larceny", score: 0, spec: false, specText: "" },
      stealth: { name: "stealth", score: 0, spec: false, specText: "" },
      survival: { name: "survival", score: 0, spec: false, specText: "" },
      weaponry: { name: "weaponry", score: 0, spec: false, specText: "" },
    },
    social: {
      animalKen: { name: "animalKen", score: 0, spec: false, specText: "" },
      empathy: { name: "empathy", score: 0, spec: false, specText: "" },
      expression: { name: "expression", score: 0, spec: false, specText: "" },
      intimidation: {
        name: "intimidation",
        score: 0,
        spec: false,
        specText: "",
      },
      persuasion: { name: "persuasion", score: 0, spec: false, specText: "" },
      socialize: { name: "socialize", score: 0, spec: false, specText: "" },
      streetwise: { name: "streetwise", score: 0, spec: false, specText: "" },
      subterfuge: { name: "subterfuge", score: 0, spec: false, specText: "" },
    },
  },
  merits: [],
  combatStats: {
    health: { total: 0, boxes: [] },
    willpower: { total: 0, boxes: [] },
    gnosis: { total: 0, boxes: [] },
    mana: { total: 0, boxes: [] },
    wisdom: { total: 0, boxes: [] },
    obsessions: [],
    conditions: [],
    aspirations: [],
    size: "",
    speed: 0,
    defense: 0,
    armor: 0,
    initMod: 0,
    beats: 0,
    experiences: "",
    arcaneBeats: 0,
    arcaneExperiences: "",
  },
  arcana: {
    death: { score: "" },
    fate: { score: "" },
    forces: { score: "" },
    life: { score: "" },
    matter: { score: "" },
    mind: { score: "" },
    prime: { score: "" },
    space: { score: "" },
    spirit: { score: "" },
    time: { score: "" },
  },
  weaponAttks: [
    { name: "", dmg: "", range: "", clip: "", init: "", str: "", size: "" },
  ],
  equipment: [
    { name: "", durability: "", structure: "", size: "", cost: "", qnty: "" },
  ],
  backstory: [""],
  notes: [""],
  activeSpells: [],
  attainments: [],
  magicalTool: [],
  praxes: [],
  rotes: [
    {
      arcanum: "",
      lvl: "",
      spell: "",
      creator: "",
      roteSkill: "",
    },
  ],
  nimbusTilts: [],
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

export { charCoDMage };
