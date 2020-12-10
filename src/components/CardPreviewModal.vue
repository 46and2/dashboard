<template>
  <div class="modal">
    <div @click.self="close" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button @click="close" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>{{ content }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPreviewModal',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    content: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>
