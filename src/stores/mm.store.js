import { defineStore } from "pinia";

export const useMMStore = defineStore("store", {
  state: () => {
    return {
      junior: null,
      taJunior: null,
      juniors: [],
      seniors: [],
      fseniors: [],
      tasks: [],
      ftasks: [],
      selectedTask: null,
    };
  },
  actions: {
    setSenior(payload) {
      if (!this.seniors.includes(payload)) {
        this.seniors.push(payload);
      }
    },
    setTask(payload) {
      if (!this.tasks.includes(payload)) {
        this.tasks.push(payload);
      }
    },
    updateTask(payload) {
      this.tasks = [
        ...this.tasks?.filter((t) => t?.id !== payload?.id),
        payload,
      ];
    },
    setSelectedTask(payload) {
      this.selectedTask = payload;
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
      this.junior = null;
    },    
    clearTaJunior() {
      this.taJunior = null;
    },
    clearftasks() {
      this.ftasks = [];
    },
    clearfSeniors() {
      this.fseniors = [];
    },
    findSeniors(data) {
      this.fseniors.push(data);
    },    
    findTask(data) {
      this.ftasks.push(data);
    },
  },
  persist: true,
});
