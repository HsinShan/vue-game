<template>
  <v-container>
    <v-btn class="ma-2" color="secondary" @click="goNext(1)">轉輪盤</v-btn>
    <v-btn color="blue-grey" class="ma-2 white--text">從天而降</v-btn>
    <v-btn class="ma-2" color="success">抽紅包</v-btn>
    <v-btn class="ma-2" color="info" @click="goNext(4)">刮刮樂</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),
  methods: {
    goNext(nextIndex) {
      let nextPageName = null
      switch(nextIndex){
        case 1:
          nextPageName = "Turnable"
          break
        case 4:
          nextPageName = "Scratchcard"
          break
      }
      this.$router.push({name: nextPageName})
    }
  }
};
</script>
