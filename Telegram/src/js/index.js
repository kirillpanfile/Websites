const app = Vue.createApp({
    data() {
        return {
            persons: [],
            temp : [],
        }
    },
    created () {
        fetch('https://randomuser.me/api/?results=40')
            .then(response => response.json())
            .then(json => {
                this.persons = json.results
                console.log(json.results);
            })
    },
    computed: {
        sliceArray() {
            return this.persons.slice(0,1)
        },
        secItem () {
           return this.persons[1]
            
        }
    },
}).mount('#app')
