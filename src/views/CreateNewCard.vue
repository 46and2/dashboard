<template>
  <div class="container">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="newCard.title"
          class="input"
          type="text"
          placeholder="Card title"
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
        <button @click="cancel" class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateNewCard',
  data() {
    return {
      newCard: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    createCard() {
      console.log(this.newCard);
    },
    cancel() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style></style>
