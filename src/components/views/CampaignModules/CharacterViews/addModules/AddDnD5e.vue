<template>
  <div>
    <b-row>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import { charDnD5e } from "@/components/modules/CharacterObjects/characterD&D.js";

export default {
  data() {
    return {
      char: charDnD5e()
    };
  }
};
</script>

<style>
</style>