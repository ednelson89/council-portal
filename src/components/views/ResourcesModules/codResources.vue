<template>
  <div>
    <b-row>
      <b-col cols="4">
        <h3>Source Books</h3>
        <p v-for="(resource, index) in codResources" :key="index">
          <a :href="resource.link" target="_blank">{{resource.title}}</a>
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Beginner's Guides</h3>
        <iframe
          style="margin: 0 auto"
          width="640"
          height="390"
          src="https://www.youtube.com/embed/videoseries?list=PLpc2jBNybedt_smCqAjn0JCfG8a_be4va"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { codResources } from "@/components/modules/Resources/resourcesCoD.js";

export default {
  data() {
    return {
      codResources
    };
  }
};
</script>

<style >
</style>