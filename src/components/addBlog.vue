<template>
  <div class="addBlog">
    <h2>添加博客</h2>
    <form v-if="!submited">
      <label for="blogTit">博客标题</label>
      <input type="text" v-model="blog.title" id="blogTit" required>
      <label for="blogContent">博客内容</label>
      <textarea v-model="blog.content" id="blogContent"></textarea>
      <div class="checkboxes">
        <label for="checkboxVue">Vue.js</label>
        <input type="checkbox" value="Vue.js" id="checkboxVue" v-model="blog.categories">
        <label for="checkboxAn">Angular.js</label>
        <input type="checkbox" value="Angular.js" id="checkboxAn" v-model="blog.categories">
        <label for="checkboxReact">React.js</label>
        <input type="checkbox" value="React.js" id="checkboxReact" v-model="blog.categories">
        <label for="checkboxNode">Node</label>
        <input type="checkbox" value="Node" id="checkboxNode" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :value="author" :key="author.id">{{author}}</option>
      </select>
      <button @click.prevent="postBlog">添加博客</button>
    </form>
    <div v-if="submited">
      <h3>你的博客已经发布成功</h3>
    </div>

    <div class="preview">
      <h3>博客总览</h3>
      <p>博客标题： {{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="categorie in blog.categories" :key="categorie.id">
          {{categorie}}
        </li>
      </ul>
      <p>作者: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Blue', 'MissWu', 'JC', 'Sky'],
      submited: false
    }
  },
  methods: {
    postBlog () {
      this.$axios.post('addBlog', this.blog)
        .then(res => {
          this.submited = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.addBlog * {
  box-sizing: border-box;
}
.addBlog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
.checkboxes label {
  display: inline-block;
  margin-top: 20px;
}
.checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
.preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
.preview h3 {
  margin-top: 10px;
}
</style>
