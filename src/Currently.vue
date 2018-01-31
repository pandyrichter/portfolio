<template>
  <div class="currently">
    <div>CURRENTLY:</div>
    <div>Reading: {{ book }}</div>
    <div>Skiing: {{ skiing.mountain }} | {{ skiing. runs }}</div>
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
  border-top: 1px solid teal;
  border-bottom: 1px solid teal;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 10px 0px;
}
</style>
