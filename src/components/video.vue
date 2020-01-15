
<template>
  <div class="container-box" id="wk-content">
  
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


        <div class="bread">
          <!-- <breadcrumb /> -->
        </div>

      <div class="row">
        <div class="col-xs-9 wk-left wk-nopadding">
          <div class="panel panel-default wk-noborder">
            <div class="panel-body">
             
                <span class="file-title">
                  <img src="~@/assets/img/word_24.png" />测试视频.mp4
                </span>
              
              <div class="help-block wk-doc-info">
                <span>
                  <a href="#">教育频道</a> >
                  <a href="#">高中教育</a> >
                  <span class="text-muted">文档阅读</span>
                </span>
                <div class="pull-right text-muted">
                  <span href="#" title="大小">
                    <i class="fa fa-file-text-o"></i> 321.45KB
                  </span>
                  <span title="下载">
                    <i class="fa fa-download"></i> 213下载
                  </span>
                  <span title="浏览">
                    <i class="fa fa-eye"></i> 213浏览
                  </span>
                  <span title="收藏">
                    <i class="fa fa-heart-o"></i> 213收藏
                  </span>
                  <span title="评分">
                    <i class="wk-star star-45"></i> 4.5星
                  </span>
                </div>
              </div>
              <div class="wk-viewer">
                <div style="width:100%"> <d-player ref="player" :options="options"></d-player></div>
               
                <!-- <iframe src="http://localhost/pdf/web/viewer.html" width="100%" height="1000"></iframe> -->
              </div>

              <div class="help-block">
                <span>
                  本文档由
                  <a href="#">皇虫</a> 于
                  <span class="text-muted">2016-12-21 12:21</span>上传分享
                </span>
                <div class="pull-right">
                  给文档打分:
                  <span>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                  </span>
                </div>
              </div>
              <div class="help-block">
                <div class="pull-left">
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-question"></i> 使用帮助
                  </a>
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-warning"></i> 举报
                  </a>
                </div>
                <div class="pull-right wk-mgl-15px">
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-cloud-download"></i> 下载原文档
                  </a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-heart-o"></i> 收藏
                  </a>
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-share-alt"></i> 分享
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-3 wk-right">
				<div class="panel panel-default wk-noborder wk-maylike">
					<div class="panel-heading">
						<div class="strong">热门文档</div>
					</div>
					<div class="panel-body">
						<ul class="nav nav-tabs">
							<li class="active"><a href="#">本周</a></li>
							<li><a href="#">本月</a></li>
							<li><a href="#">全站</a></li>
						</ul>
						<ul class="wk-tabs-list">
							<li><img src="~@/assets/img/pdf_24.png"/><a href="#">第四课青春故事——不为追猩所累.pdf</a></li>
							<li><img src="~@/assets/img/excel_24.png"/><a href="#">小学一年级3班学生期末考试成绩.xls</a></li>
							<li><img src="~@/assets/img/ppt_24.png"/><a href="#">课件 雪地里的小画家.ppt</a></li>
							<li><img src="~@/assets/img/word_24.png"/><a href="#">写给忙得没时间陪孩子的爸爸们.doc</a></li>
							<li><img src="~@/assets/img/text_24.png"/><a href="#">卖小女孩的火柴.txt</a></li>
							<li><img src="~@/assets/img/pdf_24.png"/><a href="#">第四课青春故事——不为追猩所累.pdf</a></li>
							<li><img src="~@/assets/img/excel_24.png"/><a href="#">小学一年级3班学生期末考试成绩.xls</a></li>
							<li><img src="~@/assets/img/ppt_24.png"/><a href="#">课件 雪地里的小画家.ppt</a></li>
							<li><img src="~@/assets/img/word_24.png"/><a href="#">写给忙得没时间陪孩子的爸爸们.doc</a></li>
							<li><img src="~@/assets/img/text_24.png"/><a href="#">卖小女孩的火柴.txt</a></li>
						</ul>
					</div>
				</div>
				<div class="panel panel-default wk-noborder wk-maylike">
					<div class="panel-heading">
						<div class="strong">相关文档</div>
					</div>
					<div class="panel-body">
						<ul>
							<li><img src="~@/assets/img/pdf_24.png"/><a href="#">第四课青春故事——不为追猩所累.pdf</a></li>
							<li><img src="~@/assets/img/excel_24.png"/><a href="#">小学一年级3班学生期末考试成绩.xls</a></li>
							<li><img src="~@/assets/img/ppt_24.png"/><a href="#">课件 雪地里的小画家.ppt</a></li>
							<li><img src="~@/assets/img/word_24.png"/><a href="#">写给忙得没时间陪孩子的爸爸们.doc</a></li>
							<li><img src="~@/assets/img/text_24.png"/><a href="#">卖小女孩的火柴.txt</a></li>
							<li><img src="~@/assets/img/pdf_24.png"/><a href="#">第四课青春故事——不为追猩所累.pdf</a></li>
							<li><img src="~@/assets/img/excel_24.png"/><a href="#">小学一年级3班学生期末考试成绩.xls</a></li>
							<li><img src="~@/assets/img/ppt_24.png"/><a href="#">课件 雪地里的小画家.ppt</a></li>
							<li><img src="~@/assets/img/pdf_24.png"/><a href="#">第四课青春故事——不为追猩所累.pdf</a></li>
							<li><img src="~@/assets/img/excel_24.png"/><a href="#">小学一年级3班学生期末考试成绩.xls</a></li>
						</ul>
					</div>
				</div>
        </div>
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
    
  </div>
</template>
<script>
import breadcrumb from "./breadcrumb.vue";
export default {
  data() {
    return {};
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
.file-title {
  font-size: 22px;
  margin: 0px;
  line-height: 150%;
  font-family: inherit;
  font-weight: 700;
  color: rgb(52,73,94)
}
.container-box {
  /* width: 1250px; */
  /* margin: 10px auto; */
}

.el-footer {
  background-color: rgb(250, 250, 250);
  /* height: 200px !important; */
  height: 100% !important;
  color: #8c8c8c
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
  /* width: 1250px; */
  /* margin: 10px auto; */
}
.navbar-box {
  /* width: 1250px; */
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 100px;
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
  margin-left: 70px;
}
.row{
  margin-right: 100px;
    margin-left: 100px;
}
a{
  color: #555;
}
</style>


<script type="text/ecmascript-6">
  import dPlayer from 'vue-dplayer'
  import 'vue-dplayer/dist/vue-dplayer.css'

  export default {
    name: 'in-video',
    props: {
      source: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        player: null,
        options: {
          video: {
            url: 'https://yuokonw.oss-cn-shenzhen.aliyuncs.com/%E5%8A%B1%E5%BF%97%E5%88%B0%E7%88%86%E8%A1%A8%EF%BC%8C%E5%B0%8F%E7%B1%B35%E5%91%A8%E5%B9%B4%E6%84%9F%E6%81%A9%E8%A7%86%E9%A2%91%E2%80%94%E2%80%94%E5%A5%94%E8%B7%91%E5%90%A7%EF%BC%81%E5%85%84%E5%BC%9F_%E8%B6%85%E6%B8%85.mp4'
          },
          contextmenu: [
            {}
          ]
        }
      }
    },
    mounted() {
      this.player = this.$refs.player.dp
    },
	created() {
      this._setVideoUrl(this.source)
    },
    methods: {
      // 设置视频播放路径
      _setVideoUrl (url) {
        this.player.switchVideo({
          url: url
        })
      }
    },
    components: {
      dPlayer
    }
  }
</script>