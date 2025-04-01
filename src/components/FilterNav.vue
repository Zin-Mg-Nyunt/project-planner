<template>
      <nav>
      <button 
        class="p-3 uppercase text-sm tracking-wide cursor-pointer font-bold text-gray-400" 
        @click="filterBy('all')"
        :class="{active:current==='all'}"
      >all</button>
      <button 
        class="p-3 uppercase text-sm tracking-wide cursor-pointer font-bold text-gray-400"
        @click="filterBy('ongoing')"
        :class="{active:current==='ongoing'}"
      >ongoing</button>
      <button 
        class="p-3 uppercase text-sm tracking-wide cursor-pointer font-bold text-gray-400" 
        @click="filterBy('complete')"
        :class="{active:current==='complete'}"
      >complete</button>
    </nav>
</template>

<script>
export default {
    props:['current'], // receive data from parent
    methods:{
        filterBy(value){
            this.$emit('filterBy',value) // send data to parent because need to filter projects in parent
        }
    }
}
</script>

<style>
    .active{
        color: black;
    }
</style>