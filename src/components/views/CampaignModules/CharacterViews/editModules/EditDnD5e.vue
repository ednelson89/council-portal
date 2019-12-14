<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <input v-model=" char.genBlock.charName " class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{char.charUser}}</span>
        </p>
        <b-button
          @click="saveCharEdits"
          class="cardButton"
          style="margin-top:10px;"
        >Back to Character</b-button>
      </b-col>
      <b-col cols="9">
        <b-card class="b-cards">
          <b-row>
            <b-col cols="3">
              <label>
                Race:
                <input class="form-control" v-model="char.genBlock.charRace" />
              </label>
              <label>
                Class:
                <input class="form-control" v-model="char.genBlock.charClass" />
              </label>
              <label>
                Class Level:
                <input class="form-control" v-model="char.genBlock.charClassLvl" />
              </label>
              <label>
                Background:
                <input class="form-control" v-model="char.genBlock.charBackground" />
              </label>
            </b-col>
            <b-col cols="3">
              <label>
                Character Level:
                <input class="form-control" v-model="char.genBlock.charLvl" />
              </label>
              <label>
                Subclass:
                <input class="form-control" v-model="char.genBlock.charSub" />
              </label>
              <label>
                Experience:
                <input class="form-control" v-model="char.genBlock.charXP" />
              </label>
              <label>
                Alignment:
                <input class="form-control" v-model="char.genBlock.charAlign" />
              </label>
            </b-col>
            <b-col
              cols
              class="skillCols"
              :style="{'background-image': 'url(' + require('@/assets/statCard.jpg') + ')'}"
            >
              <img
                class="charImg"
                style="margin: 25px 0px;"
                :src="char.portraitSrc"
                :alt="'Image of ' + char.genBlock.charName"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col col="6"></b-col>
            <b-col>
              <label>
                Image Source URL:
                <input v-model="char.portraitSrc" class="form-control" />
              </label>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-tabs content-class="mt-3">
      <b-tab title="Core Stats" active>
        <!-- Combat Info Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols="3" class="skillCols">
                  <p class="sectionLabel">Hit Points</p>
                  <p class="score">
                    <label>
                      Current:
                      <input
                        class="form-control"
                        v-model="char.combatStats.hitPoints.currHP"
                      />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Max:
                      <input class="form-control" v-model="char.combatStats.hitPoints.maxHP" />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Temporary:
                      <input
                        class="form-control"
                        v-model="char.combatStats.hitPoints.tempHP"
                      />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Hit Dice:
                      <input
                        class="form-control"
                        v-model="char.combatStats.hitPoints.hitDice"
                      />
                    </label>
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">
                    <label>
                      Armor Class:
                      <input class="form-control" v-model="char.combatStats.armorClass" />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Initiative:
                      <input class="form-control" v-model="char.combatStats.initiative" />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Speed:
                      <input class="form-control" v-model="char.combatStats.speed" />
                    </label>
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">
                    <label>
                      Proficiency Bonus:
                      <input
                        class="form-control"
                        v-model="char.combatStats.proficiencyBonus"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Inspiration:
                      <input
                        class="form-control"
                        type="checkbox"
                        v-model="char.combatStats.inspiration"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Speed:
                      <input class="form-control" v-model="char.combatStats.speed" />
                    </label>
                  </p>
                  <p class="skillLabel">Death Saves:</p>
                  <p class="skillLabel">
                    <label>
                      Succeed:
                      <input
                        class="form-control"
                        v-model="char.combatStats.deathSaves.success"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Failed:
                      <input
                        class="form-control"
                        v-model="char.combatStats.deathSaves.fails"
                      />
                    </label>
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="sectionLabel">Passive Skills</p>
                  <p class="skillLabel">
                    <label>
                      Passive Perception:
                      <input
                        class="form-control"
                        v-model="char.passiveScores.passPercep"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Passive Insight:
                      <input
                        class="form-control"
                        v-model="char.passiveScores.passInsight"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Passive Investigation:
                      <input
                        class="form-control"
                        v-model="char.passiveScores.passInvest"
                      />
                    </label>
                  </p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!-- Stat Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col
                  class="skillCols"
                  cols="2"
                  v-for="(stat, index) in char.statsBlock"
                  :key="index"
                >
                  <label>
                    {{stat.statName}}
                    <input class="form-control" v-model="stat.stat" />
                  </label>
                  <label>
                    Mod:
                    <input class="form-control" v-model="stat.mod" />
                  </label>
                  <label>
                    Save:
                    <input class="form-control" v-model="stat.save" />
                  </label>
                  <label>
                    Save Proficiency:
                    <input
                      class="form-control"
                      type="checkbox"
                      v-model="stat.prof"
                    />
                  </label>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!-- Move Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Movement Speeds:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col col="4" class="skillCols">
                  <label>
                    Land:
                    <input class="form-control" v-model="char.movement.land" />
                  </label>
                </b-col>
                <b-col col="4" class="skillCols">
                  <label>
                    Swim:
                    <input class="form-control" v-model="char.movement.swim" />
                  </label>
                </b-col>
                <b-col col="4" class="skillCols">
                  <label>
                    Climb:
                    <input class="form-control" v-model="char.movement.climb" />
                  </label>
                </b-col>
                <b-col col="4" class="skillCols">
                  <label>
                    Fly:
                    <input class="form-control" v-model="char.movement.fly" />
                  </label>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!-- Attacks -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Attacks and Cantrips:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="3">
                  <label>
                    Attack Name:
                    <input class="form-control" v-model="attack.attackName" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Hit Mod:
                    <input class="form-control" v-model="attack.hitMod" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Damage:
                    <input class="form-control" v-model="attack.dmg" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Notes:
                    <input class="form-control" v-model="attack.notes" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button @click="addAttacksToRecord">Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table striped hover :fields="attacksTableFields" :items="char.attacksCantrips">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromAttacks(row.index)">Delete Attack</b-button>
                    </template>
                  </b-table>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Skills & Proficiencies'">
        <!-- Skills Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4
                    style="font-weight: bold;"
                    v-b-toggle="'skillsCollapse'"
                    @click="skillsOpen = !skillsOpen"
                  >
                    Skills:
                    <v-icon v-if="!skillsOpen" role="tab">mdi-chevron-double-right</v-icon>
                    <v-icon v-else-if="skillsOpen">mdi-chevron-double-down</v-icon>
                    <span
                      class="italics"
                      style="font-weight:normal;font-size: 12px;"
                      v-if="!skillsOpen"
                    >(click to expand)</span>
                  </h4>
                </b-col>
              </b-row>
              <b-collapse id="skillsCollapse">
                <b-row>
                  <b-col
                    cols="2"
                    v-for="(skill, index) in char.skillsList"
                    :key="index"
                    class="skillCols"
                  >
                    <p class="sectionLabel">{{skill.skName}}</p>
                    <p class="score">{{skill.mod}}</p>
                    <p class="skillLabel">Skill Stat:</p>
                    <p class="score">{{skill.skill}}</p>
                    <p class="skillLabel">Proficient:</p>
                    <p class="score">{{skill.proficient ? "Yes" : "No"}}</p>
                  </b-col>
                </b-row>
              </b-collapse>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!--  Proficiencies and Lanuages  -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols="6" style="border-right:1px solid #000;">
                  <p class="sectionLabel">Proficiencies</p>
                  <p v-for="(prof, index) in char.proficiencies" :key="index">{{prof}}</p>
                </b-col>
                <b-col cols="6">
                  <p class="sectionLabel">Languages</p>
                  <p v-for="(lang, index) in char.languages" :key="index">{{lang}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
      </b-tab>
      <b-tab :title="'Features, Feats, & Equipment'">
        <!-- Features -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Features:</h4>
                  <p v-for="(feature, index) in char.features" :key="index">{{feature}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!--Feats-->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Feats:</h4>
                  <p v-for="(feat, index) in char.feats" :key="index">{{feat}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!-- Equipment  -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Equipment:</h4>
                  <b-table striped hover :items="char.equipment"></b-table>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Money:</h4>
                  <b-table striped hover :items="char.money"></b-table>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Biography & Notes'">
        <!-- Biography -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Character Backstory:</h4>
                  <p v-for="(story, index) in char.backstory" :key="index">{{story}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <!-- Additional Notes -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Additional Notes:</h4>
                  <p v-for="(note, index) in char.notes" :key="index">{{note}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Spells'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Spell Modifiers:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="4" style="border-right:1px solid #000;">
                  <p class="skillLabel">Spell Ability:</p>
                  <p class="score">{{char.spellMods.spellAbility}}</p>
                </b-col>
                <b-col cols="4" style="border-right:1px solid #000;">
                  <p class="skillLabel">Spell Save DC:</p>
                  <p class="score">{{char.spellMods.spellSave}}</p>
                </b-col>
                <b-col cols="4">
                  <p class="skillLabel">Spell Attack Bonus:</p>
                  <p class="score">{{char.spellMods.spellAttack}}</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <hr />
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Spells:</h4>
                  <p class="sectionLabel">Cantrips:</p>
                  <b-table striped hover :items="char.spells.cantrips"></b-table>
                  <p class="sectionLabel">Level 1:</p>
                  <b-table striped hover :items="char.spells.lvl1"></b-table>
                  <p class="sectionLabel">Level 2:</p>
                  <b-table striped hover :items="char.spells.lvl2"></b-table>
                  <p class="sectionLabel">Level 3:</p>
                  <b-table striped hover :items="char.spells.lvl3"></b-table>
                  <p class="sectionLabel">Level 4:</p>
                  <b-table striped hover :items="char.spells.lvl4"></b-table>
                  <p class="sectionLabel">Level 5:</p>
                  <b-table striped hover :items="char.spells.lvl5"></b-table>
                  <p class="sectionLabel">Level 6:</p>
                  <b-table striped hover :items="char.spells.lvl6"></b-table>
                  <p class="sectionLabel">Level 7:</p>
                  <b-table striped hover :items="char.spells.lvl7"></b-table>
                  <p class="sectionLabel">Level 8:</p>
                  <b-table striped hover :items="char.spells.lvl8"></b-table>
                  <p class="sectionLabel">Level 9:</p>
                  <b-table striped hover :items="char.spells.lvl9"></b-table>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsOpen: false,
      attack: {
        attackName: "",
        hitMod: "",
        dmg: "",
        notes: ""
      },
      attacksTableFields: [
        { key: "attackName", label: "Attack Name" },
        { key: "hitMod", label: "Hit Modifier" },
        { key: "dmg", label: "Damage" },
        { key: "notes", label: "Notes" },
        { key: "delete", label: "Delete" }
      ]
    };
  },
  methods: {
    saveCharEdits() {
      // TODO: Add remote update method
      this.$router.push({ path: "/view-character" });
    },
    addAttacksToRecord() {
      this.char.attacksCantrips.push(this.attack);
      this.attack = {
        attackName: "",
        hitMod: "",
        dmg: "",
        notes: ""
      };
    },
    deleteFromAttacks(index) {
      this.char.attacksCantrips.splice(index, 1);
    }
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    }
  }
};
</script>

<style scoped>
label {
  text-align: left;
  display: inline-block !important;
}
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
}
.charImg {
  width: 175px;
}
.sectionLabel {
  text-align: center !important;
  font-weight: bold;
  text-decoration: underline;
}
.skillLabel {
  text-align: center !important;
  font-weight: bold;
}
.skillCols {
  background-color: #fff;
  background-size: 100% 100%;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.score {
  text-align: center !important;
}
</style>