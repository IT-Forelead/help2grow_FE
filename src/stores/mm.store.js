import { defineStore } from "pinia";

export const useMMStore = defineStore("store", {
  state: () => {
    return {
      junior: null,
      taJunior: null,
      juniors: [],
      seniors: [
        {
          "name": "Jumaniyozov Suroj",
          "skills": [
            "Работа в команде",
            "HTML",
            "CSS",
            "TailwindCss",
            "JavaScript",
            "TypeScript",
            "VueJS"
          ]
        },
        {
          "name": "Og'abek Shomurotov",
          "skills": [
            "Linux",
            "Docker",
            "Elasticsearch",
            "AWS",
            "Kubernetes",
            "Git",
            "Jira"
          ]
        },
        {
          "name": "Doniyor Khujamov",
          "skills": [
            "PostgreSQL",
            "Jira",
            "GitHub",
            "Java",
            "Kotlin",
            "Android",
            "Bootstrap"
          ]
        },
        {
          "name": "Maftunbek Raxmatov",
          "skills": [
            "SCALA",
            "PostgreSQL",
            "GraphQL",
            "Cats",
            "Cats-effect",
            "Http4s",
            "Fs2",
            "Skunk"
          ]
        },
        {
          "name": "Bekturdi Yuldashev",
          "skills": [
            "SCALA",
            "REST API",
            "Git",
            "PostgreSQL",
            " Cassandra",
            " Play Framework",
            " Doobie"
          ]
        },
        {
          "name": "Behruz Boltayev",
          "skills": [
            "GraphQL",
            "DevOps",
            "PostgreSQL",
            "Docker",
            "AWS",
            "SCALA",
            "Linux"
          ]
        }
      ],
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
