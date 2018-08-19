<template>
  <div class="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <UL>
      <li v-for="categorie in blog.categories" :key="categorie.id">
        {{categorie}}
      </li>
    </UL>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null,
      blog: {}
    }
  },
  created () {
    this.id = this.$route.params.id

    this.$axios.get(`singleBlog/${this.id}`)
      .then(res => {
        this.blog = res.data[0]
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
ul {
  list-style: none;
}
.single-blog {
  max-width: 558px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
  margin-top: 40px;
}
</style>
