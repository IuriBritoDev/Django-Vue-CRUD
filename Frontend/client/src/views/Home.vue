<template>
  <div class="container">
    <div class="row">
      <div class="col md-12">
        <div class="jumbotron p-3">
            <br><br><br>  
            <h2><b>Product Management</b></h2>
            <br>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name </th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in products" 
                  :key="product.id"
                >
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>$ {{ product.price }}</td>
                  <td>
                    <router-link :to="{name:'Details', params:{id:product.id}}">
                      <button type="button" class="btn btn-success">Details</button>
                    </router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data(){
        return{
            products: []
        }
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        getProducts(){
            axios
                .get('/product/')
                .then(response => {
                    this.products = response.data
                })
                .catch(error => {
                    console.log(error)
        })
    }
  }
}
</script>
