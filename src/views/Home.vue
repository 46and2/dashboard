<template>
  <div class="container">
    <MainHeader />
    <div class="columns">
      <div class="column">
        <Card title="Test" content="lorem ipsum" />
      </div>
      <div class="column">
        <Card title="Test" content="lorem ipsum" />
        <Card title="Test" content="lorem ipsum" />
        <Card title="Test" content="lorem ipsum" />
      </div>
      <div class="column">
        <Card title="Test" content="lorem ipsum" />
        <Card title="Test" content="lorem ipsum" />
      </div>
      <div class="column">
        <Card title="Test" content="lorem ipsum" />
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import Card from '@/components/Card';

export default {
  name: 'Home',
  components: {
    MainHeader,
    Card
  }
};
</script>
