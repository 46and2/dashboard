<template>
  <div class="container">
    <TheHeader />
    <div class="columns is-multiline">
      <CardList
        v-for="list in lists"
        :key="list.id"
        :list="list"
        @preview="openPreviewModal"
      />
    </div>
    <CardPreviewModal
      @close="closePreviewModal"
      :class="{ 'is-active': preview.open }"
      :title="preview.title"
      :content="preview.content"
    />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import CardList from '@/components/CardList';
import CardPreviewModal from '@/components/CardPreviewModal';

export default {
  name: 'Home',
  components: {
    TheHeader,
    CardList,
    CardPreviewModal
  },
  data() {
    return {
      preview: {
        open: false,
        title: '',
        content: ''
      }
    };
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  },
  methods: {
    openPreviewModal({ title, content }) {
      this.preview.title = title;
      this.preview.content = content;
      this.preview.open = true;
    },
    closePreviewModal() {
      this.preview = {
        title: '',
        content: '',
        open: false
      };
    }
  }
};
</script>
