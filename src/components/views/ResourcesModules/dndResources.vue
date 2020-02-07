<template>
  <div>
    <b-row>
      <b-col cols="4">
        <h3>Source Books</h3>
        <p v-for="(resource, index) in dnd5e.sourceBooks" :key="index">
          <a :href="resource.link" target="_blank">{{resource.title}}</a>
        </p>
      </b-col>
      <b-col cols="8">
        <h3>Supplemental Materials</h3>
        <p v-for="(resource, index) in dnd5e.supplemental" :key="index">
          <a :href="resource.link" target="_blank">{{resource.title}}</a>
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Handbooker Helper Tutorials</h3>
        <iframe
          style="margin: 0 auto"
          width="640"
          height="390"
          src="https://www.youtube.com/embed/videoseries?list=PL1tiwbzkOjQyr6-gqJ8r29j_rJkR49uDN"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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