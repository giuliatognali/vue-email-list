const { createApp } = Vue

createApp({
    data() {
        return {
            emailsList: []
        }
    },

    beforeMount() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);
                    this.emailsList.push(response.data.response)
                });
        }
    }
}).mount('#app')