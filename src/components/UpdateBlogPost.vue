<template>
  <div>
    <v-card>
      <v-toolbar dark color="green">
        <v-btn icon dark @click="closeDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Editar Post</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="update()">
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title> Editar Post</v-card-title>
      <v-divider></v-divider>

      <v-text-field placeholder="Titulo" v-model="title" class="pa-3" filled>
      </v-text-field>
      <v-textarea
        placeholder="Cuerpo"
        v-model="body"
        class="pa-3"
        filled
      ></v-textarea>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  name: "UpdateBlogPost",
  props: { blogData: Object },
  methods: {
    ...mapActions(["updateBlogPost"]),
    closeDialog() {
      this.$emit("close-dialog");
    },
    update() {
      const updatedBlog = {
        id: this.blogData.id,
        title: this.title,
        body: this.body
      };
      this.updateBlogPost(updatedBlog);
      this.closeDialog();
    }
  }
};
</script>

<style></style>
