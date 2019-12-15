<template>
  <div>
    <b-row>
      <b-col cols="6">
        <h3>Source Books</h3>
        <p v-for="(resource, index) in dnd5e.sourceBooks" :key="index">
          <a :href="resource.link" target="_blank">{{resource.title}}</a>
        </p>
      </b-col>
      <b-col cols="6">
        <h3>Supplemental Materials</h3>
        <p v-for="(resource, index) in dnd5e.supplemental" :key="index">
          <a :href="resource.link" target="_blank">{{resource.title}}</a>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import dnd5eResources from "@/components/modules/Resources/resourcesD&D.js";

export default {
  data() {
    return {
      dnd5e: dnd5eResources
    };
  }
};
</script>

<style >
</style>