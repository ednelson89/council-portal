<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <h3>{{ char.genBlock.charName }}</h3>
        <p>
          User:
          <span class="italics">{{char.charUser}}</span>
        </p>
        <b-button
          @click="$router.push({path: '/characters'})"
          class="cardButton"
          style="margin-top:10px;"
        >Back to Characters</b-button>
        <br />
        <b-button
          @click="$router.push({path: '/edit-user-character'})"
          class="cardButton"
          style="margin-top:10px;"
        >Edit Character</b-button>
      </b-col>
      <b-col cols="9">
        <b-card class="b-cards">
          <b-row>
            <b-col cols="3">
              <p>
                Race:
                <span class="italics">{{char.genBlock.charRace}}</span>
              </p>
              <p>
                Class:
                <span class="italics">{{char.genBlock.charClass}}</span>
              </p>
              <p>
                Class Level:
                <span class="italics">{{char.genBlock.charClassLvl}}</span>
              </p>
              <p>
                Background:
                <span class="italics">{{char.genBlock.charBackground}}</span>
              </p>
            </b-col>
            <b-col cols="3">
              <p>
                Character Level:
                <span class="italics">{{char.genBlock.charLvl}}</span>
              </p>
              <p>
                Subclass:
                <span class="italics">{{char.genBlock.charSub}}</span>
              </p>
              <p>
                Experience:
                <span class="italics">{{char.genBlock.charXP}}</span>
              </p>
              <p>
                Alignment:
                <span class="italics">{{char.genBlock.charAlign}}</span>
              </p>
            </b-col>
            <b-col cols class="skillCols">
              <img
                class="charImg"
                style="margin: 25px 0px;"
                :src="char.portraitSrc"
                :alt="'Image of ' + char.genBlock.charName"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-tabs no-key-nav content-class="mt-3">
      <b-tab title="Core Stats" active>
        <!-- Combat Info Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols="3" class="skillCols">
                  <p class="sectionLabel">Hit Points</p>
                  <p class="score">
                    <span class="skillLabel">Current:</span>
                    {{char.combatStats.hitPoints.currHP}}
                  </p>
                  <p class="score">
                    <span class="skillLabel">Max:</span>
                    {{char.combatStats.hitPoints.maxHP}}
                  </p>
                  <p class="score">
                    <span class="skillLabel">Temporary:</span>
                    {{char.combatStats.hitPoints.tempHP}}
                  </p>
                  <p class="score">
                    <span class="skillLabel">Hit Dice:</span>
                    {{char.combatStats.hitPoints.hitDice}}
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Armor Class:</p>
                  <p class="score">{{char.combatStats.armorClass}}</p>
                  <p class="skillLabel">Initiative:</p>
                  <p class="score">{{char.combatStats.initiative}}</p>
                  <p class="skillLabel">Speed:</p>
                  <p class="score">{{char.combatStats.speed}}</p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Proficiency Bonus:</p>
                  <p class="score">{{char.combatStats.proficiencyBonus}}</p>
                  <p class="skillLabel">Inspiration:</p>
                  <p class="score">{{char.combatStats.inspiration ? "Yes" : "No"}}</p>
                  <p class="skillLabel">Death Saves:</p>
                  <p class="score">Succeed: {{ char.combatStats.deathSaves.success }}</p>
                  <p class="score">Failed: {{ char.combatStats.deathSaves.fails }}</p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="sectionLabel">Passive Skills</p>
                  <p class="skillLabel">Passive Perception:</p>
                  <p class="score">{{char.passiveScores.passPercep}}</p>
                  <p class="skillLabel">Passive Insight:</p>
                  <p class="score">{{char.passiveScores.passInsight}}</p>
                  <p class="skillLabel">Passive Investigation:</p>
                  <p class="score">{{char.passiveScores.passInvest}}</p>
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
                  <p class="skillLabel">{{stat.statName}}</p>
                  <p class="score">{{stat.stat}}</p>
                  <p class="skillLabel">Mod:</p>
                  <p class="score">{{stat.mod}}</p>
                  <p class="skillLabel">Save:</p>
                  <p class="score">
                    <v-icon v-if="stat.prof">mdi-octagram</v-icon>
                    {{stat.save}}
                  </p>
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
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Land:</p>
                  <p>{{char.movement.land}}</p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Swim:</p>
                  <p>{{char.movement.swim}}</p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Climb:</p>
                  <p>{{char.movement.climb}}</p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">Fly:</p>
                  <p>{{char.movement.fly}}</p>
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
                  <b-table striped hover :items="char.attacksCantrips"></b-table>
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
      <b-tab :title="'Equipment & Currency'">
        <!-- Equipment  -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Equipment:</h4>
                  <b-table striped hover :items="char.equipment" :fields="equipmentTableFields"></b-table>
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
      <b-tab :title="'Feats & Features'">
        <!-- Features -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Features:</h4>
                  <div v-for="(feature, index) in char.features" :key="index">
                    <p v-if="feature">{{feature}}</p>
                    <br v-else />
                  </div>
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
                  <div v-for="(feat, index) in char.feats" :key="index">
                    <p v-if="feat">{{feat}}</p>
                    <br v-else />
                  </div>
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
                  <div v-for="(para, index) in char.backstory" :key="index">
                    <br v-if="!para" />
                    <p v-else-if="para.includes('img-')">
                      <img :src="para.substring(4)" style="width: 50% " />
                    </p>
                    <a
                      v-else-if="para.includes('link-')"
                      :href="para.substring(5)"
                      style="width: 50% "
                      target="_blank"
                    >{{para.substring(5)}}</a>
                    <p v-else>{{para}}</p>
                  </div>
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
                  <div v-for="(para, index) in char.notes" :key="index">
                    <br v-if="!para" />
                    <p v-else-if="para.includes('img-')">
                      <img :src="para.substring(4)" style="width: 50% " />
                    </p>
                    <a
                      v-else-if="para.includes('link-')"
                      :href="para.substring(5)"
                      style="width: 50% "
                      target="_blank"
                    >{{para.substring(5)}}</a>
                    <p v-else>{{para}}</p>
                  </div>
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
                  <h4 style="font-weight:bold;">Spell Book:</h4>
                  <b-tabs no-key-nav content-class="mt-3">
                    <b-tab title="Cantrips" active>
                      <p class="sectionLabel">Cantrips:</p>
                      <b-table
                        striped
                        hover
                        :fields="spellTableFields"
                        :items="char.spells.cantrips"
                      >
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 1">
                      <p class="sectionLabel">Level 1:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl1">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 2">
                      <p class="sectionLabel">Level 2:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl2">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 3">
                      <p class="sectionLabel">Level 3:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl3">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 4">
                      <p class="sectionLabel">Level 4:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl4">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 5">
                      <p class="sectionLabel">Level 5:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl5">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 6">
                      <p class="sectionLabel">Level 6:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl6">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 7">
                      <p class="sectionLabel">Level 7:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl7">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 8">
                      <p class="sectionLabel">Level 8:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl8">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 9">
                      <p class="sectionLabel">Level 9:</p>
                      <b-table striped hover :fields="spellTableFields" :items="char.spells.lvl9">
                        <template v-slot:cell(spellDescription)="data">
                          <div v-for="(para, index) in data.value" :key="index">
                            <br v-if="!para" />
                            <p v-else-if="!para.includes('http')">{{para}}</p>
                            <p v-else-if="para.includes('http')">
                              <a :href="para" style="width: 50% " target="_blank">{{para}}</a>
                            </p>
                          </div>
                        </template>
                      </b-table>
                    </b-tab>
                  </b-tabs>
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
      spellTableFields: [
        { key: "spellName", label: "Spell Name", sortable: true },
        { key: "spellDescription", label: "Spell Description" }
      ],
      equipmentTableFields: [
        { key: "itemName", label: "Item Name", sortable: true },
        { key: "qty", label: "Quantity" },
        { key: "weight", label: "Weight" },
        { key: "details", label: "Details" }
      ]
    };
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    }
  },
  mounted() {
    var count = [
      "cantrips",
      "lvl1",
      "lvl2",
      "lvl3",
      "lvl4",
      "lvl5",
      "lvl6",
      "lvl7",
      "lvl8",
      "lvl9"
    ];
    count.forEach(element => {
      this.char.spells[element].forEach(spell => {
        if (!Array.isArray(spell.spellDescription)) {
          spell.spellDescription = spell.spellDescription.split("\n");
        }
      });
    });
  }
};
</script>

<style scoped>
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
}
.charImg {
  width: 350px;
  border-radius: 8px;
  border: 2px ridge #ddd;
  border-radius: 4px;
  padding: 5px;
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