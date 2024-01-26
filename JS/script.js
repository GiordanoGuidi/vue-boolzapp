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
        }
    },
    computed:{
      //CONTATTO ATTIVO
      currentContact(){
        return this.contacts.find(contact=> contact.id === this.activeId)
      },
      // MESSAGGI DEL CONTATTO ATTIVO
      currentContactMessages(){
        console.log(this.currentContact.messages)
        return this.currentContact.messages
      },
      
      //ARRAY FILTRATO IN BASE AL RESERCHTEXT
      filteredContacts(){
        const searchTerm = this.reserchText.toLowerCase();
          const filteredArray = this.contacts.filter(contact=>
          contact.name.toLowerCase().includes(searchTerm)
          );
            return filteredArray;
      }


    },
    methods:{
      //RECUPERO ID DEL CONTATTO
      getActiveId(contact){
        this.activeId = contact.id;
      },
      
      // AGGIUNGO IL NUOVO MESSAGGIO NELLA LISTA MESSAGGI CONTATTO ATTIVO
      addNewMessage(){
        if(!this.newMessage)return;
        const message = {
          text:this.newMessage,
          status:'received',
        }
        this.currentContactMessages.push(message)
        console.log('sono current chat', this.currentContactMessages)
        this.newMessage ='';
      },

      //GENERO MESSAGGIO AUTOMATICO DI RISPOSTA
      autoReplyMessage(){
        const replymessage={
          text:'ok',
          status:'sent',
        }
      this.currentContactMessages.push(replymessage)
      },

     //INSERISCO MESSAGGIO AUTOMATICO IN SET
      addTimeOut(){
        setTimeout(this.autoReplyMessage,1000)
      },

      



    },

  });
  app.mount('#root');