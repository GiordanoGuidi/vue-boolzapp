console.log('Vueok',Vue)
const { user, contacts} = data;

const {createApp} = Vue
const app = createApp({
    data(){
        return{
          user,
          contacts,
          activeId:1,
        }
    },
    computed:{
      currentContact(){
        return this.contacts.find(contact=> contact.id === this.activeId)
      }

      
    },
    methods:{
      //RECUPERO ID DEL CONTATTO
      getActiveId(contact){
        this.activeId = contact.id;
        console.log('Clicked on contact:', contact);
        console.log('sonoactiveId', this.activeId);
      },
      
     
      
      
  
    } 
  });
  app.mount('#root');