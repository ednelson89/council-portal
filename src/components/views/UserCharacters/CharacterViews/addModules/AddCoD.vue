<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <input v-model="tempChar.genBlock.charName" class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{ tempChar.charUser }}</span>
        </p>
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
              <!-- general content -->
              <label>
                Age:
                <input class="form-control" v-model="tempChar.genBlock.age" />
              </label>
              <label>
                Virtue:
                <input class="form-control" v-model="tempChar.genBlock.virtue" />
              </label>
              <label>
                Vice:
                <input class="form-control" v-model="tempChar.genBlock.vice" />
              </label>
              <label>
                Concept:
                <input class="form-control" v-model="tempChar.genBlock.concept" />
              </label>
            </b-col>
            <b-col cols="3">
              <label>
                Chronicle:
                <input class="form-control" v-model="tempChar.genBlock.chronicle" />
              </label>
              <label>
                Faction:
                <input class="form-control" v-model="tempChar.genBlock.faction" />
              </label>
              <label>
                Group Name:
                <input class="form-control" v-model="tempChar.genBlock.groupName" />
              </label>
            </b-col>
            <b-col cols class="skillCols">
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
                <b-col class="skillCols">
                  <label class="inline-label">Intelligence:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.int">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Wits:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.wits">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Resolve:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.resolve">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Strength:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.str">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Dexterity:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.dex">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Stamina:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.stam">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Presence:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.pres">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Manipulation:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.manip">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Composure:</label>
                  <select class="form-control codSelect" v-model="tempChar.attributes.comp">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                </b-col>
              </b-row>
            </b-card>

            <b-card class="b-cards">
              <p class="sectionLabel">Skills</p>
              <b-row>
                <b-col class="skillCols">
                  <p class="sectionLabel">Mental</p>
                  <div v-for="skill in tempChar.skills.mental" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Proficient:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.prof"
                    />
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Physical</p>
                  <div v-for="skill in tempChar.skills.physical" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Proficient:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.prof"
                    />
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Social</p>
                  <div v-for="skill in tempChar.skills.social" :key="skill.name">
                    <label class="inline-label">
                      {{
                      skill.name.charAt(0).toUpperCase() +
                      skill.name.slice(1)
                      }}:
                    </label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Proficient:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.prof"
                    />
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'General Traits & Merits'">
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col>
                  <p class="sectionLabel">General Traits</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Health:</label>
                  <select class="form-control codSelect" v-model="tempChar.combatStats.health">
                    <option v-for="(num, index) in health" :key="index" :value="num">{{ num }}</option>
                  </select>
                </b-col>
                <b-col>
                  <label class="inline-label">Willpower:</label>
                  <select class="form-control codSelect" v-model="tempChar.combatStats.willpower">
                    <option v-for="(num, index) in willInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                </b-col>
                <b-col>
                  <label class="inline-label">Integrity:</label>
                  <select class="form-control codSelect" v-model="tempChar.combatStats.integrity">
                    <option v-for="(num, index) in willInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <label class="inline-label">Size:</label>
                  <input class="form-control codSelect" v-model="tempChar.combatStats.size" />
                </b-col>
                <b-col>
                  <label class="inline-label">Speed:</label>
                  <input class="form-control codSelect" v-model="tempChar.combatStats.speed" />
                </b-col>
                <b-col>
                  <label class="inline-label">Defense:</label>
                  <input class="form-control codSelect" v-model="tempChar.combatStats.defense" />
                </b-col>
                <b-col>
                  <label class="inline-label">Armor:</label>
                  <input class="form-control codSelect" v-model="tempChar.combatStats.armor" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Initiative Mod:</label>
                  <input class="form-control codSelect" v-model="tempChar.combatStats.initMod" />
                </b-col>
                <b-col>
                  <label class="inline-label">Beats:</label>
                  <select class="form-control codSelect" v-model="tempChar.combatStats.beats">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                </b-col>
                <b-col>
                  <label class="inline-label">Experiences:</label>
                  <input
                    class="form-control codSelect"
                    style="width:50%;"
                    v-model="tempChar.combatStats.experiences"
                  />
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <label class="inline-label">Add Conditions:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempCond" />
                  <b-button @click="addCondition" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Conditions
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span>
                    :
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in tempChar.combatStats.conditions"
                      :key="index"
                      @click="delCondition(index)"
                    >{{ item }}</li>
                  </ul>
                </b-col>
                <b-col>
                  <label class="inline-label">Add Aspirations:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempAsp" />
                  <b-button @click="addAspiration" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Aspirations
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span>:
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in tempChar.combatStats.aspirations"
                      :key="index"
                      @click="delAspiration(index)"
                    >{{ item }}</li>
                  </ul>
                </b-col>
              </b-row>
            </b-card>
            <b-card>
              <p class="sectionLabel">Merits</p>
              <b-row>
                <b-col>
                  <label>
                    Merit Name:
                    <input class="form-control" v-model="tempMerit.name" />
                  </label>

                  <label>
                    Score:
                    <select
                      class="form-control codSelect"
                      style="margin:10px 15px; width: 50px !important;"
                      v-model="tempMerit.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                  </label>
                  <br />
                  <b-button
                    @click="tempChar.merits.push(JSON.parse(JSON.stringify(tempMerit)))"
                  >Add Merit</b-button>
                  <hr />
                  <ul>
                    <li
                      class="list-item"
                      v-for="(merit, index) in tempChar.merits"
                      :key="index"
                      @click="tempChar.merits.splice(index, 1)"
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
                <b-col cols="3">
                  <label>
                    Attack Name:
                    <input class="form-control" v-model="attack.name" />
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
                    Range:
                    <input class="form-control" v-model="attack.range" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Clip:
                    <input class="form-control" v-model="attack.clip" />
                  </label>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="3">
                  <label>
                    Init:
                    <input class="form-control" v-model="attack.init" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Str:
                    <input class="form-control" v-model="attack.str" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Size:
                    <input class="form-control" v-model="attack.size" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button
                    @click="
                      tempChar.weaponAttks.push(
                        JSON.parse(JSON.stringify(attack))
                      )
                    "
                  >Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    striped
                    hover
                    :fields="attacksTableFields"
                    :items="tempChar.weaponAttks"
                    stacked="md"
                  >
                    <template v-slot:cell(delete)="row">
                      <b-button
                        size="sm"
                        @click="tempChar.weaponAttks.splice(row.index, 1)"
                      >Delete Attack</b-button>
                    </template>
                  </b-table>
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
                <b-col cols="3">
                  <label>
                    Item Name:
                    <input class="form-control" v-model="tempEquipment.name" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Durability:
                    <input class="form-control" v-model="tempEquipment.durability" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Structure:
                    <input class="form-control" v-model="tempEquipment.structure" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Size:
                    <input class="form-control" v-model="tempEquipment.size" />
                  </label>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="3">
                  <label>
                    Cost:
                    <input class="form-control" v-model="tempEquipment.cost" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Quantity:
                    <input class="form-control" v-model="tempEquipment.qnty" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button
                    @click="
                      tempChar.equipment.push(
                        JSON.parse(JSON.stringify(tempEquipment))
                      )
                    "
                  >Add to List</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    striped
                    hover
                    :fields="equipmentTableFields"
                    :items="tempChar.equipment"
                    stacked="md"
                  >
                    <template v-slot:cell(delete)="row">
                      <b-button
                        size="sm"
                        @click="tempChar.equipment.splice(row.index, 1)"
                      >Delete Item</b-button>
                    </template>
                  </b-table>
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
    </b-tabs>
  </div>
