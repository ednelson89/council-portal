<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col xs="12" md="3">
        <label>
          Character Name:
          <p>{{ char.genBlock.charName }}</p>
        </label>
        <p>
          User:
          <span class="italics">{{ char.charUser }}</span>
        </p>
        <hr />
        <b-button
          @click="$router.push({ path: '/game-characters' })"
          class="cardButton"
          style="margin-top:10px;"
          >Back to Characters</b-button
        >
        <br />
        <b-button
          @click="$router.push({ path: '/edit-game-character' })"
          class="cardButton"
          style="margin-top:10px;"
          :disabled="char.charUser !== userName"
          >Edit Character</b-button
        >
      </b-col>
      <b-col xs="12" md="9">
        <b-card class="b-cards">
          <b-row>
            <b-col xs="12" md="3">
              <!-- general content -->
              <label>
                Age:
                <p>{{ char.genBlock.age }}</p>
              </label>
              <label>
                Needle:
                <p>{{ char.genBlock.needle }}</p>
              </label>
              <label>
                Thread:
                <p>{{ char.genBlock.thread }}</p>
              </label>
              <label>
                Concept:
                <p>{{ char.genBlock.concept }}</p>
              </label>
            </b-col>
            <b-col xs="12" md="3">
              <label>
                Chronicle:
                <p>{{ char.genBlock.chronicle }}</p>
              </label>
              <label>
                Seeming:
                <p>{{ char.genBlock.seeming }}</p>
              </label>
              <label>
                Kith:
                <p>{{ char.genBlock.kith }}</p>
              </label>
              <label>
                Court:
                <p>{{ char.genBlock.court }}</p>
              </label>
            </b-col>
            <b-col xs="12" md="4" class="skillCols">
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
      <b-col>
        <p style="font-style: italic; font-size: 14px">
          Attributes 5/4/3•Skills 11/7/4 (+3 Specialties) • Seeming: +1 to one
          favored Attribute; record Blessing, Curse, favored Regalia • Kith:
          Record Blessing, if applicable • 1 Touchstone • Minor frailty if Wyrd
          2 Contracts: Second favored Regalia, 4 Common (Regalia, Court, or
          Goblin; 2 must come from favored Regalia) + 2 Royal (Court or favored
          Regalia) • Merits 10 + Mantle 1 if courtier • Health = Stamina + Size
          Willpower = Resolve + Composure • Size = 5 • Defense = (Lower of
          Dexterity or Wits) + Athletics • Initiative Mod = Dexterity +
          Composure • Speed = Strength + Dexterity + 5 • Max Clarity = Wits +
          Composure Starting Wyrd = 1 • Starting Glamour = 10
        </p>
      </b-col>
    </b-row>
    <hr />
    <b-tabs no-key-nav content-class="mt-3">
      <b-tab :title="'Attributes & Skills'" active>
        <!-- Abilities -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <p class="sectionLabel">Attributes</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="skillCols" xs="12" md="4">
                  <label class="inline-label">Intelligence:</label>
                  <p>{{ char.attributes.int }}</p>
                  <br />
                  <label class="inline-label">Wits:</label>
                  <p>{{ char.attributes.wits }}</p>
                  <br />
                  <label class="inline-label">Resolve:</label>
                  <p>{{ char.attributes.resolve }}</p>
                  <br />
                </b-col>
                <b-col class="skillCols" xs="12" md="4">
                  <label class="inline-label">Strength:</label>
                  <p>{{ char.attributes.str }}</p>
                  <br />
                  <label class="inline-label">Dexterity:</label>
                  <p>{{ char.attributes.dex }}</p>
                  <br />
                  <label class="inline-label">Stamina:</label>
                  <p>{{ char.attributes.stam }}</p>
                  <br />
                </b-col>
                <b-col class="skillCols" xs="12" md="4">
                  <label class="inline-label">Presence:</label>
                  <p>{{ char.attributes.pres }}</p>
                  <br />
                  <label class="inline-label">Manipulation:</label>
                  <p>{{ char.attributes.manip }}</p>
                  <br />
                  <label class="inline-label">Composure:</label>
                  <p>{{ char.attributes.comp }}</p>
                  <br />
                </b-col>
              </b-row>
            </b-card>

            <b-card class="b-cards">
              <p class="sectionLabel">Skills</p>
              <b-row>
                <b-col class="skillCols" xs="12" md="4">
                  <p class="sectionLabel">Mental</p>
                  <div v-for="skill in char.skills.mental" :key="skill.name">
                    <label class="inline-label"
                      >{{
                        skill.name.charAt(0).toUpperCase() +
                          skill.name.slice(1)
                      }}:</label
                    >
                    <p>{{ skill.score }}</p>
                    <br />
                    <span>Specialized:</span>
                    <input
                      disabled
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <p>{{ skill.specText }}</p>
                    </b-row>
                  </div>
                </b-col>
                <b-col class="skillCols" xs="12" md="4">
                  <p class="sectionLabel">Physical</p>
                  <div v-for="skill in char.skills.physical" :key="skill.name">
                    <label class="inline-label"
                      >{{
                        skill.name.charAt(0).toUpperCase() +
                          skill.name.slice(1)
                      }}:</label
                    >
                    <p>{{ skill.score }}</p>
                    <br />
                    <span>Specialized:</span>
                    <input
                      disabled
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <p>{{ skill.specText }}</p>
                    </b-row>
                  </div>
                </b-col>
                <b-col class="skillCols" xs="12" md="4">
                  <p class="sectionLabel">Social</p>
                  <div v-for="skill in char.skills.social" :key="skill.name">
                    <label class="inline-label"
                      >{{
                        skill.name.charAt(0).toUpperCase() +
                          skill.name.slice(1)
                      }}:</label
                    >
                    <p>{{ skill.score }}</p>
                    <br />
                    <span>Specialized:</span>
                    <input
                      disabled
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <p>{{ skill.specText }}</p>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'General Traits & Merits'">
        <!-- Skills Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <p class="sectionLabel">General Traits</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col xs="12" md="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Health:</label>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.health.boxes"
                      :key="'healthBox' + index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select
                        v-model="box.status"
                        class="form-control customInputBox"
                        disabled
                      >
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col xs="12" md="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Willpower:</label>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.willpower.boxes"
                      :key="'willBox' + index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select
                        v-model="box.status"
                        class="form-control customInputBox"
                        disabled
                      >
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col xs="12" md="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Wyrd:</label>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.wyrd.boxes"
                      :key="'wyrdBox' + index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select
                        v-model="box.status"
                        class="form-control customInputBox"
                        disabled
                      >
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col xs="12" md="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Glamour:</label>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.glamour.boxes"
                      :key="'glamourBox' + index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select
                        v-model="box.status"
                        class="form-control customInputBox"
                        disabled
                      >
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col xs="12" md="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Clarity:</label>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.clarity.boxes"
                      :key="'clarityBox' + index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select
                        v-model="box.status"
                        class="form-control customInputBox"
                        disabled
                      >
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <label class="inline-label">Size:</label>
                  <p>{{ char.combatStats.size }}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Speed:</label>
                  <p>{{ char.combatStats.speed }}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Defense:</label>
                  <p>{{ char.combatStats.defense }}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Armor:</label>
                  <p>{{ char.combatStats.armor }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Initiative Mod:</label>
                  <p>{{ char.combatStats.initMod }}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Beats:</label>
                  <p>{{ char.combatStats.beats }}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Experiences:</label>
                  <p>{{ char.combatStats.experiences }}</p>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <p class="sectionLabel">Conditions</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.conditions"
                      :key="index"
                    >
                      Clarity: {{ item.clarity }} | Description: {{ item.desc }}
                    </li>
                  </ul>
                </b-col>
                <b-col>
                  <p class="sectionLabel">Aspirations</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.aspirations"
                      :key="index"
                    >
                      {{ item.desc }}
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="sectionLabel">Regalia</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.favRegalia"
                      :key="index"
                    >
                      {{ item.desc }}
                    </li>
                  </ul>
                </b-col>
                <b-col>
                  <p class="sectionLabel">Frailties</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.frailties"
                      :key="index"
                    >
                      {{ item.desc }}
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="sectionLabel">Touchstones</p>
                  <ol>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.touchstones"
                      :key="index"
                    >
                      {{ item.desc }}
                    </li>
                  </ol>
                </b-col>
              </b-row>
            </b-card>
            <b-card>
              <p class="sectionLabel">Merits</p>
              <b-row>
                <b-col>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(merit, index) in char.merits"
                      :key="index"
                    >
                      Merit Name: {{ merit.name }} - Score: {{ merit.score }}
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Attacks & Equipment'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Attacks:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    striped
                    hover
                    :fields="attacksTableFields"
                    :items="char.weaponAttks"
                    stacked="md"
                  ></b-table>
                </b-col>
              </b-row>
            </b-card>
            <!-- Equipment -->
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Equipment:</h4>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    striped
                    hover
                    :fields="equipmentTableFields"
                    :items="char.equipment"
                    stacked="md"
                  ></b-table>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Contracts & Pledges'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <h4>Contracts:</h4>
              <b-row>
                <b-table
                  striped
                  hover
                  :items="char.contracts"
                  :fields="contractTableFields"
                  stacked="md"
                ></b-table>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <h4>Pledges:</h4>
              <b-row>
                <b-table
                  striped
                  hover
                  :items="char.pledges"
                  :fields="pledgeTableFields"
                  stacked="md"
                ></b-table>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Expanded Merits'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4>Expanded Merits:</h4>
                  <b-row>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Fae Mounts</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.faeMounts"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Mantles</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.mantles"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Hollows</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.hollows"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Tokens</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.tokens"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Other Traits'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4>Other Traits:</h4>
                  <b-row>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Seeming Blessings</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.seemingBless"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Seeming Curses</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.seemingCurse"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Kith Blessings</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.kithBless"
                          :key="index"
                        >
                          {{ item.desc }}
                        </li>
                      </ul>
                    </b-col>
                    <b-col xs="12" md="6">
                      <p class="sectionLabel">Goblin Debts</p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.goblinDebt"
                          :key="index"
                        >
                          <p type="checkbox" disabled item.check>
                            | Notes: {{ item.notes }}
                          </p>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
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
                      >{{ para.substring(5) }}</a
                    >
                    <p v-else>{{ para }}</p>
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
                <b-col cols="12">
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
                      >{{ para.substring(5) }}</a
                    >
                    <p v-else>{{ para }}</p>
                  </div>
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
      // Pledge Table
      pledgeTableFields: [
        { key: 'type', label: 'Type', sortable: true },
        { key: 'notes', label: 'Notes' },
      ],
      // Contract table
      contractTableFields: [
        { key: 'name', label: 'Name', sortable: true },
        { key: 'goblin', label: 'Goblin' },
        { key: 'cost', label: 'Cost' },
        { key: 'dice', label: 'Dice' },
        { key: 'action', label: 'Action' },
        { key: 'duration', label: 'Duration' },
        { key: 'loophole', label: 'Loophole' },
        { key: 'seemingBenefit', label: 'Seeming Benefit' },
      ],
      // Attack Table
      attacksTableFields: [
        { key: 'name', label: 'Attack Name', sortable: true },
        { key: 'dmg', label: 'Damage' },
        { key: 'range', label: 'Range' },
        { key: 'clip', label: 'Clip' },
        { key: 'init', label: 'Init' },
        { key: 'str', label: 'Str' },
        { key: 'size', label: 'Size' },
      ],
      // Equipment Table
      equipmentTableFields: [
        { key: 'name', label: 'Item Name', sortable: true },
        { key: 'durability', label: 'Durability' },
        { key: 'structure', label: 'Structure' },
        { key: 'size', label: 'Size' },
        { key: 'details', label: 'Details' },
        { key: 'cost', label: 'Cost' },
        { key: 'qnty', label: 'Quantity' },
      ],
    };
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    },
    userName() {
      return this.$store.getters.getCurrUserName;
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
}
.charImg {
  width: 100%;
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
.list-item:hover {
  cursor: pointer;
  background-color: rgba(59, 73, 228, 0.3);
}

.customInputBox {
  height: 36px;
  width: 36px;
}
</style>
