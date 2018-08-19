<template>
  <div v-theme:column="'narrow'" class="show-blogs">
    <h2>博客总览</h2>
    <input type="text" placeholder="搜索" v-model="searchText">
    <ul>
      <li v-for="blog in filterBlogs" class="single-blog" :key="blog.id">
        <router-link :to="'/singleBlog/' + blog._id"><h4 v-rainbow>{{blog.title | to-uppercase}}</h4></router-link>
        <article>{{blog.content | snippet}}</article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      searchText: ''
    }
  },
  computed: {
    filterBlogs () {
      return this.$store.state.blogs.filter((blog) => {
        return blog.title.match(this.searchText.toLowerCase())
      })
    }
  },
  filters: {
    // 过滤属性
    // ES5
    // 'to-uppercase': function (value) {
    //   return value.toUpperCase()
    // }
    // ES6
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    // 自定义指令
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  },
  created () {
    if (this.$store.state.blogs.length > 0) {

    } else {
      this.$axios.get('allBlogs')
        .then(res => {
          console.log(res)
          this.$store.commit('obtainBlogs', res.data)
          
        })
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
h2 {
  text-align: center;
}
.show-blogs {
  margin: 0 auto;
  max-width: 800px;
  margin-top: 20px;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
