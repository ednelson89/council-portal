<template>
  <div>
    <!-- Summary Block -->
    <b-row>
      <b-col xs="12" md="3">
        <label>
          <span class="shadowRunSectionHead">Chummer Name:</span>
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
            <b-col>
              <h3 class="shadowRunSectionHead">
                Profile Data
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col xs="12" md="3">
              <!-- general content -->
              <label>
                Age:
                <p>{{ char.genBlock.age }}</p>
              </label>
              <label>
                Ethnicity:
                <p>
                  {{ char.genBlock.ethnicity }}
                </p>
              </label>
              <label>
                Metatype:
                <p>{{ char.genBlock.metatype }}</p>
              </label>
              <label>
                Sex:
                <p>{{ char.genBlock.sex }}</p>
              </label>
              <label>
                Height:
                <p>{{ char.genBlock.height }}</p>
              </label>
              <label>
                Weight:
                <p>{{ char.genBlock.weight }}</p>
              </label>
            </b-col>
            <b-col xs="12" md="3">
              <label>
                Street Cred:
                <p>{{ char.genBlock.streetCred }}</p>
              </label>
              <label>
                Notoriety:
                <p>
                  {{ char.genBlock.notoriety }}
                </p>
              </label>
              <label>
                Public Awareness:
                <p>{{ char.genBlock.publicAwareness }}</p>
              </label>
              <label>
                Karma:
                <p>{{ char.genBlock.karma }}</p>
              </label>
              <label>
                Total Karma:
                <p>{{ char.genBlock.totalKarma }}</p>
              </label>
              <label>
                Miscellanious:
                <p>{{ char.genBlock.misc }}</p>
              </label>
            </b-col>
            <b-col xs="12" md="6" class="skillCols">
              <img
                class="charImg"
                style="margin: 25px 0px;"
                :src="char.portraitSrc"
                :alt="'Image of ' + char.genBlock.charName"
              />
            </b-col>
            <b-col>
              <p style="font-style:italic">
                "The lesson is this - the game is rigged. The cards are stacked.
                The dice are loaded. It's the same as it always was. Every
                cycle. People in power exert power. Little people cower in their
                homes, think what they're told to think, and buy whatever
                product will help them forget how horrible their lives are for
                another day. And that's why we don't *play* their fragging game.
                We don't swallow their drek sandwich and politely ask for
                another. It's why we run the shadows. That's where real life is,
                kiddo."
              </p>
              <p>--- Harlequin, Shadowrun Returns</p>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-tabs no-key-nav content-class="mt-3">
      <b-tab :title="'Attributes'">
        <!-- Attributes -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols>
                  <h3 class="shadowRunSectionHead">
                    Attributes
                  </h3>
                </b-col>

                <b-col
                  v-for="(value, name, index) in char.attributes"
                  :key="(name = index)"
                  xs="12"
                  md="3"
                >
                  <div>
                    <label class="inline-label"
                      >{{ getLabel(name, 1) }} :
                    </label>
                    <p>{{ value }}</p>
                    <hr />
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Skills'">
        <!-- Attributes -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols>
                  <h3 class="shadowRunSectionHead">
                    Skills
                  </h3>
                </b-col>
              </b-row>
              <b-row>
                <b-col xs="12"
                  ><div>
                    <b-table
                      striped
                      hover
                      stacked="md"
                      :items="char.skills"
                    ></b-table>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab :title="'Combat and Condition'">
        <!-- Combat and Condition -->
        <b-row>
          <b-col>
            <b-card class="b-cards">
              <b-row>
                <b-col cols>
                  <div style=" text-align: left;">
                    <h3
                      style="display:inline;"
                      class="shadowRunSectionHead"
                      v-b-toggle="'combatCollapse'"
                      @click="combatOpen = !combatOpen"
                    >
                      Core Combat Info
                    </h3>
                    <v-icon v-if="!combatOpen" role="tab"
                      >mdi-chevron-double-right</v-icon
                    >
                    <v-icon v-else-if="combatOpen"
                      >mdi-chevron-double-down</v-icon
                    >
                    <span
                      class="italics"
                      style="font-weight:normal;font-size: 12px;"
                      v-if="!combatOpen"
                      >(click to expand)</span
                    >
                  </div>
                </b-col>
              </b-row>
              <b-collapse id="combatCollapse">
                <b-row>
                  <b-col xs="12">
                    <h4>Primary Armor:</h4>
                    <div>
                      <b-table
                        striped
                        hover
                        stacked="md"
                        :items="char.coreCombatInfo.primaryArmor"
                      ></b-table>
                    </div>
                  </b-col> </b-row
                ><b-row>
                  <b-col xs="12">
                    <h4>Primary Ranged Weapon:</h4>
                    <div>
                      <b-table
                        striped
                        hover
                        stacked="md"
                        :items="char.coreCombatInfo.primaryRangedWeap"
                      ></b-table>
                    </div>
                  </b-col> </b-row
                ><b-row>
                  <b-col xs="12">
                    <h4>Primary Melee Weapon:</h4>
                    <div>
                      <b-table
                        striped
                        hover
                        stacked="md"
                        :items="char.coreCombatInfo.primaryMeleeWeap"
                      ></b-table>
                    </div>
                  </b-col>
                </b-row>
              </b-collapse>
              <hr />
              <b-row>
                <b-col cols>
                  <div style=" text-align: left;">
                    <h3
                      style="display:inline;"
                      class="shadowRunSectionHead"
                      v-b-toggle="'conditionCollapse'"
                      @click="conditionOpen = !conditionOpen"
                    >
                      Condition Monitor
                    </h3>
                    <v-icon v-if="!conditionOpen" role="tab"
                      >mdi-chevron-double-right</v-icon
                    >
                    <v-icon v-else-if="conditionOpen"
                      >mdi-chevron-double-down</v-icon
                    >
                    <span
                      class="italics"
                      style="font-weight:normal;font-size: 12px;"
                      v-if="!conditionOpen"
                      >(click to expand)</span
                    >
                  </div>
                </b-col>
              </b-row>
              <b-collapse id="conditionCollapse">
                <b-row>
                  <b-col xs="12">
                    <p style="font-style:italic;">
                      Notes: For every 3 boxes of damage on any one damage
                      track, the character takes a -1 Dice Pool modifier on
                      tests; these modifiers are cumulative within and across
                      damage tracks. See Wound Modifiers p.169.
                    </p>
                    <label>
                      Overflow:
                      <p stye="text-decoration:underline;">
                        {{ char.conditionMonitor.overflow }}
                      </p>
                    </label>
                  </b-col>
                  <b-col xs="12" md="4">
                    <h4>Physical Damage Track:</h4>
                    <div class="grid-wrapper">
                      <input
                        v-for="(record, index) in char.conditionMonitor
                          .physicalDmg.condition"
                        :key="index"
                        type="checkbox"
                        v-model="record.value"
                      />
                    </div>
                  </b-col>
                  <b-col xs="12" md="4">
                    <h4>Stun Damage Track:</h4>
                    <div class="grid-wrapper">
                      <input
                        v-for="(record, index) in char.conditionMonitor.stunDmg
                          .condition"
                        :key="index"
                        disabled
                        type="checkbox"
                        v-model="record.value"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-collapse>
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
      combatOpen: false,
      conditionOpen: false,
      attrMap: {
        body: 'Body',
        agility: 'Agility',
        reaction: 'Reaction',
        str: 'Strength',
        will: 'Will',
        log: 'Logic',
        intuit: 'Intuition',
        charisma: 'Charisma',
        edge: 'Edge',
        edgePoints: 'Edge Points',
        essence: 'Essence',
        magicResonance: 'Magic Resonance',
        init: 'Initiative',
        matrixInit: 'Matrix Initiative',
        astralInit: 'Astral Initiative',
        composure: 'Coposure',
        judgeIntent: 'Judge Intentions',
        memory: 'Memory',
        liftCarry: 'Lift/Carry',
        movement: 'Movement',
        physLimit: 'Physical Limit',
        mentalLimit: 'Mental Limit',
        socialLimit: 'Social Limit',
      },
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
  methods: {
    getLabel(inKey, type) {
      //Type 1 === Attributes
      if (type === 1) {
        return Object.values(this.attrMap)[inKey];
      }
    },
  },
};
</script>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.grid-wrapper > input {
  aspect-ratio: 1/1;
}
.shadowRunSectionHead {
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
}
p {
  margin-bottom: 4px !important;
  margin-top: 4px !important;
  font-weight: normal;
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

input[type='checkbox'] {
  -webkit-appearance: initial;
  appearance: initial;
  background: rgba(255, 255, 255, 0);
  border: 1px solid black;
  position: relative;
}
input[type='checkbox']:checked:after {
  content: 'X';
  font-size: 6rem;
  color: rgb(0, 0, 0);
  /* The following positions my tick in the center, 
     * but you could just overlay the entire box
     * with a full after element with a background if you want to */
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
