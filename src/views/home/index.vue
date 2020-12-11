<template>
  <div class="app">
    <el-main>
      <div class="content">
        <el-card v-for="item in list" :key="item.id" @click.native="toArticleDetail(item.id)">
          <p>{{ item.title }}</p>
          <p>
            发表于：{{ $moment(item.create_time).format('YYYY年MM月DD日') }}
            <span>|</span>
            更新于：{{ $moment(item.update_time).format('YYYY年MM月DD日') }}
          </p>
          <p v-html="item.intro"></p>
          <el-button type="primary" plain>阅读全文>></el-button>
        </el-card>
        <el-pagination background layout="prev, pager, next" :total="total" @current-change="changePage"></el-pagination>
      </div>

      <!-- 右侧边栏 -->
      <Aside />
    </el-main>

    <!-- 返回顶部 -->
    <div class="backup" @click="backup">UP</div>
  </div>
</template>

<script>
import Aside from '@/components/Aside.vue'
import { articleList } from '@/api/article'

export default {
  components: {
    Aside
  },
  data() {
    return {
      // 文章列表数据
      list: [],
      // 文章总数
      total: 0
    }
  },
  created() {
    this.fetchArticleList(0, 1)
  },
  methods: {
    // 查询文章列表，每次10条，pageNumber代表页数
    async fetchArticleList(status, pageNumber) {
      const res = await articleList(status, pageNumber)
      this.list = res.data
      this.list.forEach(v => {
        v.intro = this.$marked(v.intro)
      })
      this.total = res.total
    },
    // 跳转到指定ID的文章详情页
    toArticleDetail(id) {
      this.$router.push('/article/' + id)
    },
    // 分页
    changePage(pageNum) {
      this.fetchArticleList(0, pageNum)
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

    .el-card {
      margin-bottom: 20px;
      text-align: center;

      &:hover {
        cursor: pointer;
        transform: translate(5px, 3%);
        border: 2px solid pink;
      }

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

      .el-button {
        margin-top: 10px;
      }
    }

    .el-pagination {
      float: right;
    }
  }
}
</style>
