<template>
  <div class="aside">
    <el-card class="info">
      <el-image style="width: 130px; height: 130px" src="https://i.loli.net/2020/07/11/deo6zEwxpSRHQhJ.jpg"></el-image>
      <h2>刘伟</h2>
      <p>专注于WEB和小程序开发</p>
      <div>
        <el-tag size="mini">Vue</el-tag>
        <el-tag size="mini" type="warning">React</el-tag>
        <el-tag size="mini" type="danger">Node.js</el-tag>
        <el-tag size="mini" type="success">uni-app</el-tag>
        <el-tag size="mini" type="info">Nuxt</el-tag>
        <el-tag size="mini" type="warning">Egg.js</el-tag>
        <el-tag size="mini" type="danger">Vuex</el-tag>
        <el-tag size="mini" type="info">MySQL</el-tag>
        <el-tag size="mini" type="warning">Linux</el-tag>
        <el-tag size="mini">Nginx</el-tag>
        <el-tag size="mini" type="success">Git</el-tag>
        <el-tag size="mini" type="info">ElementUI</el-tag>
        <el-tag size="mini">小程序</el-tag>
      </div>
    </el-card>

    <!-- 联系方式 -->
    <el-card class="contact">
      <el-tabs v-model="activeName">
        <el-tab-pane label="微信" name="1">
          <span>liuwei531946543</span>
          <el-image src="https://i.loli.net/2020/07/12/p8oVD5Zw2kPMbth.jpg"></el-image>
        </el-tab-pane>
        <el-tab-pane label="QQ" name="2">
          <span>531946543</span>
          <el-image src="https://i.loli.net/2020/07/12/wVFrDMqmZsgvUAG.png"></el-image>
        </el-tab-pane>
        <el-tab-pane label="邮箱" name="3">darrenliuwei@gmail.com</el-tab-pane>
        <el-tab-pane label="小程序" name="4">
          <el-image src="https://i.loli.net/2020/07/12/wA73Gy162pkDiCg.jpg"></el-image>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <el-card class="ad" @click.native="goToVultr">
      <el-image src="https://i.loli.net/2020/07/12/2MvydD4h5iouZkU.jpg"></el-image>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1'
    }
  },
  methods: {
    // 跳转到Vultr官网
    goToVultr() {
      window.location.href = 'https://www.vultr.com/?ref=8371895-6G'
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  width: 300px;
  margin-left: 15px;
  text-align: center;

  .el-card {
    margin-bottom: 15px;
  }

  .info {
    /deep/ .el-card__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-image {
        margin-bottom: 10px;
      }

      h2 {
        color: #1890ff;
      }

      p {
        margin: 10px;
        color: #999;
      }

      .el-tag {
        margin: 3px;
      }
    }
  }

  .contact {
    .el-image {
      margin-top: 10px;
    }
  }

  .ad {
    :hover {
      cursor: pointer;
    }
  }
}
</style>
