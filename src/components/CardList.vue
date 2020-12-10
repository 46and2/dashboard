<template>
  <div class="column is-one-quarter cards-list">
    <Draggable
      :value="currentListCards"
      group="cards"
      @change="handleDrag"
      class="box cards-list__draggable"
      :disabled="!isDNDEnabled"
    >
      <CardListItem
        v-for="card in currentListCards"
        :key="card.id"
        :title="card.title"
        :content="card.content"
        :theme="list.theme"
        @click.native="openCardPreview(card)"
      />
    </Draggable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Draggable from 'vuedraggable';
import CardListItem from '@/components/CardListItem';

export default {
  name: 'CardList',
  components: { Draggable, CardListItem },
  props: {
    list: {
      type: Object,
      required: true
    },
    cards: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(['cardsByLists']),
    isDNDEnabled() {
      return this.$store.state.dragAndDrop;
    },
    currentListCards() {
      return this.cardsByLists[this.list.id] || [];
    }
  },
  methods: {
    ...mapActions(['moveToList']),
    handleDrag(event) {
      let movedCard = event && event.added && event.added.element;

      movedCard &&
        this.moveToList({
          cardID: movedCard.id,
          newListID: this.list.id
        });
    },
    openCardPreview({ title, content }) {
      this.$emit('preview', { title, content });
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-list {
  &__draggable {
    min-height: 200px;
  }
}
</style>
