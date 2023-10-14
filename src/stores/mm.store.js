import { defineStore } from "pinia";

export const useMMStore = defineStore("mm", {
  state: () => {
    return {
      junior: null,
      juniors: [],
      seniors: [],
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
    clearJunior() {
      this.junior = null
    }
  },
  persist: true,
});
