<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(equipe, indice) in equipes"
        :key="indice"
      >
        <equipe :dados="equipe" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Equipe from "./Equipe.vue";
export default {
  name: "ListaEquipes",
  components: { Equipe },
  computed: {
    ...mapState(["equipes"]),
  },
};
</script>

<style>
</style>