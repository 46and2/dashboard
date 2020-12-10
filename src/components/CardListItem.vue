<template>
  <article :class="`message ${theme} card-item`">
    <div class="message-header">
      <p>{{ title }}</p>
    </div>
    <div class="message-body card-item__content">
      {{ content }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'CardListItem',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false,
      default: ''
    },
    theme: {
      type: String,
      required: false,
      default: 'is-dark'
    }
  }
};
</script>

<style lang="scss" scoped>
.card-item {
  height: 160px;
  &__content {
    max-height: calc(1.8rem * 3);
    overflow: hidden;
  }
}
</style>