</template>

<script>
import { charCoD } from "@/components/modules/CharacterObjects/characterCoD.js";
import { postUserCharUpdate } from "@/components/modules/utilities/dataFunctions.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      score: [0, 1, 2, 3, 4, 5],
      health: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      willInteg: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false,
      tempChar: charCoD(),
      tempNotes: "",
      tempBackstory: "",
      tempCond: "",
      tempAsp: "",
      tempMerit: { name: "", score: 0 },
      // Attack Table
      attack: {
        name: "",
        dmg: "",
        range: "",
        clip: "",
        init: "",
        str: "",
        size: ""
      },
      attacksTableFields: [
        { key: "name", label: "Attack Name", sortable: false },
        { key: "dmg", label: "Damage" },
        { key: "range", label: "Range" },
        { key: "clip", label: "Clip" },
        { key: "init", label: "Init" },
        { key: "str", label: "Str" },
        { key: "size", label: "Size" },
        { key: "delete", label: "Delete" }
      ],
      // Equipment Table
      tempEquipment: {
        name: "",
        durability: "",
        structure: "",
        size: "",
        cost: "",
        qnty: 0
      },
      equipmentTableFields: [
        { key: "name", label: "Item Name", sortable: false },
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
    ...mapGetters({
      appRoute: "getAppRoute",
      activeUser: "getActiveUser"
    })
  },
  methods: {
    addNewChar() {
      this.loading = true;
      var localStore = JSON.parse(localStorage.getItem("UserData"));

      this.$store.commit("setNewUserCharacter", this.tempChar);
      postUserCharUpdate(localStore, 1, this.tempChar).then(data => {
        this.activeUser.userChars = data;
        this.loading = false;
        this.$router.push({ path: "/characters" });
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
    addCondition() {
      this.tempChar.combatStats.conditions.push(this.tempCond);
    },
    delCondition(index) {
      this.tempChar.combatStats.conditions.splice(index, 1);
    },
    addAspiration() {
      this.tempChar.combatStats.aspirations.push(
        JSON.parse(JSON.stringify(this.tempAsp))
      );
    },
    delAspiration(index) {
      this.tempChar.combatStats.aspirations.splice(index, 1);
    }
  },
  mounted() {
    this.tempChar.charUser = this.$store.getters.getCurrUserName;
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
.inline-label {
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
}
.codSelect {
  width: 25%;
}
.list-item:hover {
  cursor: pointer;
  background-color: rgba(59, 73, 228, 0.3);
}
</style>
