<template>
  <full-page-loader v-if="!items.length" />
  <div v-else class="scrollWrapper albums-page">
    <artwork-and-title
      class="albums-margin"
      v-for="item in items"
      :key="item.id"
      :item="item"
      :type="item.type.slice(0, -1)"
    />
  </div>
</template>

<script>
import FullPageLoader from '@/components/FullPageLoader';
import ArtworkAndTitle from '@/components/ArtworkAndTitle';
export default {
  name: 'RecentlyAdded',
  components: { ArtworkAndTitle, FullPageLoader },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetchRecentlyAdded() {
      try {
        await MusicKit.getInstance()
          .api.library.collection('recently-added')
          .then((items) => {
            this.items = items;
          });
      } catch (e) {
        this.$swal({
          type: 'error',
          title: e.name,
          text: e.message,
        });
      }
    },
  },
  created() {
    this.fetchRecentlyAdded();
  },
};
</script>
