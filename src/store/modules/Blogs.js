import axios from "axios";

const state = {
  blogs: []
};

const getters = {
  allBlogPosts: state => state.blogs
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setPosts", response.data);
  },
  async addBlogPost({ commit }, BlogSent) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      BlogSent
    );

    commit("addNewBlogPost", response.data);
  },
  async deleteBlogPost({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

    commit("deletePost", id);
  },
  async updateBlogPost({ commit }, newData) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${newData.id}`,
      newData
    );

    commit("updateBlog", response.data);
  }
};

const mutations = {
  setPosts: (state, blogs) => (state.blogs = blogs),
  addNewBlogPost: (state, BlogPost) => state.blogs.unshift(BlogPost),
  deletePost: (state, id) =>
    (state.blogs = state.blogs.filter(blog => blog.id !== id)),
  updateBlog: (state, newData) => {
    const index = state.blogs.findIndex(blog => blog.id === newData.id);
    if (index !== -1) {
      state.blogs.splice(index, 1, newData);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
