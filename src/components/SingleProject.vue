<template>
    <div class="flex justify-between">
        <div>
            <h1 class="text-lg md:text-xl lg:text-2xl uppercase tracking-wide font-bold cursor-pointer select-none" @click="showDetail=!showDetail">{{project.title}}</h1>
        </div>
        <div class="min-w-[120px] pt-1">
            <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400" @click="deleteProject">delete</span>
            <router-link :to="{name:'editProject', params:{id:project.id}}">
                <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400">edit</span>
            </router-link>
            <span class="material-icons ml-3 cursor-pointer select-none active:text-gray-400" @click="updateComplete">done</span>
        </div>
    </div>
    <p class="select-none text-gray-500">Created at - <span>{{project.createTime}}</span></p>
    
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
                this.$emit('updateComplete',this.project.id) // to update in local
            })
            .catch(err=>console.log(err))
        },
        deleteProject(){
            fetch(this.api+this.project.id,{method:'DELETE'}) // delete in server
            .then(()=>{
                this.$emit('deleteProject',this.project.id) // to delete in local
            })
            .catch(err=>console.log(err))
        }
    }
}
</script>

<style>

</style>