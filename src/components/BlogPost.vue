<template>
  <div>
    <h3>Blog Posts:</h3>
    <v-container>
      <v-row>
        <v-col v-for="blog in allBlogPosts" :key="blog.id" :cols="6">
          <v-card outlined rounded class="fill-height">
            <v-card-title>{{ blog.title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{ blog.body }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn outlined rounded @click="deleteBlogPost(blog.id)">
                Borrar
              </v-btn>
              <v-dialog
                v-model="display[blog.id]"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-spacer></v-spacer>
                  <v-btn outlined rounded v-bind="attrs" v-on="on">
                    Editar Post
                  </v-btn>
                </template>
                <v-card>
                  <UpdateBlogPost
                    :blogData="blog"
                    v-on:close-dialog="closeDialog"
                  ></UpdateBlogPost>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UpdateBlogPost from "@/components/UpdateBlogPost.vue";

export default {
  data() {
    return {
      dialog: false,
      display: {}
    };
  },
  components: { UpdateBlogPost },
  name: "BlogPost",
  methods: {
    ...mapActions(["fetchPosts", "deleteBlogPost"]),

    closeDialog() {
      this.display = {};
    }
  },
  computed: mapGetters(["allBlogPosts"]),
  created() {
    this.fetchPosts();
  }
};
</script>

<style></style>
