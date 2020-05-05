<template>
  <div class="hello">
    <ul>
      <li v-for="rawMessage in lastMessages" v-bind:key="rawMessage.timetoken">{{message}}</li>
    </ul>
    <button v-on:click="push()">Publish</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      lastMessages: this.$pnGetMessage("general")
    };
  },
  methods: {
    push() {
      this.$pnPublish({
        channel: "general",
        message: new Date().getTime()
      });
    }
  },
  mounted() {
    this.$pnSubscribe({
      channels: ["general"]
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
