<template>
    <div name="product">
        <h1>You have selected {{ $route.params.name }}</h1>
        <img :src="getImgUrl($route.params.name)">

    </div>
</template>

<script>


    export default {
        name: "Product",
        props:["product"],
        methods:{
            getImgUrl(car) {
                var images = require.context('../assets/', false, /\.jpeg$/)
                return images('./' + car + ".jpeg")
            }
        }

    }
</script>

<style scoped>

</style>
