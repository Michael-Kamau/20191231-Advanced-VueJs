
<template>
    <!-- Your HTML goes here -->
    <div class="home">
        <h1>Products</h1>
        <div class="container">


            <div class="mytable">
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{product.name}}</td>
                        <td>{{product.amount}}</td>
                        <td><CustomButton v-bind:product="product.id" v-on:view-product="$emit('view-product',product.id)">
                        <span>
                            <router-link  v-bind:product="product" :to="`/products/product/`+ product.name">View {{product.name}}</router-link>
                        </span>
                        </CustomButton></td>
                    </tr>
                </table>

            </div>
            <div class="myProduct">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomButton from './CustomButton'

    export default {
        name: 'Products',
        active: true,
        //props:["products"],
        components: {
            CustomButton
        },
        data() {
            return {
                amount: 1000,

                classObject: {
                    active: true,
                    'text-danger': false
                },
                products: [
                    {id: 1, name: 'Mazda', amount: 150000},
                    {id: 2, name: 'Toyota', amount: 120000},
                    {id: 3, name: 'Nissan', amount: 180000},
                    {id: 4, name: 'Subaru', amount: 220000},
                ],

            }
        },
        methods:{
            myAlert: function () {
                alert("Are you sure you want to submit the form")

            }
        }

    }


</script>

<style>

    .active {
        color: blue;
    }

    label{
        padding:10px;
    }

    table, td, th {
        border: 1px solid #ddd;
        text-align: left;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        padding: 15px;
    }

    .container{
        display: flex;
    }
    .mytable{
        width:50%;
    }
    .myProduct{
        margin:20px;
    }


</style>
