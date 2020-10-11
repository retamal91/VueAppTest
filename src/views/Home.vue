<template>
  <div class="home">
    <addBlogPost />
    <v-divider></v-divider>
    <BlogPost />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from "@/components/BlogPost.vue";
import addBlogPost from "@/components/addBlogPost.vue";

export default {
  name: "Home",
  components: {
    BlogPost,
    addBlogPost
    
  }
};
</script>
