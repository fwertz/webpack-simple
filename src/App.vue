<template>
  <marquee behavior="" direction="">{{message}}</marquee>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: `They're eating her, and then they're gonna' eat me! Oh my`
  }),
  computed: {
    message () {
      let o = Array( 100 ).fill().map( () => 'o' ).join( '' );
      return `${this.msg} G${o}d!!!`;
    }
  }
}
</script>

<style lang="scss">

</style>
