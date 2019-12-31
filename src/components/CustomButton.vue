<template>
    <div class="customButton">
        <button type="button" class="button" @click="$emit('view-product',product.id)">
            <slot></slot>
        </button>

    </div>
</template>

<script>
    export default {
        name: "CustomButton",
        props:["product"],
    }
</script>

<style scoped>

    .button {
        background-color: #af98aa; /* Green */
        border: none;
        color: white;
        padding: 10px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
    }

</style>
