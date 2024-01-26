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
      
      // CREO FUNZIONE CHE GENERA IL MESSAGGIO 
      addNewMessage(text,status){
        const message = {
          text,
          status
        }
        this.currentContactMessages.push(message)
        console.log('sono current chat', this.currentContactMessages)
        this.newMessage ='';
      },

      /* CREO FUNZIONE CHE INVOCA LA FUNZIONE CHE GENERA IL MESSAGGIO
      E AGGIUNGO SET TIMEOUT PER LA RISPOSTA*/
      sendMessage(){
        if(!this.newMessage)return;
        this.addNewMessage(this.newMessage,'received')
        setTimeout(()=>{
          this.addNewMessage('ok','sent');
        },1000)},
    
    
    
    },
      

     

    
 });
  app.mount('#root');