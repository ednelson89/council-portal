<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <input v-model="char.genBlock.charName" class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{ char.charUser }}</span>
        </p>

        <hr />
        <b-button
          @click="saveCharEdits"
          class="cardButton"
          style="margin-top:10px;"
          :disabled="loading"
        >
          {{ !loading ? "Save Character Edits" : "Loading..." }}
          <b-spinner label="Loading..." v-if="loading"></b-spinner>
        </b-button>
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
                <input
                  class="form-control"
                  v-model="char.genBlock.charClassLvl"
                />
              </label>
              <label>
                Background:
                <input
                  class="form-control"
                  v-model="char.genBlock.charBackground"
                />
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
            <b-col cols class="skillCols">
              <img
                class="charImg"
                style="margin: 25px 0px;"
                :src="char.portraitSrc"
                :alt="'Image of ' + char.genBlock.charName"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6"></b-col>
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
                      <input
                        class="form-control"
                        v-model="char.combatStats.hitPoints.maxHP"
                      />
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
                      <input
                        class="form-control"
                        v-model="char.combatStats.armorClass"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Initiative:
                      <input
                        class="form-control"
                        v-model="char.combatStats.initiative"
                      />
                    </label>
                  </p>
                  <p class="skillLabel">
                    <label>
                      Speed:
                      <input
                        class="form-control"
                        v-model="char.combatStats.speed"
                      />
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
                    {{ stat.statName }}
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
                    <input class="form-control" v-model="char.movement.land" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <label>
                    Swim:
                    <input class="form-control" v-model="char.movement.swim" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
                  <label>
                    Climb:
                    <input class="form-control" v-model="char.movement.climb" />
                  </label>
                </b-col>
                <b-col cols="3" class="skillCols">
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
                  <b-table
                    striped
                    hover
                    :fields="attacksTableFields"
                    :items="char.attacksCantrips"
                  >
                    <template v-slot:cell(attackName)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.attacksCantrips[row.index].attackName"
                      />
                    </template>
                    <template v-slot:cell(hitMod)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.attacksCantrips[row.index].hitMod"
                      />
                    </template>
                    <template v-slot:cell(dmg)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.attacksCantrips[row.index].dmg"
                      />
                    </template>
                    <template v-slot:cell(notes)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.attacksCantrips[row.index].notes"
                      />
                    </template>
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromAttacks(row.index)"
                        >Delete Attack</b-button
                      >
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
                    <v-icon v-if="!skillsOpen" role="tab"
                      >mdi-chevron-double-right</v-icon
                    >
                    <v-icon v-else-if="skillsOpen"
                      >mdi-chevron-double-down</v-icon
                    >
                    <span
                      class="italics"
                      style="font-weight:normal;font-size: 12px;"
                      v-if="!skillsOpen"
                      >(click to expand)</span
                    >
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
                    <p class="sectionLabel">
                      <label>
                        {{ skill.skName }}:
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
                    <input
                      class="form-control"
                      v-model="tempEquipment.itemName"
                    />
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
                    <input
                      class="form-control"
                      v-model="tempEquipment.weight"
                    />
                  </label>
                </b-col>

                <b-col cols="2">
                  <label>
                    Details:
                    <input
                      class="form-control"
                      v-model="tempEquipment.details"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button @click="addItemsToRecord">Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    striped
                    hover
                    :fields="equipmentTableFields"
                    :items="char.equipment"
                  >
                    <template v-slot:cell(itemName)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].itemName"
                      />
                    </template>
                    <template v-slot:cell(qty)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].qty"
                      />
                    </template>
                    <template v-slot:cell(weight)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].weight"
                      />
                    </template>
                    <template v-slot:cell(details)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].details"
                      />
                    </template>
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="deleteFromItems(row.index)"
                        >Delete Item</b-button
                      >
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
                      v-model="char.money[0].copper"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Silver:
                    <input
                      type="text"
                      v-model="char.money[0].silver"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Gold:
                    <input
                      type="text"
                      v-model="char.money[0].gold"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Electrum:
                    <input
                      type="text"
                      v-model="char.money[0].electrum"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Platinum:
                    <input
                      type="text"
                      v-model="char.money[0].platinum"
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
                    rows="15"
                    max-rows="15"
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
                    rows="15"
                    max-rows="15"
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
                    rows="15"
                    max-rows="15"
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
                    rows="15"
                    max-rows="15"
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
                        v-model="char.spellMods.spellAbility"
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
                        v-model="char.spellMods.spellSave"
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
                        v-model="char.spellMods.spellAttack"
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
                  <p>
                    Here is a list of your spells; please note that if you
                    delete the last of your spells, it will be replaced by a
                    blank spell so that the listing system doesnt break. This
                    will be fixed in a later patch.
                  </p>
                  <p>
                    To add a link to the spell description, add the html link on
                    it's own line.
                  </p>
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
                  <h4>Spell Book:</h4>
                  <b-tabs no-key-nav content-class="mt-3">
                    <b-tab title="Cantrips" active>
                      <p class="sectionLabel">Cantrips:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.cantrips"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.cantrips[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.cantrips[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'cantrips')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 1">
                      <p class="sectionLabel">Level 1:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl1"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl1[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl1[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl1')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 2">
                      <p class="sectionLabel">Level 2:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl2"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl2[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl2[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl2')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 3">
                      <p class="sectionLabel">Level 3:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl3"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl3[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl3[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl3')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 4">
                      <p class="sectionLabel">Level 4:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl4"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl4[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl4[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl4')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 5">
                      <p class="sectionLabel">Level 5:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl5"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl5[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl5[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl5')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 6">
                      <p class="sectionLabel">Level 6:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl6"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl6[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl6[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl6')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 7">
                      <p class="sectionLabel">Level 7:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl7"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl7[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl7[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl7')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 8">
                      <p class="sectionLabel">Level 8:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl8"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl8[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl8[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl8')"
                            >Delete Item</b-button
                          >
                        </template>
                      </b-table>
                    </b-tab>
                    <b-tab title="Level 9">
                      <p class="sectionLabel">Level 9:</p>
                      <b-table
                        striped
                        hover
                        :items="char.spells.lvl9"
                        :fields="spellTableFields"
                      >
                        <template v-slot:cell(spellName)="row">
                          <input
                            type="text"
                            class="table-input"
                            v-model="char.spells.lvl9[row.index].spellName"
                          />
                        </template>
                        <template v-slot:cell(spellDescription)="row">
                          <b-form-textarea
                            v-model="
                              char.spells.lvl9[row.index].spellDescription
                            "
                            placeholder="..."
                            rows="3"
                            max-rows="10"
                          ></b-form-textarea>
                        </template>
                        <template v-slot:cell(delete)="row">
                          <b-button
                            size="sm"
                            @click="deleteFromSpells(row.index, 'lvl9')"
                            >Delete Item</b-button
                          >
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
import { postUserCharUpdate } from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
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
        notes: "",
      },
      attacksTableFields: [
        { key: "attackName", label: "Attack Name", sortable: false },
        { key: "hitMod", label: "Hit Modifier" },
        { key: "dmg", label: "Damage" },
        { key: "notes", label: "Notes" },
        { key: "delete", label: "Delete" },
      ],
      // Equipment Table
      tempEquipment: { itemName: "", qty: 0, weight: 0, details: "" },
      equipmentTableFields: [
        { key: "itemName", label: "Item Name", sortable: false },
        { key: "qty", label: "Quantity" },
        { key: "weight", label: "Weight" },
        { key: "details", label: "Details" },
        { key: "delete", label: "Delete" },
      ],
      // Spell Tables
      tempSpell: { spellName: "", spellDescription: "", lvl: "" },
      spellTableFields: [
        { key: "spellName", label: "Spell Name", sortable: false },
        { key: "spellDescription", label: "Spell Description" },
        { key: "delete", label: "Delete" },
      ],
    };
  },
  methods: {
    // The Following all parse the individual textAreas
    saveProfs() {
      this.char.proficiencies = [];
      var stringArray = document
        .getElementById("charPoficieniesList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.proficiencies.push(element);
      });
    },
    saveLangs() {
      this.char.languages = [];
      var stringArray = document
        .getElementById("charLanguageList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.languages.push(element);
      });
    },
    saveFeatures() {
      this.char.features = [];
      var stringArray = document
        .getElementById("charFeaturesList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.features.push(element);
      });
    },
    saveFeats() {
      this.char.feats = [];
      var stringArray = document
        .getElementById("charFeatsList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.feats.push(element);
      });
    },
    saveBackstory() {
      this.char.backstory = [];
      var stringArray = document
        .getElementById("charBackstoryList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.backstory.push(element);
      });
    },
    saveNotes() {
      this.char.notes = [];
      var stringArray = document
        .getElementById("charNotesList")
        .value.split("\n");
      stringArray.forEach((element) => {
        this.char.notes.push(element);
      });
    },
    // Navigation Method
    saveCharEdits() {
      this.loading = true;
      var localStore = JSON.parse(localStorage.getItem("UserData"));
      postUserCharUpdate(localStore, 3, this.char).then((data) => {
        this.activeUser.userChars = data;
        this.loading = false;
        this.$router.push({ path: "/view-user-character" });
      });
    },
    // The following are the methods for interacting with b-tables
    addAttacksToRecord() {
      this.char.attacksCantrips.push(this.attack);
      this.attack = {
        attackName: "",
        hitMod: "",
        dmg: "",
        notes: "",
      };
    },
    deleteFromAttacks(index) {
      this.char.attacksCantrips.splice(index, 1);
      if (this.char.attacksCantrips.length === 0) {
        this.char.attacksCantrips.push({
          attackName: "",
          hitMod: "",
          dmg: "",
          notes: "",
        });
      }
    },
    addItemsToRecord() {
      this.char.equipment.push(this.tempEquipment);
      this.tempEquipment = { itemName: "", qty: 0, weight: 0, details: "" };
    },
    deleteFromItems(index) {
      this.char.equipment.splice(index, 1);
      if (this.char.equipment.length === 0) {
        this.char.equipment.push({
          itemName: "",
          qty: 0,
          weight: 0,
          details: "",
        });
      }
    },
    addSpellToRecord() {
      var spellLevel = this.tempSpell.lvl;
      this.char.spells[spellLevel].push({
        spellName: this.tempSpell.spellName,
        spellDescription: this.tempSpell.spellDescription,
      });
      this.tempSpell = { spellName: "", spellDescription: "", lvl: "" };
    },
    deleteFromSpells(index, level) {
      var spellLevel = level;
      this.char.spells[spellLevel].splice(index, 1);
      if (this.char.spells[spellLevel].length === 0) {
        this.char.spells[spellLevel].push({
          spellName: "",
          spellDescription: "",
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser",
      char: "getActiveChar",
    }),
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
      "lvl9",
    ];
    count.forEach((element) => {
      this.char.spells[element].forEach((spell) => {
        let temporarySpell = "";
        spell.spellDescription.forEach((line, index, array) => {
          if (index < array.length - 1) {
            temporarySpell += line + "\n";
          } else if (index === array.length - 1) {
            temporarySpell += line;
          }
        });
        spell.spellDescription = temporarySpell;
      });
    });

    // These ensure that the format of the textAreas remains correct
    this.char.proficiencies.forEach((prof) => {
      this.tempProf += prof + "\n";
    });
    this.char.languages.forEach((lang) => {
      this.tempLang += lang + "\n";
    });
    this.char.features.forEach((feature) => {
      this.tempFeatures += feature + "\n";
    });
    this.char.feats.forEach((feat) => {
      this.tempFeats += feat + "\n";
    });
    this.char.backstory.forEach((story) => {
      this.tempBackstory += story + "\n";
    });
    this.char.notes.forEach((note) => {
      this.tempNotes += note + "\n";
    });
  },
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
.table-input {
  width: 100%;
  margin: 2px;
  border: 1px solid rgb(76, 73, 73);
  border-radius: 4px;
}
</style>
