<script>
export default {
  //Created will be used to update player data model
  created() {
    // eslint-disable-next-line no-console
    console.log("Conversion Begins");
    // if the first element of the array is a string, they all are, and need to be converted
    let tempBuild = [];
    //General Stats
    //Frailties
    if (typeof this.char.combatStats.frailties[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion frailties");
      tempBuild = [];
      this.char.combatStats.frailties.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.combatStats.frailties = tempBuild;
    }
    //Aspirations
    if (typeof this.char.combatStats.aspirations[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion aspirations");
      tempBuild = [];
      this.char.combatStats.aspirations.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.combatStats.aspirations = tempBuild;
    }
    //Conditions
    if (typeof this.char.combatStats.conditions[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion conditions");
      tempBuild = [];
      this.char.combatStats.conditions.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.combatStats.conditions = tempBuild;
    }
    //Regalia
    if (typeof this.char.combatStats.favRegalia[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion favRegalia");
      tempBuild = [];
      this.char.combatStats.favRegalia.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.combatStats.favRegalia = tempBuild;
    }
    //Touchstones
    if (typeof this.char.combatStats.touchstones[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion touchstones");
      tempBuild = [];
      this.char.combatStats.touchstones.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.combatStats.touchstones = tempBuild;
    }

    //Expanded Merits
    //Fae Mounts
    if (typeof this.char.expandedMerits.faeMounts[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion faemounts");
      tempBuild = [];
      this.char.expandedMerits.faeMounts.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.expandedMerits.faeMounts = tempBuild;
    }
    //Mantles
    if (typeof this.char.expandedMerits.mantles[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion mantles");
      tempBuild = [];
      this.char.expandedMerits.mantles.forEach(mantle => {
        tempBuild.push({ desc: mantle });
      });
      this.char.expandedMerits.mantles = tempBuild;
    }
    //Hollows
    if (typeof this.char.expandedMerits.hollows[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion hollows");
      tempBuild = [];
      this.char.expandedMerits.hollows.forEach(hollow => {
        tempBuild.push({ desc: hollow });
      });
      this.char.expandedMerits.hollows = tempBuild;
    }
    //Tokens
    if (typeof this.char.expandedMerits.tokens[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion tokens");
      tempBuild = [];
      this.char.expandedMerits.tokens.forEach(token => {
        tempBuild.push({ desc: token });
      });
      this.char.expandedMerits.tokens = tempBuild;
    }
    //Other Traits
    //Seeming Blessings
    if (typeof this.char.otherTraits.seemingBless[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion seemingBless");
      tempBuild = [];
      this.char.otherTraits.seemingBless.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.otherTraits.seemingBless = tempBuild;
    }
    //Seeming Curse
    if (typeof this.char.otherTraits.seemingCurse[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion seeeming Curse");
      tempBuild = [];
      this.char.otherTraits.seemingCurse.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.otherTraits.seemingCurse = tempBuild;
    }
    //Kith Blessing
    if (typeof this.char.otherTraits.kithBless[0] === "string") {
      // eslint-disable-next-line no-console
      console.log("Conversion kithBless");
      tempBuild = [];
      this.char.otherTraits.kithBless.forEach(record => {
        tempBuild.push({ desc: record });
      });
      this.char.otherTraits.kithBless = tempBuild;
    }
    // eslint-disable-next-line no-console
    console.log("Conversion Completed");
  }
};
</script>