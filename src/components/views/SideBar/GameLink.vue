<template>
  <div>
    <v-list-item>
      <v-list-item-title style="font-weight:bold"
        >Game Links:</v-list-item-title
      >
    </v-list-item>

    <v-list dense>
      <v-list-item
        v-for="item in gameItems"
        :key="item.title"
        link
        @click="$router.push({ path: item.path })"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {
  mdiShieldOutline,
  mdiSword,
  mdiFeather,
  mdiLibraryBooks,
  // mdiDiceD20Outline,
} from '@mdi/js';

export default {
  data() {
    return {
      gameItems: [
        {
          title: 'Game Hub',
          icon: mdiShieldOutline,
          path: '/game-hub',
        },
        {
          title: 'Characters',
          icon: mdiSword,
          path: '/game-characters',
        },
        { title: 'Journal', icon: mdiFeather, path: '/game-journal-view' },
        { title: 'Wiki', icon: mdiLibraryBooks, path: '/game-wiki-view' },
        /* {
          title: 'Game Table',
          icon: mdiDiceD20Outline,
          path: '/game-table',
        }, */
      ],
    };
  },
};
</script>
