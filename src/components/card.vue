<template>
  <div>
    <div class="card-box">
      <div
        v-for="(item,index) in cardOption"
        class="jb_top_jobs_category jb_cover"
        @click="go(index)"
        :key="item.title"
      >
        <div class="card-img">
          <img :src="item.url" width="75" height="75" alt="weNEU" style=" filter: grayscale(0%);" />
        </div>
        <div class="card-title">
          
            <span>{{item.title}}</span>
            <!-- <a href="#">土木工程材料</a> -->
            <!-- <router-link :to="item.go" tag="span">{{item.title}}</router-link> -->
          
        </div>
        <div class="card-subtitle">{{item.subtitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      cardOption: []
    };
  },
  methods: {
    go(index){
      // console.log(index)
      //  console.log(this.cardOption[index].go);
      this.$router.push({
        path: this.cardOption[index].go
      })
    }
  },
  created() {
    this.cardOption = this.option;
    // console.log(this.cardOption);
  },
  props: {
    option: Array
  }
};
</script>



<style scoped>
.card-box {
  display: flex;
  padding: 50px;
  width: 100%;
  flex-flow: row wrap;
  align-content: flex-start;

  /* justify-content: space-around; */
  /* height: 150px; */

  /* flex-wrap: wrap; */
}
.card-title {
  margin-top: 10px;
  font-size: 23px;
  color: #262626
}
.card-subtitle {
  width: 100%;
  color: #8c8c8c;
  line-height: 20px;
  font-size: 14px;
}
.jb_top_jobs_category {
  flex: 0 0 25%;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 15px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 22px 20px 17px 20px;
  position: relative;
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
  margin: 10px;
  cursor: pointer;
}
.jb_cover {
  display: flow-root;
  width: 100%;
  cursor: pointer;
}
.jb_top_jobs_category:hover {
  box-shadow: 0 25px 30px -20px rgba(0, 36, 100, 0.4);
  -webkit-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  transition: all 0.6s;
}
</style>