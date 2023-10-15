import { defineStore } from "pinia";

export const useMMStore = defineStore("mm", {
  state: () => {
    return {
      junior: null,
      taJunior: null,
      juniors: [],
      seniors: [],
      fseniors: [],
    };
  },
  actions: {
    setSenior(payload) {
      if (!this.seniors.includes(payload)) {
        this.seniors.push(payload);
      }
    },
    setJuniors(payload) {
      if (!this.juniors.includes(payload)) {
        this.juniors.push(payload);
      }
    },
    setJunior(payload) {
      this.junior = payload;
    },
    setTAJunior(payload) {
      this.taJunior = payload;
    },
    clearJunior() {
      this.junior = null
    },
    clearfSeniors() {
      this.fseniors = []
    },
    findSeniors(data) {
      this.fseniors.push(data)
    }
  },
  persist: true,
});
