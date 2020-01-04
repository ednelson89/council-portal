const charDnD5e = () => ({
  charUser: "",
  system: "D&D5e",
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
  movement: {
    land: 0,
    swim: 0,
    fly: 0,
    climb: 0
  },
  statsBlock: [
    {
      statName: "Strength",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    {
      statName: "Dexterity",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    {
      statName: "Constitution",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    {
      statName: "Intelligence",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    {
      statName: "Wisdom",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    },
    {
      statName: "Charisma",
      stat: 0,
      mod: 0,
      save: 0,
      prof: false
    }
  ],
  combatStats: {
    hitPoints: {
      hitDice: 0,
      maxHP: 0,
      currHP: 0,
      tempHP: 0
    },
    deathSaves: {
      success: 0,
      fails: 0
    },
    armorClass: 0,
    initiative: 0,
    inspiration: false,
    defenses: [""],
    proficiencyBonus: 0,
    speed: 0
  },
  skillsList: [
    { skName: "Acrobatics", skill: "Dex", prof: false, mod: 0 },
    { skName: "Animal Handling", skill: "Wis", prof: false, mod: 0 },
    { skName: "Arcana", skill: "Int", prof: false, mod: 0 },
    { skName: "Athletics", skill: "Str", prof: false, mod: 0 },
    { skName: "Deception", skill: "Cha", prof: false, mod: 0 },
    { skName: "History", skill: "Int", prof: false, mod: 0 },
    { skName: "Insight", skill: "Wis", prof: false, mod: 0 },
    { skName: "Intimidation", skill: "Cha", prof: false, mod: 0 },
    { skName: "Investigation", skill: "Int", prof: false, mod: 0 },
    { skName: "Medicine", skill: "Wis", prof: false, mod: 0 },
    { skName: "Nature", skill: "Int", prof: false, mod: 0 },
    { skName: "Perception", skill: "Wis", prof: false, mod: 0 },
    { skName: "Performance", skill: "Cha", prof: false, mod: 0 },
    { skName: "Persuasion", skill: "Cha", prof: false, mod: 0 },
    { skName: "Religion", skill: "Int", prof: false, mod: 0 },
    { skName: "Sleight of Hand", skill: "Dex", prof: false, mod: 0 },
    { skName: "Stealth", skill: "Dex", prof: false, mod: 0 },
    { skName: "Survival", skill: "Wis", prof: false, mod: 0 }
  ],
  proficiencies: [""],
  languages: [""],
  passiveScores: {
    passPercep: 0,
    passInsight: 0,
    passInvest: 0
  },
  attacksCantrips: [],
  equipment: [],
  features: [""],
  feats: [""],
  money: [
    {
      copper: 0,
      silver: 0,
      gold: 0,
      electrum: 0,
      platinum: 0
    }
  ],
  backstory: [""],
  note: [""],
  spells: {
    cantrips: [],
    lvl1: [],
    lvl2: [],
    lvl3: [],
    lvl4: [],
    lvl5: [],
    lvl6: [],
    lvl7: [],
    lvl8: [],
    lvl9: []
  },
  spellMods: {
    spellAbility: "",
    spellSave: 0,
    spellAttack: 0
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
