<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <p>{{char.genBlock.charName}}</p>
        </label>
        <p>
          User:
          <span class="italics">{{ char.charUser }}</span>
        </p>
        <hr />
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
              <!-- general content -->
              <label>
                Age:
                <p>{{char.genBlock.age}}</p>
              </label>
              <label>
                Virtue:
                <p>{{char.genBlock.virtue}}</p>
              </label>
              <label>
                Vice:
                <p>{{char.genBlock.vice}}</p>
              </label>
              <label>
                Concept:
                <p>{{char.genBlock.concept}}</p>
              </label>
            </b-col>
            <b-col cols="3">
              <label>
                Chronicle:
                <p>{{char.genBlock.chronicle}}</p>
              </label>
              <label>
                Faction:
                <p>{{char.genBlock.faction}}</p>
              </label>
              <label>
                Group Name:
                <p>{{char.genBlock.groupName}}</p>
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
        </b-card>
      </b-col>
      <b-col>
        <p style="font-style: italic; font-size: 14px">
          Attributes 5/4/3 • Skills 11/7/4 (+3 Specialties) • Merits 7 • Health
          = Stamina + Size • Willpower = Resolve + Composure • Size = 5 for
          adult humans Defense = Lowest of Dexterity or Wits + Athletics•
          Initiative Mod = Dexterity + Composure • Speed = Strength + Dexterity
          +5 • Starting Integrity = 7
        </p>
      </b-col>
    </b-row>
    <hr />
    <b-tabs content-class="mt-3">
      <b-tab :title="'Core Stats & Attributes'" active>
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
                <b-col class="skillCols">
                  <label class="inline-label">Intelligence:</label>
                  <p>{{char.attributes.int}}</p>
                  <br />
                  <label class="inline-label">Wits:</label>
                  <p>{{char.attributes.wits}}</p>
                  <br />
                  <label class="inline-label">Resolve:</label>
                  <p>{{char.attributes.resolve}}</p>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Strength:</label>
                  <p>{{char.attributes.str}}</p>
                  <br />
                  <label class="inline-label">Dexterity:</label>
                  <p>{{char.attributes.dex}}</p>
                  <br />
                  <label class="inline-label">Stamina:</label>
                  <p>{{char.attributes.stam}}</p>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Presence:</label>
                  <p>{{char.attributes.pres}}</p>
                  <br />
                  <label class="inline-label">Manipulation:</label>
                  <p>{{char.attributes.manip}}</p>
                  <br />
                  <label class="inline-label">Composure:</label>
                  <p>{{char.attributes.comp}}</p>
                  <br />
                </b-col>
              </b-row>
            </b-card>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <p class="sectionLabel">General Traits</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Health:</label>
                  <p>{{char.combatStats.health}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Willpower:</label>
                  <p>{{char.combatStats.willpower}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Integrity:</label>
                  <p>{{char.combatStats.integrity}}</p>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <label class="inline-label">Size:</label>
                  <p>{{char.combatStats.size}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Speed:</label>
                  <p>{{char.combatStats.speed}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Defense:</label>
                  <p>{{char.combatStats.defense}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Armor:</label>
                  <p>{{char.combatStats.armor}}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Initiative Mod:</label>
                  <p>{{char.combatStats.initMod}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Beats:</label>
                  <p>{{char.combatStats.beats}}</p>
                </b-col>
                <b-col>
                  <label class="inline-label">Experiences:</label>
                  <p style="width:50%;">{{char.combatStats.experiences}}</p>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <p>Conditions:</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.conditions"
                      :key="index"
                    >{{ item }}</li>
                  </ul>
                </b-col>
                <b-col>
                  <p>Aspirations:</p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.aspirations"
                      :key="index"
                    >{{ item }}</li>
                  </ul>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Skills & Merits'">
        <!-- Skills Block -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <p class="sectionLabel">Skills</p>
              <b-row>
                <b-col class="skillCols">
                  <p class="sectionLabel">Mental</p>
                  <div v-for="skill in char.skills.mental" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <p style="margin:0 15px; display: inline;">{{skill.score}}</p>
                    <br />
                    <span>Proficient:</span>
                    <p
                      style="margin:0 15px; display: inline;"
                    >{{skill.prof === true ? "Yes" : "No"}}</p>
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Physical</p>
                  <div v-for="skill in char.skills.physical" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <p style="margin:0 15px; display: inline;">{{skill.score}}</p>
                    <br />
                    <span>Proficient:</span>
                    <p
                      style="margin:0 15px; display: inline;"
                    >{{skill.prof === true ? "Yes" : "No"}}</p>
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Social</p>
                  <div v-for="skill in char.skills.social" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <p style="margin:0 15px; display: inline;">{{skill.score}}</p>
                    <br />
                    <span>Proficient:</span>
                    <p
                      style="margin:0 15px; display: inline;"
                    >{{skill.prof === true ? "Yes" : "No"}}</p>
                  </div>
                </b-col>
              </b-row>
            </b-card>
            <b-card>
              <p class="sectionLabel">Merits</p>
              <b-row>
                <b-col>
                  <hr />
                  <ul>
                    <li
                      class="list-item"
                      v-for="(merit, index) in char.merits"
                      :key="index"
                    >Merit Name: {{ merit.name }} - Score: {{ merit.score }}</li>
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
      <b-tab :title="'Biography & Notes'">
        <!-- Biography -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <h4 style="font-weight:bold;">Character Backstory:</h4>
                  <div v-for="(story, index) in char.backstory" :key="index">
                    <p v-if="story">{{story}}</p>
                    <br v-else />
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
                  <div v-for="(note, index) in char.notes" :key="index">
                    <p v-if="note">{{note}}</p>
                    <br v-else />
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
      attacksTableFields: [
        { key: "name", label: "Attack Name", sortable: true },
        { key: "dmg", label: "Damage" },
        { key: "range", label: "Range" },
        { key: "clip", label: "Clip" },
        { key: "init", label: "Init" },
        { key: "str", label: "Str" },
        { key: "size", label: "Size" },
        { key: "delete", label: "Delete" }
      ],
      equipmentTableFields: [
        { key: "name", label: "Item Name", sortable: true },
        { key: "durability", label: "Durability" },
        { key: "structure", label: "Structure" },
        { key: "size", label: "Size" },
        { key: "details", label: "Details" },
        { key: "cost", label: "Cost" },
        { key: "qnty", label: "Quantity" },
        { key: "delete", label: "Delete" }
      ]
    };
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    }
  },
  mounted() {}
};
</script>

<style scoped>
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
  text-align: center !important;
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
