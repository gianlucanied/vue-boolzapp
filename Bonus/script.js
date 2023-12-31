const { createApp } = Vue;
createApp({
    data() {
        return {
            
            // Impostiamo quale chat visualizzare all'inizio
            activeContact: 0,

            // Creiamo una variabile per cercare la chat che ci interessa tra tutte
            cercaLettere: '',

            // Creiamo la proprietà dell'oggetto
            currentConversation: {},

            // Array
            contacts: [
                {
                    name: 'Kaneki',
                    avatar: 'img/kaneki.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Sukuna',
                    avatar: 'img/sukuna.webp',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Satoru Gojo',
                    avatar: 'img/Satoru_Gojo.webp',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Tanjiro',
                    avatar: 'img/Tanjiro_kamado.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Zoro',
                    avatar: 'img/zoro.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Kaido',
                    avatar: 'img/kaido.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Kakashi',
                    avatar: 'img/Kakashi_Hatake.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luffy',
                    avatar: 'img/luffy.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    
                }
            ]
            
            
            
        }
    },

    // Creiamo una funzione che cerchi i nomi nella barra in alto a sinistra mentre digitiamo
    computed: {
        contattiCercati() {
          return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.cercaLettere.toLowerCase())
          );
        },
      },

    mounted() {
        // Inizializziamo la conversazione
        this.currentConversation = this.contacts[0];
    },
    methods: {

        // Cambiamo la conversazione quando clicchiamo su una chat diversa
        changeConversation(contact) {
            this.currentConversation = contact;
        },

        // Creiamo un metodo per inviare il messaggio
        addSentMessage() {

            // Controlliamo se il messaggio è vuoto o contiene solo spazi
            if (this.newSentMessage.trim() === "") {

              // Se il messaggio è vuoto o contiene solo spazi, allora usciamo dalla funzione
              return;
            }
        
            // Altrimenti inviamo il messaggio
            const sentMessage = {
              message: this.newSentMessage,
              status: 'sent',

              //Aggiungiamo la data e l'ora
              date: new Date().toLocaleString(),
            };

                // Pushiamo nell'array il nostro nuovo messaggio
                this.currentConversation.messages.push(sentMessage);
                // Cancelliamo dopo che il messaggio è stato inviato
                this.newSentMessage = "";

                // Impostiamo un timer di 1 secondo che ci faccia ricevere un messaggio dopo che noi ne inviamo uno
                setTimeout(() => {

                    // Chiamiamo con axios una frase random di risposta
                    axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
                    
                        .then((response) => {
                            // Prendiamo la frase creata random tramite axios
                            const testoMessaggioRandom = response.data.response;
                
                            // Creaiamo un oggetto con il messaggio
                            const receivedMessage = {
                                message: testoMessaggioRandom,
                                status: 'received',
                                date: new Date().toLocaleString(),
                            };
                
                            // Pushare nell'array il messaggio ricevuto
                            this.currentConversation.messages.push(receivedMessage);
                        })
                }, 1000); 
        },
        
    },
}).mount('#app')