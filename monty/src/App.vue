

<template>
  <div id="app">
    <h1>problema monty hall</h1>
    <div class="form">
      <div v-if="!started">
        <label for="qtdePortas"> quantas portas ? </label>
        <input
          type="text"
          id="qtdePortas"
          size="3"
          v-model.number="qtdePortas"
        />

        >
      </div>
      <div v-if="!started">
        <label for="selectedPort"> qual porta é o presente</label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <button v-if="!started" @click="started = true">iniciar o jogo</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>

    <div class="doors" v-if="started">
        <div v-for="i in qtdePortas " :key="i">
            <Door :hasGift="i === selectedPort"  :number="i" />
        </div>
    </div>
  </div>
</template>
<script >
import Door from "./components/Door.vue";

export default {
  name: "App",
  components: { Door },
  data: function () {
    return {
      started: false, // quando o jogo não tiver inicializado
      qtdePortas: 3,
      selectedPort: null,
    };
  },
};
</script>



<style css>
@import url("https://fonts.googleapis.com/css2?family=Ysabeau+Infant:wght@500&display=swap");
* {
  box-sizing: border-box;
  font-family: "Ysabeau Infant", sans-serif;
}

body {
  background-color: aquamarine;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid black;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}


.doors {
  display: flex;
  justify-content: space-around;
  padding-top:5% ;
  align-items: center;
  flex-wrap: wrap;


}
</style>
