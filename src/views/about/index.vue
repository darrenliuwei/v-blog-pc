<template>
  <div class="app">
    <Header />

    <el-main>
      <div class="content">
        <el-card>
          关于
        </el-card>
      </div>

      <!-- 右侧边栏 -->
      <Aside />
    </el-main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1300px;
  margin: auto;
  height: 100%;
  min-height: calc(100vh - 60px - 60px);
  overflow: hidden;

  .content {
    flex: 1;

    .skill {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
