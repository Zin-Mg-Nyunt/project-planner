<template>
  <form @submit.prevent="updateProject">
    <label class="inline-block uppercase text-gray-400 font-bold tracking-wide">Project Title</label>
    <input type="text" class="w-full inline-block py-2 text-lg border-b-2 border-b-gray-200 focus:outline-0" v-model="title">


    <label class="inline-block uppercase text-gray-400 font-bold tracking-wide mt-10">Project Detail</label>
    <input type="text" class="w-full inline-block py-2 text-lg border-b-2 border-b-gray-200 focus:outline-0" v-model="detail">


    <div class="w-full mt-3 text-center">
        <button class="px-7 py-2 rounded-lg bg-green-500 text-white font-bold tracking-wide cursor-pointer active:bg-green-300">Update</button>
    </div>
  </form>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            title:"",
            detail:""
        }
    },
    mounted(){
        // to show original data in input field before update
        fetch("http://localhost:3000/projects/"+this.id)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            this.title=data.title,
            this.detail=data.detail
        })
        .catch(err=>console.log(err))
    },
    methods:{
        updateProject(){
            fetch("http://localhost:3000/projects/"+this.id,{ // update to server
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:this.title,
                    detail:this.detail,
                })
            })
            .then(()=>{
                this.$router.push('/') // after update server and redirect to home
            })
            .catch(err=>console.log(err))
        }
    }
}
</script>

<style>

</style>