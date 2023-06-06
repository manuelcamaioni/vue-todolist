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
        deleteTask(index, array) {
            array.splice(index, 1);
        },

        addToList(string) {
            this.toDoList.push({ text: string, completed: false });
            this.newString = ""; // resetta l'input value perche' il v-model ha come valore newObject, quindi quando l'evento si attiva, pusha l'oggetto con {text:obj} che ha preso il valore di newObject
        },
    },
}).mount("#app");
