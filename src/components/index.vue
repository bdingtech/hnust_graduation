<template>
  <div class="container-box">
    <el-container>
      <!-- <el-header> -->
      <div class="navbar-wrap">
        <div class="navbar-box">
          <div class="nav-title">
            <div class="nav-logo">
              <svg
                t="1578575805715"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3999"
                width="70"
                height="70"
              >
                <path
                  d="M512.384 64l420.7744 224v448L512.384 960 91.6224 736v-448L512.384 64z m0 176.512L257.408 376.256v271.488L512.384 783.488l254.9888-135.744v-271.488L512.3968 240.512z"
                  fill="#1989FA"
                  opacity=".3"
                  p-id="4000"
                />
                <path
                  d="M512.384 342.4l159.3088 84.8v169.6L512.384 681.6128l-159.296-84.8128v-169.6zM486.4 283.008V149.2352a76.8 76.8 0 1 1 51.2 0v133.76a232.9344 232.9344 0 0 0-51.2 0z m211.1104 92.3264l147.7504-85.2992a76.8 76.8 0 1 1 22.3744 46.208l-144.4864 83.4048a230.1568 230.1568 0 0 0-25.6384-44.3136z m25.6384 229.0176l144.4736 83.4048a76.8 76.8 0 1 1-22.3744 46.208l-147.7376-85.2992c10.112-13.696 18.7264-28.544 25.6384-44.3136zM537.6 740.992v133.7728a76.8 76.8 0 1 1-51.2 0v-133.76a232.9344 232.9344 0 0 0 51.2 0z m-211.1104-92.3264L178.7392 733.952a76.8 76.8 0 1 1-22.3744-46.208l144.4864-83.4048a230.1568 230.1568 0 0 0 25.6384 44.3136z m-25.6384-229.0176L156.3776 336.256a76.8 76.8 0 1 1 22.3744-46.208l147.7376 85.2992a230.1568 230.1568 0 0 0-25.6384 44.3136z"
                  fill="#1989FA"
                  p-id="4001"
                />
              </svg>
            </div>
            <div class="title-box">
              <div class="nav-title">湖南科技大学土木学院道路与桥梁工程知识共享平台</div>
              <div
                class="nav-subTitle"
              >Bridge and Tunnel Engineering Information Sharing Platform of Hunan University of Science and Technology</div>
            </div>
          </div>
          <div class="nav-serch">
            <div style="margin-top: 15px;">
              <el-input placeholder="请输入需要查找的内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav class="container-fluid navbar-inverse navbar navbar-default" role="navigation">
          <div class="container">
            <ul class="nav navbar-nav">
              <router-link to="/index/home"  tag="li">
                <a>首页</a>
              </router-link>
              <router-link to="/index/review"  tag="li">
                <a>知识聚拢</a>
              </router-link>
              <router-link   tag="li">
                <a>桥梁整体设计</a>
              </router-link>
              <li>
                <a href="#">结构建模</a>
              </li>
              <li>
                <a href="#">结果分析与优化</a>
              </li>
              <li>
                <a href="#">成功展示</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="fa fa-upload"></span> 上传文档
                </a>
              </li>
              <li>
                <router-link to="/login">
                  <span class="fa fa-user"></span>登录/注册
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!-- </el-header> -->
      <!-- <el-main> -->

      <div class="content-box">
        <div class="bread">
          <breadcrumb />
        </div>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <!-- </el-main> -->
      <el-footer>
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 text-center wk-help">
                <a href="#">手机版</a>
                |
                <a href="#">关于我们</a> |
                <a href="#">帮助中心</a> |
                <!-- <a href="#">搜职位</a> |
                <a href="#">招人才</a> |-->
                <a href="#">意见反馈</a> |
                <!-- <a href="#">合作共赢</a> -->
              </div>
              <div class="col-xs-12 text-center">联系地址：湖南·湘潭市桃园路(411201) 联系电话：0731-58290011</div>
              <div class="col-xs-12 text-center">©2020 湘ICP备10001692号 湘公网安备 43030202001075号</div>
              <!-- <div class="col-xs-12 text-center">广西南宁游民网络科技 版权所有</div> -->
              <div class="col-xs-12 text-center">Powered By pudding</div>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import breadcrumb from "./breadcrumb.vue";
export default {
  data() {
    return {
      input3:''
    };
  },
  mounted() {
    //  console.log(this.$route.matched)
  },
  components: {
    breadcrumb
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.container-box {
  /* width: 1250px; */
  /* margin: 10px auto; */
}

.el-footer {
  background-color: rgb(250, 250, 250);
  /* height: 200px !important; */
  height: 100% !important;
}
.navbar-wrap {
  width: 100%;
  background-color: #fff;
}
.el-footer {
  padding: 0 !important;
}
.el-header {
  padding: 0 !important;
  /* background-color: #d6e4ff; */
}
.content-box {
  width: 1250px;
  margin: 10px auto;
}
.navbar-box {
  width: 1250px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 70px;
  /* background-color: #d6e4ff; */
}
.nav-title {
  display: flex;
}
.title-box {
  padding: 10px;
}
.nav-title {
  font-size: 23px;
  /* font-weight: bold */
}
.nav-subTitle {
  font-size: 12px;
  color: #8c8c8c;
}
.bread {
  height: 15px;
  margin-left: 70px;
}
</style>