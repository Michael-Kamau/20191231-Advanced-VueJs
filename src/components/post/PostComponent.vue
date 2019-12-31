<template>
    <div class="post">
        <slot></slot>

        <h4>{{comment.id}}:{{comment.title}}</h4>
        <h6>{{comment.body}}</h6>
    </div>
</template>

<script>
    export default {
        name: "PostComponent",
        props:["comment"]
    }
</script>

<style scoped>

    .post{
        border-bottom: 6px solid #45a049;
        background-color: lightgrey;
        padding: 10px;
        margin-bottom: 10px;

    }

</style>
