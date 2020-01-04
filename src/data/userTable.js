const userTable = [
  {
    userName: "enelson",
    userId: "00000000000000111",
    userCreationDate: "01/04/2020",
    userGames: ["0001", "0002", "0003", "0004"],
    userChars: [
      {
        charUser: "enelson",
        system: "D&D5e",
        charID: "0001231230001",
        portraitSrc:
          "http://d20pfsrd.opengamingnetwork.com/wp-content/uploads/sites/12/2017/01/kolvir_comm_by_yamao-d6uy0t8-320-2.png",
        genBlock: {
          charName: "Test Char 1",
          charRace: " Human",
          charBackground: "Noble",
          charAlign: "CE",
          charLvl: 1,
          charClass: "Fighter",
          charSub: "Champion",
          charClassLvl: "1",
          charXP: " 0 / 0 "
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
            stat: 15,
            mod: 2,
            save: 2,
            prof: true
          },
          {
            statName: "Dexterity",
            stat: 14,
            mod: 2,
            save: 2,
            prof: false
          },
          {
            statName: "Constitution",
            stat: 14,
            mod: 2,
            save: 2,
            prof: true
          },
          {
            statName: "Intelligence",
            stat: 11,
            mod: 0,
            save: 0,
            prof: false
          },
          {
            statName: "Wisdom",
            stat: 12,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Charisma",
            stat: 13,
            mod: 1,
            save: 1,
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
        proficiencies: ["Martial Weapons", "Light Armor", "Heavy Armor"],
        languages: ["Common", "Sylvan", "Abyssal"],
        passiveScores: {
          passPercep: 0,
          passInsight: 0,
          passInvest: 0
        },
        attacksCantrips: [
          { attackName: "Longsword", hitMod: 2, dmg: "1d8", notes: "" },
          { attackName: "Shortsword", hitMod: 2, dmg: "1d6", notes: "" }
        ],
        equipment: [
          { itemName: "Arrows", qty: 20, weight: 5 },
          { itemName: "Fine Clothes", qty: 1, weight: 5 },
          { itemName: "Shield", qty: 1, weight: 5 }
        ],
        features: [
          "Fighting Style: You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
          "Dueling:  When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        feats: [
          "Alert - +5 Initiative, can't be surprised, no advantage for hidden attackers",
          "Actor - +1 Charisma, skilled at mimicry and dramatic"
        ],
        money: [
          {
            copper: 0,
            silver: 0,
            gold: 0,
            electrum: 0,
            platinum: 0
          }
        ],
        backstory: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
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
      },
      {
        charUser: "enelson",
        system: "D&D5e",
        charID: "0qwerqwer0002",
        portraitSrc: "https://i.redd.it/jiuw9av5qzw21.jpg",
        genBlock: {
          charName: "Test Char 2",
          charRace: "Human",
          charBackground: "Noble",
          charAlign: "CE",
          charLvl: 1,
          charClass: "Wizard",
          charSub: "Transmutation",
          charClassLvl: "1",
          charXP: " 0 / 0 "
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
            stat: 10,
            mod: 0,
            save: 0,
            prof: false
          },
          {
            statName: "Dexterity",
            stat: 11,
            mod: 0,
            save: 0,
            prof: false
          },
          {
            statName: "Constitution",
            stat: 12,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Intelligence",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Wisdom",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Charisma",
            stat: 13,
            mod: 1,
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
        languages: ["Common", "Sylvan", "Abyssal"],
        passiveScores: {
          passPercep: 0,
          passInsight: 0,
          passInvest: 0
        },
        attacksCantrips: [
          { attackName: "Longsword", hitMod: 2, dmg: "1d8", notes: "" },
          { attackName: "Shortsword", hitMod: 2, dmg: "1d6", notes: "" }
        ],
        equipment: [
          { itemName: "Arrows", qty: 20, weight: 5 },
          { itemName: "Fine Clothes", qty: 1, weight: 5 },
          { itemName: "Shield", qty: 1, weight: 5 }
        ],
        features: [
          "Fighting Style: You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
          "Dueling:  When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        feats: [
          "Alert - +5 Initiative, can't be surprised, no advantage for hidden attackers",
          "Actor - +1 Charisma, skilled at mimicry and dramatic"
        ],
        money: [
          {
            copper: 0,
            silver: 0,
            gold: 0,
            electrum: 0,
            platinum: 0
          }
        ],
        backstory: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
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
      },
      {
        charUser: "enelson",
        system: "D&D5e",
        charID: "000dfbfgbdfg00000003",
        portraitSrc:
          "https://i.pinimg.com/originals/de/8e/94/de8e94611d020c4cc97e93ba355a8049.png",
        genBlock: {
          charName: "Test Char 3",
          charRace: " Human",
          charBackground: "Noble",
          charAlign: "CE",
          charLvl: 1,
          charClass: "Monk",
          charSub: "Cobalt Soul",
          charClassLvl: "1",
          charXP: " 0 / 0 "
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
            stat: 12,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Dexterity",
            stat: 17,
            mod: 3,
            save: 0,
            prof: true
          },
          {
            statName: "Constitution",
            stat: 13,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Intelligence",
            stat: 14,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Wisdom",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Charisma",
            stat: 13,
            mod: 1,
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
        languages: ["Common", "Sylvan", "Abyssal"],
        passiveScores: {
          passPercep: 0,
          passInsight: 0,
          passInvest: 0
        },
        attacksCantrips: [
          { attackName: "Longsword", hitMod: 2, dmg: "1d8", notes: "" },
          { attackName: "Shortsword", hitMod: 2, dmg: "1d6", notes: "" }
        ],
        equipment: [
          { itemName: "Arrows", qty: 20, weight: 5 },
          { itemName: "Fine Clothes", qty: 1, weight: 5 },
          { itemName: "Shield", qty: 1, weight: 5 }
        ],
        features: [
          "Fighting Style: You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
          "Dueling:  When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
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
        backstory: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
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
      }
    ]
  },
  {
    userName: "testUser1",
    userId: "0000000000000000njk1j2345",
    userCreationDate: "01/15/2019",
    userGames: ["0001", "0002"],
    userChars: [
      {
        charUser: "testUser1",
        system: "D&D5e",
        charID: "000dfbfgbdfg00000003",
        portraitSrc:
          "https://i.pinimg.com/originals/de/8e/94/de8e94611d020c4cc97e93ba355a8049.png",
        genBlock: {
          charName: "Test Char 3",
          charRace: " Human",
          charBackground: "Noble",
          charAlign: "CE",
          charLvl: 1,
          charClass: "Monk",
          charSub: "Cobalt Soul",
          charClassLvl: "1",
          charXP: " 0 / 0 "
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
            stat: 12,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Dexterity",
            stat: 17,
            mod: 3,
            save: 0,
            prof: true
          },
          {
            statName: "Constitution",
            stat: 13,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Intelligence",
            stat: 14,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Wisdom",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Charisma",
            stat: 13,
            mod: 1,
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
        languages: ["Common", "Sylvan", "Abyssal"],
        passiveScores: {
          passPercep: 0,
          passInsight: 0,
          passInvest: 0
        },
        attacksCantrips: [
          { attackName: "Longsword", hitMod: 2, dmg: "1d8", notes: "" },
          { attackName: "Shortsword", hitMod: 2, dmg: "1d6", notes: "" }
        ],
        equipment: [
          { itemName: "Arrows", qty: 20, weight: 5 },
          { itemName: "Fine Clothes", qty: 1, weight: 5 },
          { itemName: "Shield", qty: 1, weight: 5 }
        ],
        features: [
          "Fighting Style: You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
          "Dueling:  When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
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
        backstory: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
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
      },
      {
        charUser: "testUser1",
        system: "D&D5e",
        charID: "0qwerqwer0002",
        portraitSrc: "https://i.redd.it/jiuw9av5qzw21.jpg",
        genBlock: {
          charName: "Test Char 2",
          charRace: "Human",
          charBackground: "Noble",
          charAlign: "CE",
          charLvl: 1,
          charClass: "Wizard",
          charSub: "Transmutation",
          charClassLvl: "1",
          charXP: " 0 / 0 "
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
            stat: 10,
            mod: 0,
            save: 0,
            prof: false
          },
          {
            statName: "Dexterity",
            stat: 11,
            mod: 0,
            save: 0,
            prof: false
          },
          {
            statName: "Constitution",
            stat: 12,
            mod: 1,
            save: 0,
            prof: false
          },
          {
            statName: "Intelligence",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Wisdom",
            stat: 15,
            mod: 2,
            save: 0,
            prof: true
          },
          {
            statName: "Charisma",
            stat: 13,
            mod: 1,
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
        languages: ["Common", "Sylvan", "Abyssal"],
        passiveScores: {
          passPercep: 0,
          passInsight: 0,
          passInvest: 0
        },
        attacksCantrips: [
          { attackName: "Longsword", hitMod: 2, dmg: "1d8", notes: "" },
          { attackName: "Shortsword", hitMod: 2, dmg: "1d6", notes: "" }
        ],
        equipment: [
          { itemName: "Arrows", qty: 20, weight: 5 },
          { itemName: "Fine Clothes", qty: 1, weight: 5 },
          { itemName: "Shield", qty: 1, weight: 5 }
        ],
        features: [
          "Fighting Style: You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.",
          "Dueling:  When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        ],
        feats: [
          "Alert - +5 Initiative, can't be surprised, no advantage for hidden attackers",
          "Actor - +1 Charisma, skilled at mimicry and dramatic"
        ],
        money: [
          {
            copper: 0,
            silver: 0,
            gold: 0,
            electrum: 0,
            platinum: 0
          }
        ],
        backstory: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
        notes: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Commodo viverra maecenas accumsan lacus vel. Montes nascetur ridiculus mus mauris vitae ultricies. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Erat velit scelerisque in dictum non consectetur. Morbi tristique senectus et netus et. In dictum non consectetur a erat nam at. Amet cursus sit amet dictum sit amet justo. Gravida in fermentum et sollicitudin ac orci phasellus. Eu sem integer vitae justo eget magna. Amet commodo nulla facilisi nullam vehicula ipsum a. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Est ullamcorper eget nulla facilisi etiam dignissim diam. Risus in hendrerit gravida rutrum quisque non."
        ],
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
      }
    ]
  }
];

export { userTable };
