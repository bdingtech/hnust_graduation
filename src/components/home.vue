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
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/学习.png",
          title: "知识聚拢",
          subtitle: "温故而知新,可以为师已",
          go:'/index/review'
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/设计 (1).png",
          title: "桥梁整体设计",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生",
          
        },
        
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/建模工具.png",
          title: "结构建模",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/分析.png",
          title: "结果分析与优化",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/整理起名基本信息.png",
          title: "成果整理",
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