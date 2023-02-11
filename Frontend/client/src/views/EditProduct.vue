<template>
  <div class="container mt-4">
      <h1>Edit Product </h1>
      <form @submit.prevent="insertProduct">
            <input 
            type="text" class="form-control" placeholder="Name Project" 
            v-model="name"
            >
            <br>
            <input 
            type="number" class="form-control" placeholder="Quantity products" 
            v-model="quantity"
            >
            <br>
            <input 
            type="number" step="0.01" class="form-control" placeholder="Number Product" 
            v-model="price"
            >
            <br>
            <textarea rows="8" class="form-control" 
            v-model="description"
            ></textarea>
            <br>
            <br>
            <button class="btn btn-success mt-4 ">Update Product</button>
        </form>
        <div v-if="error"
        class="alert alert-warning alert-dismissable fade show mt-5"
        role="alert"
        >
            <strong>{{ error }}</strong>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EditProduct',
    data(){
        return{
            name: null,
            quantity: null,
            price: null,
            description: null,
            error:null
        }
    },
    props:{
        id:{
            type:[Number, String],
            required:true
        }
    },
    methods:{
        insertProduct(){
            if(!this.name || !this.quantity || !this.price || !this.description){
                this.error = 'add all filds'
            }else{
                axios
                .put(`/product/${this.id}/`,{name:this.name, quantity:this.quantity, price:this.price, description:this.description})
                .then(res=>{
                    this.$router.push({
                        name:'Home'
                    })
                })
            }
        }
    },
    beforeRouteEnter(to, from, next){
        if(to.params.id !== undefined){
            axios
            .get(`/product/${to.params.id}/`)
            .then(response => {
                return next(vm=> (vm.name=response.data.name, vm.quantity=response.data.quantity, vm.price=response.data.price, vm.description=response.data.description))
            })
            .catch(error => {
                console.log(error)
            })
        }else{
            return next()
        }
    }
}
</script>
