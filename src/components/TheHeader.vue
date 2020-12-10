<template>
  <nav class="navbar mb-3" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'Home' }" class="navbar-item">
        <p class="title">Dashboard</p>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <label class="checkbox">
            <input
              :checked="isDNDEnabled"
              @change="toggleDragAndDrop(!isDNDEnabled)"
              type="checkbox"
            />
            Drag'n'Drop
          </label>
        </div>
        <div class="navbar-item">
          <router-link :to="{ name: 'CreateNew' }" class="button is-primary"
            >New</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'TheHeader',
  computed: {
    isDNDEnabled() {
      return this.$store.state.dragAndDrop;
    }
  },
  methods: {
    ...mapActions(['toggleDragAndDrop'])
  }
};
</script>

<style></style>
