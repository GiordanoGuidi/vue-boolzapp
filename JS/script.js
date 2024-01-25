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
        this.contacts.find(contact=>{
          if(contact.id === this.activeId){
            return true
          }
        })

      }

      
    },
    methods:{
      //RECUPERO ID DEL CONTATTO
      getActiveId(contact){
        this.activeId = contact.id;
        console.log('sonoactiveId', this.activeId);
      },
      
     
      
      
  
    } 
  });
  app.mount('#root');