<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col cols="3">
        <label>
          Character Name:
          <input v-model="char.genBlock.charName " class="form-control" />
        </label>
        <p>
          User:
          <span class="italics">{{char.charUser}}</span>
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
              <!-- general content -->
              <label>
                Age:
                <input class="form-control" v-model="char.genBlock.age" />
              </label>
              <label>
                Needle:
                <input class="form-control" v-model="char.genBlock.needle" />
              </label>
              <label>
                Thread:
                <input class="form-control" v-model="char.genBlock.thread" />
              </label>
              <label>
                Concept:
                <input class="form-control" v-model="char.genBlock.concept" />
              </label>
            </b-col>
            <b-col cols="3">
              <label>
                Chronicle:
                <input class="form-control" v-model="char.genBlock.chronicle" />
              </label>
              <label>
                Seeming:
                <input class="form-control" v-model="char.genBlock.seeming" />
              </label>
              <label>
                Kith:
                <input class="form-control" v-model="char.genBlock.kith" />
              </label>
              <label>
                Court:
                <input class="form-control" v-model="char.genBlock.court" />
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
      <b-col>
        <p style="font-style: italic; font-size: 14px">
          Attributes 5/4/3•Skills 11/7/4 (+3 Specialties) • Seeming: +1 to one favored Attribute; record Blessing, Curse, favored Regalia • Kith: Record Blessing, if applicable • 1 Touchstone • Minor frailty if Wyrd 2
          Contracts: Second favored Regalia, 4 Common (Regalia, Court, or Goblin; 2 must come from favored Regalia) + 2 Royal (Court or favored Regalia) • Merits 10 + Mantle 1 if courtier • Health = Stamina + Size
          Willpower = Resolve + Composure • Size = 5 • Defense = (Lower of Dexterity or Wits) + Athletics • Initiative Mod = Dexterity + Composure • Speed = Strength + Dexterity + 5 • Max Clarity = Wits + Composure Starting Wyrd = 1 • Starting Glamour = 10
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
                  <select class="form-control codSelect" v-model="char.attributes.int">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Wits:</label>
                  <select class="form-control codSelect" v-model="char.attributes.wits">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Resolve:</label>
                  <select class="form-control codSelect" v-model="char.attributes.resolve">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Strength:</label>
                  <select class="form-control codSelect" v-model="char.attributes.str">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Dexterity:</label>
                  <select class="form-control codSelect" v-model="char.attributes.dex">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Stamina:</label>
                  <select class="form-control codSelect" v-model="char.attributes.stam">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                </b-col>
                <b-col class="skillCols">
                  <label class="inline-label">Presence:</label>
                  <select class="form-control codSelect" v-model="char.attributes.pres">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Manipulation:</label>
                  <select class="form-control codSelect" v-model="char.attributes.manip">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <br />
                  <label class="inline-label">Composure:</label>
                  <select class="form-control codSelect" v-model="char.attributes.comp">
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
                  <div v-for="skill in char.skills.mental" :key="skill.name">
                    <label
                      class="inline-label"
                    >{{ (skill.name.charAt(0).toUpperCase() + skill.name.slice(1)) }}:</label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Specialized:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <input class="form-control" type="text" v-model="skill.specText" />
                    </b-row>
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Physical</p>
                  <div v-for="skill in char.skills.physical" :key="skill.name">
                    <label
                      class="inline-label"
                    >{{ (skill.name.charAt(0).toUpperCase() + skill.name.slice(1)) }}:</label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Specialized:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <input class="form-control" type="text" v-model="skill.specText" />
                    </b-row>
                  </div>
                </b-col>
                <b-col class="skillCols">
                  <p class="sectionLabel">Social</p>
                  <div v-for="skill in char.skills.social" :key="skill.name">
                    <label
                      class="inline-label"
                    >{{ (skill.name.charAt(0).toUpperCase() + skill.name.slice(1)) }}:</label>
                    <select
                      class="form-control codSelect"
                      style="margin:0 15px; display: inline;"
                      v-model="skill.score"
                    >
                      <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                    </select>
                    <br />
                    <span>Specialized:</span>
                    <input
                      type="checkbox"
                      class="form-control"
                      style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                      v-model="skill.spec"
                    />
                    <b-row v-show="skill.spec">
                      <span>Specialization:</span>
                      <input class="form-control" type="text" v-model="skill.specText" />
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
                <b-col cols="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Health:</label>
                  <select
                    class="form-control codSelect"
                    v-model="char.combatStats.health.total"
                    @change="updateBoxCount('health')"
                  >
                    <option v-for="(num, index) in health" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.health.boxes"
                      :key="'healthBox'+index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select v-model="box.status" class="form-control customInputBox">
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Willpower:</label>
                  <select
                    class="form-control codSelect"
                    v-model="char.combatStats.willpower.total"
                    @change="updateBoxCount('willpower')"
                  >
                    <option v-for="(num, index) in willInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.willpower.boxes"
                      :key="'willBox'+index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select v-model="box.status" class="form-control customInputBox">
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Wyrd:</label>
                  <select
                    class="form-control codSelect"
                    v-model="char.combatStats.wyrd.total"
                    @change="updateBoxCount('wyrd')"
                  >
                    <option v-for="(num, index) in willInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <!-- 
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.wyrd.boxes"
                      :key="'wyrdBox'+index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select v-model="box.status" class="form-control customInputBox">
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>-->
                </b-col>
                <b-col cols="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Glamour:</label>
                  <select
                    class="form-control codSelect"
                    v-model="char.combatStats.glamour.total"
                    @change="updateBoxCount('glamour')"
                  >
                    <option v-for="(num, index) in glamInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.glamour.boxes"
                      :key="'glamourBox'+index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select v-model="box.status" class="form-control customInputBox">
                        <option value></option>
                        <option value="/">/</option>
                        <option value="X">X</option>
                        <option value="#">#</option>
                      </select>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="6" style="border-right: 1px black solid;">
                  <label class="inline-label">Clarity:</label>
                  <select
                    class="form-control codSelect"
                    v-model="char.combatStats.clarity.total"
                    @change="updateBoxCount('clarity')"
                  >
                    <option v-for="(num, index) in willInteg" :key="index" :value="num">{{ num }}</option>
                  </select>
                  <b-row>
                    <b-col
                      v-for="(box, index) in char.combatStats.clarity.boxes"
                      :key="'clarityBox'+index"
                      style="margin: 2px; padding:2px;"
                    >
                      <select v-model="box.status" class="form-control customInputBox">
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
                  <input class="form-control codSelect" v-model="char.combatStats.size" />
                </b-col>
                <b-col>
                  <label class="inline-label">Speed:</label>
                  <input class="form-control codSelect" v-model="char.combatStats.speed" />
                </b-col>
                <b-col>
                  <label class="inline-label">Defense:</label>
                  <input class="form-control codSelect" v-model="char.combatStats.defense" />
                </b-col>
                <b-col>
                  <label class="inline-label">Armor:</label>
                  <input class="form-control codSelect" v-model="char.combatStats.armor" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Initiative Mod:</label>
                  <input class="form-control codSelect" v-model="char.combatStats.initMod" />
                </b-col>
                <b-col>
                  <label class="inline-label">Beats:</label>
                  <select class="form-control codSelect" v-model="char.combatStats.beats">
                    <option v-for="(num, index) in score" :key="index" :value="num">{{ num }}</option>
                  </select>
                </b-col>
                <b-col>
                  <label class="inline-label">Experiences:</label>
                  <input
                    class="form-control codSelect"
                    style="width:50%;"
                    v-model="char.combatStats.experiences"
                  />
                </b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <label class="inline-label">Add Conditions:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempCond.desc" />
                  <span class="inline-label">Clarity:</span>
                  <input
                    type="checkbox"
                    class="form-control"
                    style="margin:10px 15px; display: inline; width: 20px; height: 20px;"
                    v-model="tempCondTF"
                  />
                  <b-button @click="addCondition" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Conditions
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span> :
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.conditions"
                      :key="index"
                    >
                      <input type="text" class="list-input" v-model="item.desc" />
                      <b-button @click="delCondition(index)">Delete</b-button>
                    </li>
                  </ul>
                </b-col>
                <b-col>
                  <label class="inline-label">Add Aspirations:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempAsp.desc" />
                  <b-button @click="addAspiration" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Aspirations
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span>:
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.aspirations"
                      :key="index"
                    >
                      <input type="text" class="list-input" v-model="item.desc" />
                      <b-button @click="delAspiration(index)">Delete</b-button>
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Add Regalia:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempReg.desc" />
                  <b-button @click="addRegalia" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Regalia
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span> :
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.favRegalia"
                      :key="index"
                    >
                      <input type="text" class="list-input" v-model="item.desc" />
                      <b-button @click="delRegalia(index)">Delete</b-button>
                    </li>
                  </ul>
                </b-col>
                <b-col>
                  <label class="inline-label">Add Frailties:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempFrail.desc" />
                  <b-button @click="addFrailty" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Frailties
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span>:
                  </p>
                  <ul>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.frailties"
                      :key="index"
                    >
                      <input type="text" class="list-input" v-model="item.desc" />
                      <b-button @click="delFrailty(index)">Delete</b-button>
                    </li>
                  </ul>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label class="inline-label">Add Touchstone:</label>
                  <input class="form-control codSelect" style="width:50%;" v-model="tempTouch.desc" />
                  <b-button @click="addTouchstone" style="margin:10px;">Add to List</b-button>
                  <hr />
                  <p>
                    Touchstones
                    <span style="font-size:10px; font-style: italic;">(click to delete)</span> :
                  </p>
                  <ol>
                    <li
                      class="list-item"
                      v-for="(item, index) in char.combatStats.touchstones"
                      :key="index"
                    >
                      <input type="text" class="list-input" v-model="item.desc" />
                      <b-button @click="delGoblinDebt(index)">Delete</b-button>
                    </li>
                  </ol>
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
                    @click="char.merits.push(JSON.parse(JSON.stringify(tempMerit)));"
                  >Add Merit</b-button>
                  <hr />
                  <ul>
                    <li class="list-item" v-for="(merit, index) in char.merits" :key="index">
                      Merit Name:
                      <input type="text" class="list-input" v-model="merit.name" /> - Score:
                      <input type="text" class="list-score" v-model="merit.score" />
                      <b-button @click="char.merits.splice(index,1)">Delete</b-button>
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
                    @click="char.weaponAttks.push(JSON.parse(JSON.stringify(attack)))"
                  >Add to List</b-button>
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
                  >
                    <template v-slot:cell(name)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].name"
                      />
                    </template>
                    <template v-slot:cell(dmg)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].dmg"
                      />
                    </template>
                    <template v-slot:cell(range)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].range"
                      />
                    </template>
                    <template v-slot:cell(clip)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].clip"
                      />
                    </template>
                    <template v-slot:cell(init)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].init"
                      />
                    </template>
                    <template v-slot:cell(str)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].str"
                      />
                    </template>
                    <template v-slot:cell(size)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.weaponAttks[row.index].size"
                      />
                    </template>
                    <template v-slot:cell(delete)="row">
                      <b-button
                        size="sm"
                        @click="char.weaponAttks.splice(row.index,1)"
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
                <b-col cols="4">
                  <label>
                    Details:
                    <input class="form-control" v-model="tempEquipment.details" />
                  </label>
                </b-col>
                <b-col cols="2">
                  <br />
                  <b-button
                    @click="char.equipment.push(JSON.parse(JSON.stringify(tempEquipment)))"
                  >Add to List</b-button>
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
                  >
                    <template v-slot:cell(name)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].name"
                      />
                    </template>
                    <template v-slot:cell(durability)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].durability"
                      />
                    </template>
                    <template v-slot:cell(structure)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].structure"
                      />
                    </template>
                    <template v-slot:cell(size)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].size"
                      />
                    </template>
                    <template v-slot:cell(details)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].details"
                      />
                    </template>
                    <template v-slot:cell(cost)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].cost"
                      />
                    </template>
                    <template v-slot:cell(qnty)="row">
                      <input
                        type="text"
                        class="table-input"
                        v-model="char.equipment[row.index].qnty"
                      />
                    </template>
                    <template v-slot:cell(delete)="row">
                      <b-button size="sm" @click="char.equipment.splice(row.index, 1)">Delete Item</b-button>
                    </template>
                  </b-table>
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
                <b-col cols="3">
                  <label>
                    Name:
                    <input v-model="tempContract.name" class="form-control" />
                  </label>
                </b-col>
                <b-col cols="1">
                  <label>
                    Goblin:
                    <input
                      v-model="tempContract.goblin"
                      type="checkbox"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="1">
                  <label>
                    Cost:
                    <input v-model="tempContract.cost" type="text" class="form-control" />
                  </label>
                </b-col>
                <b-col cols="1">
                  <label>
                    Dice:
                    <input v-model="tempContract.dice" type="text" class="form-control" />
                  </label>
                </b-col>
                <b-col cols="1">
                  <label>
                    Action:
                    <input v-model="tempContract.action" type="text" class="form-control" />
                  </label>
                </b-col>
                <b-col cols="1">
                  <label>
                    Duration:
                    <input
                      v-model="tempContract.duration"
                      type="text"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col cols="2">
                  <label>
                    Loophole:
                    <input
                      v-model="tempContract.loophole"
                      type="text"
                      class="form-control"
                    />
                  </label>
                </b-col>
                <b-col>
                  <label>
                    Seeming Benefit:
                    <input
                      v-model="tempContract.seemingBenefit"
                      type="text"
                      class="form-control"
                    />
                  </label>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button @click="addContract">Add Contract</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-table
                  striped
                  hover
                  :items="char.contracts"
                  :fields="contractTableFields"
                  stacked="md"
                >
                  <template v-slot:cell(name)="row">
                    <input type="text" class="table-input" v-model="char.contracts[row.index].name" />
                  </template>
                  <template v-slot:cell(goblin)="row">
                    <input
                      type="checkbox"
                      class="table-input"
                      v-model="char.contracts[row.index].goblin"
                    />
                  </template>
                  <template v-slot:cell(cost)="row">
                    <input type="text" class="table-input" v-model="char.contracts[row.index].cost" />
                  </template>
                  <template v-slot:cell(dice)="row">
                    <input type="text" class="table-input" v-model="char.contracts[row.index].dice" />
                  </template>
                  <template v-slot:cell(action)="row">
                    <input
                      type="text"
                      class="table-input"
                      v-model="char.contracts[row.index].action"
                    />
                  </template>
                  <template v-slot:cell(duration)="row">
                    <input
                      type="text"
                      class="table-input"
                      v-model="char.contracts[row.index].duration"
                    />
                  </template>
                  <template v-slot:cell(loophole)="row">
                    <input
                      type="text"
                      class="table-input"
                      v-model="char.contracts[row.index].loophole"
                    />
                  </template>
                  <template v-slot:cell(seemingBenefit)="row">
                    <input
                      type="text"
                      class="table-input"
                      v-model="char.contracts[row.index].seemingBenefit"
                    />
                  </template>
                  <template v-slot:cell(delete)="row">
                    <b-button size="sm" @click="char.contracts.splice(row.index, 1)">Delete Item</b-button>
                  </template>
                </b-table>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <h4>Pledges:</h4>
              <b-row>
                <b-col cols="3">
                  <label>
                    Type:
                    <select v-model="tempPledge.type" class="form-control">
                      <option value></option>
                      <option value="Sealing">Sealing</option>
                      <option value="Oath">Oath</option>
                      <option value="Bargain">Bargain</option>
                    </select>
                  </label>
                </b-col>
                <b-col cols="9">
                  <label>
                    Notes:
                    <input v-model="tempPledge.notes" type="text" class="form-control" />
                  </label>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button @click="addPledge">Add Pledge</b-button>
                </b-col>
              </b-row>
              <b-row>
                <b-table
                  striped
                  hover
                  :items="char.pledges"
                  :fields="pledgeTableFields"
                  stacked="md"
                >
                  <template v-slot:cell(type)="row">
                    <input type="text" class="table-input" v-model="char.pledges[row.index].type" />
                  </template>
                  <template v-slot:cell(notes)="row">
                    <input type="text" class="table-input" v-model="char.pledges[row.index].notes" />
                  </template>
                  <template v-slot:cell(delete)="row">
                    <b-button size="sm" @click="char.pledges.splice(row.index, 1)">Delete Item</b-button>
                  </template>
                </b-table>
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
                    <b-col>
                      <label class="inline-label">Fae Mounts:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempFaeMount.desc"
                      />
                      <b-button @click="addMount" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Fae Mounts
                        <span
                          style="font-size:10px; font-style: italic;"
                        >(click to delete)</span> :
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.faeMounts"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delMount(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                    <b-col>
                      <label class="inline-label">Add Mantles:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempMantle.desc"
                      />
                      <b-button @click="addMantle" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Mantles
                        <span style="font-size:10px; font-style: italic;">(click to delete)</span>:
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.mantles"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delMantle(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <label class="inline-label">Add Hollows:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempHollow.desc"
                      />
                      <b-button @click="addHollow" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Hollows
                        <span style="font-size:10px; font-style: italic;">(click to delete)</span> :
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.hollows"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delHollow(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                    <b-col>
                      <label class="inline-label">Add Tokens:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempToken.desc"
                      />
                      <b-button @click="addToken" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Tokens
                        <span style="font-size:10px; font-style: italic;">(click to delete)</span>:
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.expandedMerits.tokens"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delToken(index)">Delete</b-button>
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
                    <b-col>
                      <label>Add Seeming Blessings:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempSeemBless.desc"
                      />
                      <b-button @click="addSeemingBlessing" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Seeming Blessings
                        <span
                          style="font-size:10px; font-style: italic;"
                        >(click to delete)</span> :
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.seemingBless"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delSeemingBlessing(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                    <b-col>
                      <label>Add Seeming Curses:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempSeemCurse.desc"
                      />
                      <b-button @click="addSeemingCurse" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Seeming Curses
                        <span
                          style="font-size:10px; font-style: italic;"
                        >(click to delete)</span>:
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.seemingCurse"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delSeemingCurse(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <label>Add Kith Blessings:</label>
                      <input
                        class="form-control codSelect"
                        style="width:50%;"
                        v-model="tempKithBless.desc"
                      />
                      <b-button @click="addKithBlessing" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Kith Blessings
                        <span
                          style="font-size:10px; font-style: italic;"
                        >(click to delete)</span> :
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.kithBless"
                          :key="index"
                        >
                          <input type="text" class="list-input" v-model="item.desc" />
                          <b-button @click="delKithBlessing(index)">Delete</b-button>
                        </li>
                      </ul>
                    </b-col>
                    <b-col>
                      <label>Add Goblin Debts:</label>
                      <input
                        type="checkbox"
                        class="form-control"
                        style="display:inline;"
                        v-model="tempGoblinDebt.check"
                      />
                      <input
                        class="form-control codSelect"
                        style="width:50%; display:inline;"
                        v-model="tempGoblinDebt.notes"
                      />
                      <b-button @click="addGoblinDebt" style="margin:10px;">Add to List</b-button>
                      <hr />
                      <p>
                        Goblin Debts
                        <span
                          style="font-size:10px; font-style: italic;"
                        >(click to delete)</span> :
                      </p>
                      <ul>
                        <li
                          class="list-item"
                          v-for="(item, index) in char.otherTraits.goblinDebt"
                          :key="index"
                          @click="delGoblinDebt(index)"
                        >
                          <input type="checkbox" disabled v-model="item.check" />
                          | Notes: {{item.notes}}
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
import {
  getCampaigns,
  updateGameChar
} from "@/components/modules/utilities/dataFunctions.js";
import ChangelingUpdate from "@/components/modules/DataUpdates/ChangelingUpdate.vue";

