import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    titulo: "## Emergências Médicas ##",
    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      carro: "",
      telefone: "",
      kitDeReanimacao: "",
    },
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: [],
    },
  },
  getters: {
    totalEnfermeiros(state) {
      return state.enfermeiros.length;
    },
    socorristasPorTurno(state) {
      //closure - retorno de uma função para receber o parametro
      return (turno) =>
        !turno
          ? state.socorristas
          : state.socorristas.filter((s) => s.turno === turno);
    },
    totalSocorristas: (state) => state.socorristas.length,
    totalSocorristasPorTurno: (state, getters) => (turno) =>
      getters.socorristasPorTurno(turno).length,
  },
  mutations: {
    //setItemEquipe: (state, item) => {
    setItemEquipe: (state, payload) => {
      // posso destruturar o que quero ao invés de trazer o payload completo. ex. { item, abc }
      console.log(payload);
      let t = payload.item.tipo;
      let d = payload.item.dados;

      if (t == "enfermeiros") state.equipe.enfermeiro = d.nome;
      if (t == "socorristas") state.equipe.socorrista = d.nome;
      if (t == "medicos") state.equipe.medico = d.nome;
      if (t == "carros") state.equipe.carro = d.placa;
      if (t == "telefones") state.equipe.telefone = d.telefone;
      if (t == "kits-de-reanimacao") state.equipe.kitDeReanimacao = d.kit;
    },
    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
      // console.log("Estamos em uma mutation", payload);
    },
    setSocorristas: (state, payload) => {
      state.socorristas = payload;
    },
    setMedicos: (state, payload) => {
      state.medicos = payload;
    },
    setEquipamentos: (state, payload) => {
      state.equipamentos.carros = payload.carros;
      state.equipamentos.telefones = payload.telefones;
      state.equipamentos.kitsDeReanimacao = payload.kitsDeReanimacao;
    },
    setCarros: (state, payload) => {
      state.equipamentos.carros = payload;
    },
    setTelefones: (state, payload) => {
      state.equipamentos.telefones = payload;
    },
    setKitsDeReanimacao: (state, payload) => {
      state.equipamentos.kitsDeReanimacao = payload;
    },
  },
  actions: {
    adicionarEquipamentos(context, { carros, kitsDeReanimacao, telefones }) {
      context.commit("setCarros", carros);
      // processamento assincrono
      context.commit("setTelefones", telefones);
      // processamento assincrono
      // diversas regras de negócio
      context.commit("setKitsDeReanimacao", kitsDeReanimacao);
    },
  },
});
