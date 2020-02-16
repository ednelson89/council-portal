<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <input v-model="tempChar.genBlock.charName " class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{tempChar.charUser}}</span>
        </p>
        <hr />
        <p>Editing is done in real time. There is no need to save.</p>
        <hr />
        <b-button
          @click="addNewChar"
          class="cardButton"
          style="margin-top:10px;"
          :disabled="loading"
        >
          {{ !loading ? "Save New Character" : "Loading..." }}
          <b-spinner label="Loading..." v-if="loading"></b-spinner>
        </b-button>
      </b-col>
      <b-col cols="9">
        <b-card class="b-cards">
          <b-row>
            <b-col cols="3">
              <label>
                Race:
                <input class="form-control" v-model="tempChar.genBlock.charRace" />
              </label>
              <label>
                Class:
                <input class="form-control" v-model="tempChar.genBlock.charClass" />
              </label>
              <label>
                Class Level:
                <input class="form-control" v-model="tempChar.genBlock.charClassLvl" />
              </label>
              <label>
                Background:
                <input class="form-control" v-model="tempChar.genBlock.charBackground" />
              </label>
            </b-col>
            <b-col cols="3">
              <label>
                Character Level:
                <input class="form-control" v-model="tempChar.genBlock.charLvl" />
              </label>
              <label>
                Subclass:
                <input class="form-control" v-model="tempChar.genBlock.charSub" />
              </label>
              <label>
                Experience:
                <input class="form-control" v-model="tempChar.genBlock.charXP" />
              </label>
              <label>
                Alignment:
                <input class="form-control" v-model="tempChar.genBlock.charAlign" />
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
                :src="tempChar.portraitSrc"
                :alt="'Image of ' + tempChar.genBlock.charName"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6"></b-col>
            <b-col>
              <label>
                Image Source URL:
                <input v-model="tempChar.portraitSrc" class="form-control" />
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
                        v-model="tempChar.combatStats.hitPoints.currHP"
                      />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Max:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.hitPoints.maxHP"
                      />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Temporary:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.hitPoints.tempHP"
                      />
                    </label>
                  </p>
                  <p class="score">
                    <label>
                      Hit Dice:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.hitPoints.hitDice"
                      />
                    </label>
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">
                    <label>
                      Armor Class:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.armorClass"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Initiative:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.initiative"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Speed:
                      <input class="form-control" v-model="tempChar.combatStats.speed" />
                    </label>
                  </p>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <p class="skillLabel">
                    <label>
                      Proficiency Bonus:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.proficiencyBonus"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Inspiration:
                      <input
                        class="form-control"
                        type="checkbox"
                        v-model="tempChar.combatStats.inspiration"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Speed:
                      <input class="form-control" v-model="tempChar.combatStats.speed" />
                    </label>
                  </p>
                  <p class="skillLabel">Death Saves:</p>
                  <p class="skillLabel">
                    <label>
                      Succeed:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.deathSaves.success"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Failed:
                      <input
                        class="form-control"
                        v-model="tempChar.combatStats.deathSaves.fails"
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
                        v-model="tempChar.passiveScores.passPercep"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Passive Insight:
                      <input
                        class="form-control"
                        v-model="tempChar.passiveScores.passInsight"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Passive Investigation:
                      <input
                        class="form-control"
                        v-model="tempChar.passiveScores.passInvest"
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
                  v-for="(stat, index) in tempChar.statsBlock"
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
                <b-col cols="3" class="skillCols">
                  <label>
                    Land:
                    <input class="form-control" v-model="tempChar.movement.land" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <label>
                    Swim:
                    <input class="form-control" v-model="tempChar.movement.swim" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <label>
                    Climb:
                    <input class="form-control" v-model="tempChar.movement.climb" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <label>
                    Fly:
                    <input class="form-control" v-model="tempChar.movement.fly" />
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
                  <b-table
                    striped
                    hover
                    :fields="attacksTableFields"
                    :items="tempChar.attacksCantrips"
                  >
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
                    v-for="(skill, index) in this.tempChar.skillsList"
                    :key="index"
                    class="skillCols"
                  >
                    <p class="sectionLabel">
                      <label>
                        {{skill.skName}}:
                        <input class="form-control" v-model="skill.mod" />
                      </label>
                    </p>
                    <p class="sectionLabel">
                      <label>
                        Skill Stat:
                        <input class="form-control" v-model="skill.skill" />
                      </label>
                    </p>
                    <p class="sectionLabel">
                      <label>
                        Proficient:
                        <input
                          class="form-control"
                          type="checkbox"
                          v-model="skill.proficient"
                        />
                      </label>
                    </p>
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
                  <b-form-textarea
                    id="charPoficieniesList"
                    v-model="tempProf"
                    @change="saveProfs()"
                    placeholder="..."
                    rows="3"
                    max-rows="10"
                  ></b-form-textarea>
                </b-col>
                <b-col cols="6">
                  <p class="sectionLabel">Languages</p>
                  <b-form-textarea
                    id="charLanguageList"
                    v-model="tempLang"
                    @change="saveLangs()"
                    placeholder="..."
                    rows="3"
                    max-rows="10"
                  ></b-form-textarea>
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
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="3">
                  <label>
                    Item Name:
                    <input class="form-control" v-model="tempEquipment.itemName" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Quantity:
                    <input class="form-control" v-model="tempEquipment.qty" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Weight:
                    <input class="form-control" v-model="tempEquipment.weight" />
                  </label>
                </b-col>

                <b-col cols="2">
                  <label>
                    Details:
                    <input class="form-control" v-model="tempEquipment.deatils" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button @click="addItemsToRecord">Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table striped hover :fields="equipmentTableFields" :items="tempChar.equipment">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromItems(row.index)">Delete Item</b-button>
                    </template>
                  </b-table>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Money:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">
                  <label>
                    Copper:
                    <input
                      type="text"
                      v-model="tempChar.money[0].copper"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Silver:
                    <input
                      type="text"
                      v-model="tempChar.money[0].silver"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Gold:
                    <input type="text" v-model="tempChar.money[0].gold" class="form-control" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Electrum:
                    <input
                      type="text"
                      v-model="tempChar.money[0].electrum"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Platinum:
                    <input
                      type="text"
                      v-model="tempChar.money[0].platinum"
                      class="form-control"
                    />
                  </label>
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
                  <b-form-textarea
                    id="charFeaturesList"
                    v-model="tempFeatures"
                    @change="saveFeatures()"
                    placeholder="..."
                    rows="5"
                    max-rows="20"
                  ></b-form-textarea>
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
                  <b-form-textarea
                    id="charFeatsList"
                    v-model="tempFeats"
                    @change="saveFeats()"
                    placeholder="..."
                    rows="5"
                    max-rows="20"
                  ></b-form-textarea>
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
                  <b-form-textarea
                    id="charBackstoryList"
                    v-model="tempBackstory"
                    @change="saveBackstory"
                    placeholder="..."
                    rows="5"
                    max-rows="20"
                  ></b-form-textarea>
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
                  <b-form-textarea
                    id="charNotesList"
                    v-model="tempNotes"
                    @change="saveNotes"
                    placeholder="..."
                    rows="5"
                    max-rows="20"
                  ></b-form-textarea>
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
                  <p class="skillLabel">
                    <label>
                      Spell Ability:
                      <input
                        type="text"
                        v-model="tempChar.spellMods.spellAbility"
                        class="form-control"
                      />
                    </label>
                  </p>
                </b-col>
                <b-col cols="4" style="border-right:1px solid #000;">
                  <p class="skillLabel">
                    <label>
                      Spell Save DC:
                      <input
                        type="text"
                        v-model="tempChar.spellMods.spellSave"
                        class="form-control"
                      />
                    </label>
                  </p>
                </b-col>
                <b-col cols="4">
                  <p class="skillLabel">
                    <label>
                      Spell Attack Bonus:
                      <input
                        type="text"
                        v-model="tempChar.spellMods.spellAttack"
                        class="form-control"
                      />
                    </label>
                  </p>
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
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  <label>
                    Spell Name:
                    <input class="form-control" v-model="tempSpell.spellName" />
                  </label>
                </b-col>
                <b-col cols="6">
                  <label>
                    Spell Level:
                    <select class="form-control" v-model="tempSpell.lvl">
                      <option value="cantrips">Cantrips</option>
                      <option value="lvl1">Level 1</option>
                      <option value="lvl2">Level 2</option>
                      <option value="lvl3">Level 3</option>
                      <option value="lvl4">Level 4</option>
                      <option value="lvl5">Level 5</option>
                      <option value="lvl6">Level 6</option>
                      <option value="lvl7">Level 7</option>
                      <option value="lvl8">Level 8</option>
                      <option value="lvl9">Level 9</option>
                    </select>
                  </label>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label>Spell Description:</label>
                  <b-form-textarea
                    v-model="tempSpell.spellDescription"
                    placeholder="..."
                    rows="3"
                    max-rows="10"
                  ></b-form-textarea>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="2">
                  <br />
                  <b-button @click="addSpellToRecord">Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="sectionLabel">Cantrips:</p>
                  <b-table
                    striped
                    hover
                    :items="tempChar.spells.cantrips"
                    :fields="spellTableFields"
                  >
                    <template v-slot:cell(delete)="row">
                      <b-button
                        size="sm"
                        @click="deleteFromSpells(row.index, 'cantrips')"
                      >Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 1:</p>
                  <b-table striped hover :items="tempChar.spells.lvl1" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl1')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 2:</p>
                  <b-table striped hover :items="tempChar.spells.lvl2" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl2')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 3:</p>
                  <b-table striped hover :items="tempChar.spells.lvl3" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl3')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 4:</p>
                  <b-table striped hover :items="tempChar.spells.lvl4" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl4')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 5:</p>
                  <b-table striped hover :items="tempChar.spells.lvl5" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl5')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 6:</p>
                  <b-table striped hover :items="tempChar.spells.lvl6" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl6')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 7:</p>
                  <b-table striped hover :items="tempChar.spells.lvl7" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl7')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 8:</p>
                  <b-table striped hover :items="tempChar.spells.lvl8" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl8')">Delete Item</b-button>
                    </template>
                  </b-table>
                  <p class="sectionLabel">Level 9:</p>
                  <b-table striped hover :items="tempChar.spells.lvl9" :fields="spellTableFields">
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromSpells(row.index, 'lvl9')">Delete Item</b-button>
                    </template>
                  </b-table>
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
import { charDnD5e } from "@/components/modules/CharacterObjects/characterD&D.js";
import { postUserCharUpdate } from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      tempChar: charDnD5e(),
      skillsOpen: false,
      // Text Areas
      tempProf: "",
      tempLang: "",
      tempFeatures: "",
      tempFeats: "",
      tempBackstory: "",
      tempNotes: "",
      // Attack Table
      attack: {
        attackName: "",
        hitMod: "",
        dmg: "",
        notes: ""
      },
      attacksTableFields: [
        { key: "attackName", label: "Attack Name", sortable: true },
        { key: "hitMod", label: "Hit Modifier" },
        { key: "dmg", label: "Damage" },
        { key: "notes", label: "Notes" },
        { key: "delete", label: "Delete" }
      ],
      // Equipment Table
      tempEquipment: { itemName: "", qty: 0, weight: 0, details: "" },
      equipmentTableFields: [
        { key: "itemName", label: "Item Name", sortable: true },
        { key: "qty", label: "Quantity" },
        { key: "weight", label: "Weight" },
        { key: "details", label: "Details" },
        { key: "delete", label: "Delete" }
      ],
      // Spell Tables
      tempSpell: { spellName: "", spellDescription: "", lvl: "" },
      spellTableFields: [
        { key: "spellName", label: "Spell Name", sortable: true },
        { key: "spellDescription", label: "Spell Description" },
        { key: "delete", label: "Delete" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      appRoute: "getAppRoute",
      activeUser: "getActiveUser"
    })
  },
  methods: {
    // The Following all parse the individual textAreas
    saveProfs() {
      this.tempChar.proficiencies = [];
      var stringArray = document
        .getElementById("charPoficieniesList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.proficiencies.push(element);
      });
    },
    saveLangs() {
      this.tempChar.languages = [];
      var stringArray = document
        .getElementById("charLanguageList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.languages.push(element);
      });
    },
    saveFeatures() {
      this.tempChar.features = [];
      var stringArray = document
        .getElementById("charFeaturesList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.features.push(element);
      });
    },
    saveFeats() {
      this.tempChar.feats = [];
      var stringArray = document
        .getElementById("charFeatsList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.feats.push(element);
      });
    },
    saveBackstory() {
      this.tempChar.backstory = [];
      var stringArray = document
        .getElementById("charBackstoryList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.backstory.push(element);
      });
    },
    saveNotes() {
      this.tempChar.notes = [];
      var stringArray = document
        .getElementById("charNotesList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.tempChar.notes.push(element);
      });
    },
    addNewChar() {
      this.loading = true;
      this.tempChar.charUser = this.$store.getters.getCurrUserName;
      var localStore = JSON.parse(localStorage.getItem("UserData"));

      this.$store.commit("setNewUserCharacter", this.tempChar);
      postUserCharUpdate(localStore, 1, this.tempChar).then(data => {
        this.activeUser.userChars = data;
        this.loading = false;
        this.$router.push({ path: "/characters" });
      });
    },
    // The following are the methods for interacting with b-tables
    addAttacksToRecord() {
      this.tempChar.attacksCantrips.push(this.attack);
      this.attack = {
        attackName: "",
        hitMod: "",
        dmg: "",
        notes: ""
      };
    },
    deleteFromAttacks(index) {
      this.tempChar.attacksCantrips.splice(index, 1);
    },
    addItemsToRecord() {
      this.tempChar.equipment.push(this.tempEquipment);
      this.tempEquipment = { itemName: "", qty: 0, weight: 0, details: "" };
    },
    deleteFromItems(index) {
      this.tempChar.equipment.splice(index, 1);
    },
    addSpellToRecord() {
      var spellLevel = this.tempSpell.lvl;
      this.tempChar.spells[spellLevel].push({
        spellName: this.tempSpell.spellName,
        spellDescription: this.tempSpell.spellDescription
      });
      this.tempSpell = { spellName: "", spellDescription: "", lvl: "" };
    },
    deleteFromSpells(index, level) {
      var spellLevel = level;
      this.tempChar.spells[spellLevel].splice(index, 1);
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