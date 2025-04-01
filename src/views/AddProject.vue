<template>
  <form @submit.prevent="addProject">
    <label class="inline-block uppercase text-gray-400 font-bold tracking-wide">Project Title</label>
    <input type="text" class="w-full inline-block py-2 text-lg border-b-2 border-b-gray-200 focus:outline-0" v-model="title">
    <p v-if="showError" class="text-red-500 text-sm">Please fill Project Title</p>

    <label class="inline-block uppercase text-gray-400 font-bold tracking-wide mt-10">Project Detail</label>
    <input type="text" class="w-full inline-block py-2 text-lg border-b-2 border-b-gray-200 focus:outline-0" v-model="detail">
    <p v-if="showError" class="text-red-500 text-sm">Please fill Project Detail</p>

    <div class="w-full mt-3 text-center">
        <button class="px-7 py-2 rounded-lg bg-green-500 text-white font-bold tracking-wide cursor-pointer active:bg-green-300">Add</button>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return{
            title:"",
            detail:"",
            showError:false
        }
    },
    methods:{
        addProject(){
            if (this.title && this.detail) { //condition check 
                fetch("http://localhost:3000/projects",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        title:this.title,
                        detail:this.detail,
                        complete: false,
                        createTime: new Date().toLocaleString('en-GB',{hour12:true})
                    })
                })
                .then(()=>{
                    this.$router.push('/') //after add project in server and redirect home
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                this.showError=true;
            }
        
        }
    }
}
</script>

<style>

</style>