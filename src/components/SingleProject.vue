<template>
    <div class=" flex justify-between">
        <div>
            <h1 class="text-2xl uppercase tracking-wide font-bold cursor-pointer select-none" @click="showDetail=!showDetail">{{project.title}}</h1>
        </div>
        <div>
            <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400">delete</span>
            <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400">edit</span>
            <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400" @click="updateComplete">done</span>
        </div>
    </div>
    
    <p v-if="showDetail" class="mt-5">{{project.detail}}</p>

</template>

<script>
export default {
    props:['project'],
    data(){
        return{
            showDetail:false,
            api:'http://localhost:3000/projects/'
        }
    },
    methods:{
        updateComplete(){
            fetch(this.api+this.project.id,{
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    complete:!this.project.complete
                })
            })
            .then(()=>{
                this.$emit('updateComplete',this.project.id)
            })
            .catch(err=>console.log(err))
        }
    }
}
</script>

<style>

</style>