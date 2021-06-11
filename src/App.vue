<template>
  <div id="app" style="height:100%">
   
    <router-view/>
     

     <!-- <div>
       11111
     </div> -->
  </div>
</template>
<script>
import loading from '@/components/loading'
export default {
  components: {
    loading
  },
  data() {
    return {
    isLoad: false,
    time: null

    }
  },
  mounted() {
    this.isLoad = true
    this.time = setTimeout(()=>{
       this.isLoad = false
       if(this.time) {
      clearTimeout(this.time)
    }
    },500)
    
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: .1rem;
  height: .1rem;
  background: hsla(0, 0%, 100%, 0.8);
}
 
::-webkit-scrollbar-track {
  border-radius: 0;
}
 
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: #5599FF;
  transition: all .2s;
  border-radius: .1rem;
 
  
}
</style>
