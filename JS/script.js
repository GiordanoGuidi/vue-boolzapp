console.log('Vueok',Vue)
const { user, contacts} = data;

const {createApp} = Vue
const app = createApp({
    data(){
        return{
          user,
          contacts,
          activeId:1,
          newMessage:'',
        }
    },
    computed:{
      currentContact(){
        return this.contacts.find(contact=> contact.id === this.activeId)
      },

      contactMessages(){
        console.log(this.currentContact.messages)
        return this.currentContact.messages
      }

      
    },
    methods:{
      //RECUPERO ID DEL CONTATTO
      getActiveId(contact){
        this.activeId = contact.id;
        // console.log('Clicked on contact:', contact);
        // console.log('sonoactiveId', this.activeId);
      },


      addNewMessage(){
        const message = {
          text:this.newMessage,
          status:'received',
        }
        this.contactMessages.push(message)
      }
      
     
      
  
    } 
  });
  app.mount('#root');