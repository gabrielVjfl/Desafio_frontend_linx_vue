<template>
  <div>
  
      <div class="row" id="zoneListEmail">

            <div class="card" v-for="list of lists" :key="list.id">
              
  
    <div class="card-header">
      <img loading="lazy"  :src="list.image"/>
    </div>
    <div class="card-body">
     <span class="nameProduct">{{list.name}}</span><br/>
     <p class="descriptionProduct">{{list.description}}</p>
     <span class="oldPriceProduct">De: R$ {{list.oldPrice}}</span><br/>
     <span class="priceProduct">Por: R${{list.price}}</span><br/>
     <span class="creditProduct">
     ou {{list.installments.count}}X de R$ 
    {{list.installments.value.toFixed(2)}}
    </span><br/>
     <button class="btnProducts">Comprar</button>
     <br/>
     <br/>
     </div>
    </div>
    


     <div class="card" v-for="list of lists" :key="list.id">
              <div v-if="listsPlus.length > 0">

           
    <div class="card-content">
    <div class="card-header">
      <img loading="lazy"  :src="list.image"/>
    </div>
    <div class="card-body">
     <span class="nameProduct">{{list.name}}</span><br/>
     <p class="descriptionProduct">{{list.description}}</p>
     <span class="oldPriceProduct">De: R$ {{list.oldPrice}}</span><br/>
     <span class="priceProduct">Por: R${{list.price}}</span><br/>
     <span class="creditProduct">
     ou {{list.installments.count}}X de R$ 
    {{list.installments.value.toFixed(2)}}
    </span><br/>
     <button class="btnProducts">Comprar</button>
     <br/>
     <br/>
     </div>
    </div>
    </div>
  
     </div>

   
          
      </div>

          
     <div class="ContainerBtnList">


       <button id="btn-api-plus" 
        class="btn-plus-products" @click="HandleListPlus()">
           Ainda mais produtos aqui!
           </button>
   </div>
  </div>


 

</template>

<script>


    
import '../../styles/email.css'
import '../../styles/index.css'
import Axios from 'axios'

export default {
  name: 'Card',
  


  data() {
      return {
       lists:[],
       listsPlus: []
    }
    },
  
mounted() {
   Axios.get(
     'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
     .then((response) => {

          this.lists = response.data.products.slice(0,2)
      

    }).catch(() => {
       alert("Ocorreu um erro ao carregar os produtos!")

    })
},
  methods: {
       HandleListPlus() {
       Axios.get(
     'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2')
     .then((response) => {

          this.listsPlus = response.data.products.slice(0,2)

      document.getElementById("btn-api-plus").style.display = "none"

    }).catch(() => {
   

    })
  }
}

 
}
</script>

