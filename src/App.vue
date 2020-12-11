<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f5f5;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

.backup {
  position: fixed;
  right: 30px;
  bottom: 65px;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #dbdfe3;
  font-size: 19px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.el-card__body {
  img {
    max-width: 100%;
  }
}

pre {
  background-color: #283646 !important;
}

pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  color: #fff;
  padding: 10px;
}

code {
  display: inline-block;
  background-color: #f3f3f3;
  border: 1px solid #fdb9cc;
  border-radius: 3px;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 5px;
  color: #4f4f4f;
  margin: 0px 3px;
}
</style>
