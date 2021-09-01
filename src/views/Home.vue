<template>
<div class="home">
 <div v-if="error">{{error}}</div>
  <div v-if="posts.length>0" class="layout">
    <div ><PostsList :posts="posts"></PostsList></div>
    <div><TagCloud></TagCloud></div>
  </div>
  <div v-else>
    <spinner></spinner>
  </div>
</div>
  


</template>

<script>

import PostsList from '../components/PostsList.vue'
import Spinner from '../components/Spinner.vue';
import TagCloud from '../components/TagCloud.vue';
import getPosts from "../composables/getPosts"

// @ is an alias to /src


export default {
  components: {PostsList, Spinner, TagCloud},
  setup(){
    //composable function
    let {posts,error,load}=getPosts();//posts,error,load
      load();
    return {posts,error}
  }
  
  
}
</script>

<style>
 .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
    
  }
</style>

