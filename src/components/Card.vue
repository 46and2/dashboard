<template>
  <article class="message">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body">
      {{ content }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style></style>
