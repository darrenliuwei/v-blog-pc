<template>
  <div class="app">
    <Header />

    <el-main>
      <div class="content">
        <el-card>
          <p>{{ article.title }}</p>
          <p>
            发表于：{{ $moment(article.create_time).format('YYYY年MM月DD日') }}
            <span>|</span>
            更新于：{{ $moment(article.update_time).format('YYYY年MM月DD日') }}
          </p>
          <p v-html="article.content"></p>
        </el-card>
      </div>

      <!-- 右侧边栏 -->
      <Aside />
    </el-main>

    <!-- 返回顶部 -->
    <div class="backup" @click="backup">UP</div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import { getArticle } from '@/api/article'

export default {
  components: {
    Header,
    Aside,
    Footer
  },
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.fetchArticle(this.$route.params.id)
  },
  methods: {
    // 获取指定ID的文章详情
    async fetchArticle(id) {
      const res = await getArticle(id)
      if (res.code !== 1) return this.$message.error('获取文章详情失败')
      this.article = res.data[0]
      this.article.content = this.$marked(this.article.content)
    },
    // 返回顶部
    backup() {
      // 定时循环回到顶部
      var scrollToptimer = setInterval(function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop
        var speed = top / 5
        if (document.body.scrollTop !== 0) {
          document.body.scrollTop -= speed
        } else {
          document.documentElement.scrollTop -= speed
        }
        if (top === 0) {
          clearInterval(scrollToptimer)
        }
      }, 30)
    }
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
    text-align: center;

    p {
      &:nth-child(1) {
        color: blue;
        font-size: 1.3rem;
      }

      &:nth-child(2) {
        margin: 15px 0;
        color: grey;
        font-size: 0.8rem;
      }

      &:nth-child(3) {
        text-align: left;
      }

      span {
        margin: 0 10px;
      }
    }
  }
}
</style>
