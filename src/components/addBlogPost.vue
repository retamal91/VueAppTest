<template>
  <div>
    <v-card class="pa-3">
      <h3>Add Blog Post</h3>
      <!--<form @submit="addBlog">
        <input type="text" v-model="title" placeholder="Agregar titulo...">
        <input type="text" v-model="body" placeholder="Agregar contenido...">
        <input type="submit" value="Submit">

      </form>-->
      <v-form @submit="addBlog">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="title"
                label="Agregar Titulo..."
                filled
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                v-model="body"
                label="Agregar contenido..."
                filled
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn type="submit">Submit</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "addBlogPost",
  data() {
    return {
      title: "",
      body: ""
    };
  },

  methods: {
    ...mapActions(["addBlogPost"]),
    addBlog(event) {
      event.preventDefault();
      let sentPost;
      sentPost = { title: this.title, body: this.body };
      this.addBlogPost(sentPost);
    }
  }
};
</script>

<style></style>
