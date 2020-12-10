<template>
  <div class="container">
    <div class="box m-3">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            v-model.trim="newCard.title"
            class="input"
            :class="{ 'is-danger': error }"
            type="text"
            placeholder="Card title"
            @input="error = false"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea
            v-model="newCard.content"
            class="textarea"
            placeholder="Card content"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="createCard" class="button is-link">Create</button>
        </div>
        <div class="control">
          <button @click="goHome" class="button is-link is-light">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';
export default {
  name: 'CreateCardView',
  data() {
    return {
      newCard: {
        title: '',
        content: ''
      },
      error: false
    };
  },
  methods: {
    ...mapActions(['createNewCard']),
    createCard() {
      if (this.newCard.title) {
        this.createNewCard({ ...this.newCard, id: uuidv4(), list: 1 });
        this.goHome();
      } else {
        this.error = true;
      }
    },
    goHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style></style>
