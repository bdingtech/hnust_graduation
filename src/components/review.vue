<template>
  <div>
    <card :option="option"></card>
  </div>
</template>
<script>
import card from "./card.vue";
export default {
  data() {
    return {
      option: [
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/cl.png",
          title: "土木工程材料",
          subtitle: " 《土木工程材料》是2011年重庆大学出版社出版的图书，作者是施惠生 、郭晓潞。本书主要介绍了土木工程中常用的土木工程材料的基本组成、材料性能、质量要求、检测方法，",
          go:'/index/detail'
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/设计.png",
          title: "材料力学-混凝土材料结构设计原理",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生",
         
        },
        
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/桥梁.png",
          title: "结构力学-桥梁工程",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/测试.png",
          title: "学习成果测验",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        }
      ]
    };
  },
  components: {
    card
  }
};
</script>