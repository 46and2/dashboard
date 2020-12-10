<template>
  <div class="container">
    <TheHeader />
    <div class="columns is-multiline">
      <CardList v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import CardList from '@/components/CardList';

export default {
  name: 'Home',
  components: {
    TheHeader,
    CardList
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  }
};
</script>
