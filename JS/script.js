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
          validMessages:[],
        }
    },
    computed:{

    //#COMPUTED---------------------------------
      //CONTATTO ATTIVO
      currentContact(){
        return this.contacts.find(contact=> contact.id === this.activeId)
      },
      // MESSAGGI DEL CONTATTO ATTIVO
      currentContactMessages(){
        return this.currentContact.messages;
      },
      
      //ARRAY FILTRATO IN BASE AL RESERCHTEXT
      filteredContacts(){
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
          this.addNewMessage(this.newMessage,'received')
          setTimeout(()=>{
            this.addNewMessage('ok','sent');
          },1000)},
          
          
          
          // deleteMessage(id){
            
          //   this.currentContactMessages = this.currentContactMessages.filter(message =>{
          //     if(id !== message.id){
          //       return true
          //     }else{
          //       return false
          //     }
          //   })
            
          //   console.log('id', id,'lista messaggi-----',
          //   this.currentContactMessages,'messaggi validi----',
          //   this.currentContactMessages,'eo', this.currentContact)
          // },
          
          // RECUPERO IL TESTO DELL'ULTIMO MESSAGGIO DEL CONTATTO
          lastMessage(contact){
          const lastMessage = contact.messages[contact.messages.length - 1]
          return lastMessage.text
          }
          
          
        } ,
        
        created(){
          
        }
      });
      app.mount('#root');