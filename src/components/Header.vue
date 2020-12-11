<template>
  <div>
    <el-header>
      <div class="w title">
        <div class="home">
          <router-link to="/">刘伟博客</router-link>
          <span>study hard, play hard.</span>
        </div>
        <div class="items">
          <span><router-link to="/">首页</router-link></span>
          <span><a href="https://sphard.com">旧站</a></span>
          <span><router-link to="/about">关于</router-link></span>
        </div>
      </div>
    </el-header>
    <div class="space"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.w {
  width: 90%;
  max-width: 1300px;
  margin: auto;
  height: 100%;
}

.space {
  height: 60px;
}

.el-header {
  position: fixed;
  z-index: 3;
  width: 100%;
  background-color: #fff;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .home {
      width: 55%;
      font-size: 1.8rem;

      span {
        margin-left: 10px;
        font-size: 1rem;
        color: #999;
      }
    }

    .items {
      span {
        margin-left: 30px;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
