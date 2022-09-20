<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: {{ xyz.enfermeiro }}</p>
        <p>Socorrista: {{ socorrista }}</p>
        <p>Médico: {{ medico }}</p>
        <p>Carro: {{ carro }}</p>
        <p>Telefone: {{ xyz.telefone }}</p>
        <p>Kit de reanimação: {{ xyz.kitDeReanimacao }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulancias/indefinida.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ConfiguracaoEquipe",
  // computed: mapState(["equipe"]),
  // computed: {
  //   e() {
  //     return this.$store.state.equipe;
  //   },
  // },
  computed: mapState({
    xyz: (state) => state.equipe,
    enfermeiro: (state) => state.equipe.enfermeiro,
    socorrista: (state) => state.equipe.socorrista,
    medico: (state) => state.equipe.medico,
    carro: (state) => state.equipe.carro,
    telefone: (state) => state.equipe.telefone,
    kitDeReanimacao: (state) => state.equipe.kitDeReanimacao,
  }),
};
</script>
