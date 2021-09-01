<template>
<div class="tag"> 
        <div v-if="error">{{error}}</div>
<div v-if="posts.length" class="layout">
        <div> <PostsList :posts="fileredPosts"></PostsList></div>
        <div><TagCloud></TagCloud></div>
</div>
<div v-else>Loading...</div>
</div>
</template>

<script>
import { computed } from '@vue/reactivity';
import getPosts from "../composables/getPosts"
import PostsList from '../components/PostsList.vue'
import TagCloud from '../components/TagCloud.vue';
export default {
    components:{PostsList, TagCloud},
    props:['tag'],
    setup(props){
        let {posts,error,load}=getPosts();
        load();
        let fileredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag);
            })
        })
        return {posts,error,load,fileredPosts}
    }
}
</script>

<style>

    .tag{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>