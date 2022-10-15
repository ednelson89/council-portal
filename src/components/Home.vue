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
        <iframe
          src="https://calendar.google.com/calendar/embed?src=2m8k558h7sv5b6li9ggtg57k78%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
          style="border: 0"
          :width="windowWidth > 600 ? '100%' : ''"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters({
      activeUser: 'getActiveUser',
    }),
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
.bolded {
  font-weight: bold;
}
</style>
