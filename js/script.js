  
Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
               
                {
                    id: 2,
                    company: 'Microsoft',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                  },

                  {
                    id: 3,
                    company: 'Sony',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Napoli',
                    contract: 'Full Time'
                  },      
            ],
            starred: [],
            applied: []

        } ,
        methods:{
            heart: function (index){
                if (this.starred.includes(index + 1)){
                    return 'yellow'
                }else{
                    return
                }
            },
            addHeart:function (index){
                if(this.starred.includes(index + 1) || this.applied.includes(index +1)) {
                    return
                }else {
                    this.starred.push(index + 1);
                }
            },

            application:function (index){
                if(this.applied.includes(index + 1)){
                    return 'application'
                }else{
                    return
                }
            },

            addApply:function(index){
                if(this.applied.includes(index + 1)){
                    return
                }else {
                   this.applied.push(index + 1 )  
                   this.starred.splice(index.value,1);
                }

            },
           

        }
    }
)                   