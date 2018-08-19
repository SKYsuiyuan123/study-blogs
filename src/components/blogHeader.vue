<template>
    <nav>
      <ul>
        <li><router-link to="/showBlogs">看博客</router-link></li>
        <li><router-link to="/addBlog">写博客</router-link></li>
      </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: crimson;
  padding: 30px 0;
  max-width: 600px;
  margin: 0 auto;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}
</style>
