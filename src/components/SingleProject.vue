<template>
    <div class="mb-5">
        <h1 class="text-2xl uppercase tracking-wide font-bold cursor-pointer">{{project.title}}</h1>
    </div>
    <p>{{project.detail}}</p>
</template>

<script>
export default {
    props:['project']
}
</script>

<style>

</style>