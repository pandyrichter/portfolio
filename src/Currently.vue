<template>
  <div class="currently">
    <div>Currently reading: {{ book }}</div>
    <div>Currently skiing: {{ skiing.mountain }} | {{ skiing. runs }}</div>
    <div>Project: {{ project }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      book: 'Rise and Fall',
      skiing: {
        mountain: 'Copper',
        vertical: '16,000ft',
        runs: 12
      },
      project: 'ABC'
    }
  }
}
</script>

<style>
.currently {
  display: flex;
}
</style>
