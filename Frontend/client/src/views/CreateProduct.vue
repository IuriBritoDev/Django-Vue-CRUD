<template>
    <div class="container mt-4">
        <h1>Create New Product</h1>
        <form @submit.prevent="insertProduct">
            <input type="text" class="form-control" placeholder="Name" v-model="name">
            <br>
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
            <br>
            <input type="number" step="0.01" class="form-control" placeholder="Price" v-model="price">
            <br>
            <textarea rows="8" class="form-control" placeholder="Description" v-model="description"></textarea>
            <br>
            <button class="btn btn-success mt-4 ">Create Product</button>
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
    name: 'CreateProduct',
    data(){
        return{
            name: null,
            quantity: null,
            price: null,
            description: null,
            error:null
        }
    },
    methods:{
        insertProduct(){
            if(!this.name || !this.quantity || !this.price || !this.description){
                this.error = 'add all filds'
            }else{
                axios
                .post('/product/',{name:this.name, quantity:this.quantity, price:this.price, description:this.description})
                .then(res=>{
                    this.$router.push({
                        name:'Home'
                    })
                })
            }
        }
    }
}
</script>
