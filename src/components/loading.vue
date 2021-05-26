<template>
  
      <div id="load">
        <div class="load_img">
            <!-- 加载动画 -->
            <img class="jzxz1" src="../assets/jzxz1.png">
            <img class="jzxz2" src="../assets/jzxz2.png">
        </div>
    </div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
    #load {
       width:100%;height:100%;position:absolute;background: #061537
    }
    #load .load_img{
        position:absolute;left:calc(50% - 182px);top:calc(50% - 182px);
    }
.load_img img{position:absolute;left:0;top:0;}
.load_img .jzxz1{animation:xz1 8s infinite linear;}
	@keyframes xz1 {
	  from {
	  transform:rotate(0deg);
	  }
	  50% {
	    transform:rotate(180deg);
	  }
	  to{
	  	transform:rotate(360deg);
	  }
	}	
.load_img .jzxz2{animation:xz2 7s infinite linear;}
	@keyframes xz2 {
	  from {
	  transform:rotate(0deg);
	  }
	  50% {
	    transform:rotate(-180deg);
	  }
	  to{
	  	transform:rotate(-360deg);
	  }
	}	
</style>