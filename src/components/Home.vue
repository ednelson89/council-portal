<template>
  <div>
    <b-row>
      <b-col cols="8">
        <br />
        <h1>Council Chambers</h1>
      </b-col>
    </b-row>
    <hr style="width:90%" />
    <b-row>
      <b-col cols="12">
        <p>Welcome to the Council of Bros Web Portal.</p>
        <p>
          This application is a single page app designed to provide a
          collaboration hub for character sheets and game materials for commonly
          played Tabletop RPGs. Users can add characters to a private character
          bank, as well as add characters, journal entries, and wikis to custom
          games.
        </p>
      </b-col>
    </b-row>
    <hr style="width:90%;" />
    <b-row v-if="activeUser.userChars[0]">
      <b-col cols>
        <h2>Upcoming:</h2>
        <p class="bolded">February-</p>
        <ul>
          <li>
            <p>Saturday 20: Session 0, Mage</p> 
          </li>
          <li>
            <p>Saturday 27: Curse of Strahd</p>
          </li>
        </ul>
        <p class="bolded">March-</p>
        <ul>
          <li>
            <p>Saturday 6,20: Mage</p> 
          </li>
          <li>
            <p>Saturday 13,27: Curse of Strahd</p>
          </li>
        </ul>
        <p class="bolded">April-</p>
        <ul>
          <li>
            <p>Saturday 3,17: Session 0, Mage</p> 
          </li>
          <li>
            <p>Saturday 10,24: Curse of Strahd</p>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters({
      activeUser: "getActiveUser",
    }),
  },
};
</script>

<style scoped>
.bolded {
  font-weight: bold;
}
</style>
