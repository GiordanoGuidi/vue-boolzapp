console.log('Vueok',Vue)
const { user, contacts} = data;

const {createApp} = Vue
const app = createApp({
    data(){
        return{
          user,
          contacts,
          activeId: 1,
          newMessage:'',
          reserchText:'',


          hasSearchMessage:false,
          reserchMessageText:'',
          hasFullContent:false
        }
    },
    computed:{

    //#COMPUTED---------------------------------
    // MESSAGGI DEL CONTATTO ATTIVO
    currentContactMessages(){
      return this.currentContact.messages;
    },
    //CONTATTO ATTIVO
    currentContact(){
      return this.contacts.find(contact=> contact.id === this.activeId)
    },
    
    //ARRAY FILTRATO IN BASE AL RESERCHTEXT
    reserchedContacts(){
      const searchTerm = this.reserchText.toLowerCase();
      const filteredArray = this.contacts.filter(contact=>
        contact.name.toLowerCase().includes(searchTerm)
        );
        return filteredArray;
      },
    },
    methods:{
      
      //#METHODS----------------------
      //RECUPERO ID DEL CONTATTO
      getActiveId(contact){
        this.activeId = contact.id;
      },
      
      
      // CREO FUNZIONE CHE GENERA IL MESSAGGIO 
      addNewMessage(text,status){
        const message = {
          id:new Date().getTime(),
          date: new Date().toLocaleTimeString(),
          text,
          status
        }        
        this.currentContactMessages.push(message)
        this.newMessage ='';
      },
      
      /* CREO FUNZIONE CHE INVOCA LA FUNZIONE CHE GENERA IL MESSAGGIO
      E AGGIUNGO SET TIMEOUT PER LA RISPOSTA*/
      sendMessage(){
        if(!this.newMessage)return;
        this.addNewMessage(this.newMessage,'received');
        setTimeout(()=>{
          this.addNewMessage('ok','sent');
        },1000)},
        

          


        // RECUPERO IL TESTO DELL'ULTIMO MESSAGGIO DEL CONTATTO
        getLastMessage(contact){
          const lastMessage = contact.messages[contact.messages.length - 1]
          return lastMessage
        },

        //CREO FUNZIONE CHE CAMBIA IL VALORE DI HAS SEARCH MESSAGE
        changeHasSearchMessage(){
          this.hasSearchMessage = true;
        },

        //!CREO ARRAY CHE FILTRA IL TESTO DEL MESSAGGIO CERCATO
        //!(STESSA DIFFICOLTA' DELLA RIMOZIONE MESSAGGIO)

        
        //TOGGLE HASFULLCONTENT
       toggleHasFullContent(){
        this.hasFullContent = !this.hasFullContent
       }
        

        
    },       
      
      
    created(){
      
    }
    });
    app.mount('#root');