export default {
  mixins: [ChangelingUpdate],
  data() {
    return {
      score: [0, 1, 2, 3, 4, 5],
      health: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      clarity: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      willInteg: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      glamInteg: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      loading: false,
      tempNotes: "",
      tempBackstory: "",
      tempCond: { desc: "" },
      tempCondTF: false,
      tempAsp: { desc: "" },
      tempReg: { desc: "" },
      tempFrail: { desc: "" },
      tempTouch: { notes: "" },
      tempMerit: { name: "", score: 0 },
      tempGoblinDebt: { check: false, notes: "" },
      tempKithBless: { desc: "" },
      tempSeemCurse: { desc: "" },
      tempSeemBless: { desc: "" },
      tempFaeMount: { desc: "" },
      tempMantle: { desc: "" },
      tempHollow: { desc: "" },
      tempToken: { desc: "" },
      // Pledge Table
      tempPledge: { type: "", notes: "" },
      pledgeTableFields: [
        { key: "type", label: "Type", sortable: false },
        { key: "notes", label: "Notes" },
        { key: "delete", label: "Delete" }
      ],
      // Contract table
      tempContract: {
        name: "",
        goblin: false,
        cost: "",
        dice: "",
        action: "",
        duration: "",
        loophole: "",
        seemingBenefit: ""
      },
      contractTableFields: [
        { key: "name", label: "Name", sortable: false },
        { key: "goblin", label: "Goblin" },
        { key: "cost", label: "Cost" },
        { key: "dice", label: "Dice" },
        { key: "action", label: "Action" },
        { key: "duration", label: "Duration" },
        { key: "loophole", label: "Loophole" },
        { key: "seemingBenefit", label: "Seeming Benefit" },
        { key: "delete", label: "Delete" }
      ],
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
        details: "",
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
  methods: {
    // Navigation Method
    saveCharEdits() {
      this.loading = true;
      updateGameChar(3, this.char, this.activeGame.gameID)
        .then(() => {
          this.updateGame();
          this.loading = false;
        })
        .then(() => {
          this.$router.push({ path: "/view-game-character" });
        });
    },
    updateGame() {
      let gameList = [];
      getCampaigns()
        .then(response => {
          let currGame;
          response.forEach(entry => {
            gameList.push(entry);
            if (entry.gameID === this.activeGame.gameID) {
              currGame = entry;
            }
          });
          return currGame;
        })
        .then(game => {
          game.wikiPosts = game.wikiPosts.reverse();
          this.$store.commit("setActiveGame", game);
          this.$store.commit("setGames", gameList);
        });
    },
    // Edit Text Areas
    saveBackstory() {
      this.char.backstory = [];
      var stringArray = document
        .getElementById("charBackstoryList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.char.backstory.push(element);
      });
    },
    saveNotes() {
      this.char.notes = [];
      var stringArray = document
        .getElementById("charNotesList")
        .value.split("\n");
      stringArray.forEach(element => {
        this.char.notes.push(element);
      });
    },
    // Edit General Traits
    addCondition() {
      this.char.combatStats.conditions.push({
        desc: this.tempCond,
        clarity: this.tempCondTF
      });
      this.tempCond.desc = "";
      this.tempCondTF = false;
    },
    delCondition(index) {
      this.char.combatStats.conditions.splice(index, 1);
    },
    addAspiration() {
      this.char.combatStats.aspirations.push(
        JSON.parse(JSON.stringify(this.tempAsp))
      );
      this.tempAsp.desc = "";
    },
    delAspiration(index) {
      this.char.combatStats.aspirations.splice(index, 1);
    },
    addRegalia() {
      this.char.combatStats.favRegalia.push(
        JSON.parse(JSON.stringify(this.tempReg))
      );
      this.tempReg.desc = "";
    },
    delRegalia(index) {
      this.char.combatStats.favRegalia.splice(index, 1);
    },
    addFrailty() {
      this.char.combatStats.frailties.push(
        JSON.parse(JSON.stringify(this.tempFrail))
      );
      this.tempFrail.desc = "";
    },
    delFrailty(index) {
      this.char.combatStats.frailties.splice(index, 1);
    },
    addTouchstone() {
      if (this.char.combatStats.touchstones.length <= 10) {
        this.char.combatStats.touchstones.push(
          JSON.parse(JSON.stringify(this.tempTouch))
        );
        this.tempTouch.desc = "";
      }
    },
    delTouchstone(index) {
      this.char.combatStats.touchstones.splice(index, 1);
    },
    // Edit Contracts and Pledges
    addContract() {
      this.char.contracts.push(JSON.parse(JSON.stringify(this.tempContract)));
      this.tempContract = {
        name: "",
        goblin: false,
        cost: "",
        dice: "",
        action: "",
        duration: "",
        loophole: "",
        seemingBenefit: ""
      };
    },
    addPledge() {
      this.char.pledges.push(JSON.parse(JSON.stringify(this.tempPledge)));
      this.tempPledge = { type: "", notes: "" };
    },
    // Edit Expanded Merits
    addMount() {
      this.char.expandedMerits.faeMounts.push(
        JSON.parse(JSON.stringify(this.tempFaeMount))
      );
      this.tempFaeMount.desc = "";
    },
    delMount(index) {
      this.char.expandedMerits.faeMounts.splice(index, 1);
    },
    addMantle() {
      this.char.expandedMerits.mantles.push(
        JSON.parse(JSON.stringify(this.tempMantle))
      );
      this.tempMantle.desc = "";
    },
    delMantle(index) {
      this.char.expandedMerits.mantles.splice(index, 1);
    },
    addHollow() {
      this.char.expandedMerits.hollows.push(
        JSON.parse(JSON.stringify(this.tempHollow))
      );
      this.tempHollow.desc = "";
    },
    delHollow(index) {
      this.char.expandedMerits.hollows.splice(index, 1);
    },
    addToken() {
      this.char.expandedMerits.tokens.push(
        JSON.parse(JSON.stringify(this.tempToken))
      );
      this.tempToken.desc = "";
    },
    delToken(index) {
      this.char.expandedMerits.tokens.splice(index, 1);
    },
    //Edit Other Traits
    addSeemingBlessing() {
      this.char.otherTraits.seemingBless.push(
        JSON.parse(JSON.stringify(this.tempSeemBless))
      );
      this.tempSeemBless.desc = "";
    },
    delSeemingBlessing(index) {
      this.char.otherTraits.seemingBless.splice(index, 1);
    },
    addSeemingCurse() {
      this.char.otherTraits.seemingCurse.push(
        JSON.parse(JSON.stringify(this.tempSeemCurse))
      );
      this.tempSeemCurse.desc = "";
    },
    delSeemingCurse(index) {
      this.char.otherTraits.seemingCurse.splice(index, 1);
    },
    addKithBlessing() {
      this.char.otherTraits.kithBless.push(
        JSON.parse(JSON.stringify(this.tempKithBless))
      );
      this.tempKithBless.desc = "";
    },
    delKithBlessing(index) {
      this.char.otherTraits.kithBless.splice(index, 1);
    },
    addGoblinDebt() {
      this.char.otherTraits.goblinDebt.push(
        JSON.parse(JSON.stringify(this.tempGoblinDebt))
      );
      this.tempGoblinDebt.desc = { check: false, notes: "" };
    },
    delGoblinDebt(index) {
      this.char.otherTraits.goblinDebt.splice(index, 1);
    },
    // Update boxes
    updateBoxCount(field) {
      // eslint-disable-next-line no-console
      console.log("Update Field: ", field);
      let localTotal = this.char.combatStats[field].total;
      this.char.combatStats[field].boxes = [];
      for (var i = 0; i < localTotal; i++) {
        this.char.combatStats[field].boxes.push({ status: "" });
      }
    }
  },
  computed: {
    char() {
      return this.$store.getters.getActiveChar;
    },
    activeGame() {
      return this.$store.getters.getActiveGame;
    },
    activeUser() {
      return this.$store.getters.getCurrUserName;
    }
  },
  mounted() {
    this.char.backstory.forEach(story => {
      this.tempBackstory += story + "\n";
    });
    this.char.notes.forEach(note => {
      this.tempNotes += note + "\n";
    });
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
.list-item {
  margin-top: 5px;
}
.list-item:hover {
  cursor: pointer;
  background-color: rgba(59, 73, 228, 0.3);
}
.list-input {
  width: 50%;
  margin: 5px;
  border: 1px solid rgb(76, 73, 73);
  border-radius: 4px;
}
.list-score {
  width: 8%;
  margin: 5px;
  border: 1px solid rgb(76, 73, 73);
  border-radius: 4px;
}
.table-input {
  width: 100%;
  margin: 2px;
  border: 1px solid rgb(76, 73, 73);
  border-radius: 4px;
}
.customInputBox {
  height: 36px;
  width: 36px;
}
</style>