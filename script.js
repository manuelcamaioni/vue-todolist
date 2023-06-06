const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                { text: "Fare la spesa", completed: false },
                { text: "Pulire la casa", completed: false },
                { text: "Preparare la cena", completed: false },
                { text: "Fare esercizio fisico", completed: false },
                { text: "Leggere un libro", completed: false },
            ],
        };
    },
    methods: {
        toggleTask(element, index) {
            element = this.toDoList[index];
            element.completed = !element.completed;

            return element;
        },
        deleteTask(element, index) {
            element = this.toDoList[index];
            array.splice(element[index], 1);
        },

        addToList(obj) {
            this.toDoList.push({ text: obj, completed: false });
            this.newObject = "";
        },
    },
}).mount("#app");
