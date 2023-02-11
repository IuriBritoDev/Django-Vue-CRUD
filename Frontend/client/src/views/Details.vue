<template>
  <div class="container mt-5">
    <h1>Name: {{ products.name }}</h1>
    <h3>Quantidaty: {{ products.quantity }}</h3>
    <h3>Price: $ {{ products.price }}</h3>
    <h3>Description: {{ products.description }}</h3>
     
    <router-link :to="{name:'EditProduct', params:{id:id}}">
    <button class="btn btn-success mx-3 mt-3">Update</button>
    </router-link>
  
    <button class="btn btn-danger mt-3" @click="deleteProduct">Delete</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data(){
    return{
      products: []
    }
  },
  props:{
    id:{
      type:[Number, String],
      required:true
    }
  },
  methods:{
    getProducts(){
      axios
        .get(`/product/${this.id}/`)
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteProduct() {
    axios
        .delete(`/product/${this.id}/`)
        .then(res=>{
          this.$router.push({
            name:'Home'
          })
        })
  }
  },
  created() {
    this.getProducts()
  }
}
</script>
