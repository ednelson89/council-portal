const charSR5 = () => ({
  charUser: '',
  system: 'SR5',
  charID: generateID(),
  portraitSrc:
    'https://live.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png',
  genBlock: {
    charName: '',
    metatype: '',
    ethnicity: '',
    age: 0,
    sex: '',
    height: '',
    weight: '',
    streetCred: '',
    notoriety: '',
    publicAwareness: '',
    karma: '',
    totalKarma: '',
    misc: '',
  },
  attributes: {
    body: 0,
    agility: 0,
    reaction: 0,
    str: 0,
    will: 0,
    log: 0,
    intuit: 0,
    charisma: 0,
    edge: 0,
    edgePoints: 0,
    essence: 0,
    magicResonance: 0,
    init: 0,
    matrixInit: 0,
    astralInit: 0,
    composure: 0,
    judgeIntent: 0,
    memory: 0,
    liftCarry: 0,
    movement: 0,
    physLimit: 0,
    mentalLimit: 0,
    socialLimit: 0,
  },
  skills: [{ skill: '', rtg: 0, type: '' }],
  idsLifestyleCurrency: {
    primeLifestyle: '',
    nuyen: 0,
    licenses: [''],
    misc: [''],
  },
  coreCombatInfo: {
    primaryArmor: [{ name: '', rating: '' }],
    primaryRangedWeap: [
      {
        name: '',
        dmg: '',
        acc: '',
        ap: '',
        mode: '',
        rc: '',
        ammo: '',
      },
    ],
    primaryMeleeWeap: [{ name: '', reach: '', dmg: '', acc: '', ap: '' }],
  },
  // the condition array will be built out upon object instantiation
  conditionMonitor: {
    physicalDmg: {
      cols: 3,
      rows: 6,
      condition: Array(3 * 6).fill({ value: false }),
    },
    stunDmg: {
      cols: 3,
      rows: 4,
      condition: Array(3 * 4).fill({ value: false }),
    },
    overflow: '',
  },
  qualities: [{ quality: '', notes: '', type: '' }],
  contacts: [{ name: '', desc: '', loyalty: '', connect: '', favor: '' }],
  equipment: {
    rngWeap: [
      { name: '', dmg: '', acc: '', ap: '', mode: '', rc: '', ammo: '' },
    ],
    meleeWeap: [{ name: '', reach: '', dmg: '', acc: '', ap: '' }],
    armor: [{ name: '', rating: '', notes: '' }],
    deck: [
      {
        model: '',
        attack: '',
        sleaze: '',
        deviceRating: '',
        dataProc: '',
        firewall: '',
        programs: [''],
        condition: 0,
      },
    ],
    augmentations: [{ name: '', rating: '', notes: '', essence: '' }],
    vehicle: [
      {
        name: '',
        handling: '',
        accel: '',
        speed: '',
        pilot: '',
        body: '',
        armor: '',
        sensor: '',
        notes: '',
      },
    ],
    gear: [{ item: '', rating: '' }],
  },
  spells: [{ name: '', typeTarget: '', rng: '', dur: '', drain: '' }],
  adeptPowersAbilities: [{ name: '', rating: '', notes: '' }],
  backstory: [''],
  notes: [''],
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

export { charSR5 };
