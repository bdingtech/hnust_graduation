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
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/钢筋.png",
          title: "钢筋",
          subtitle: "温故而知新",
          go: "/index/res"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/钢筋材料.png",
          title: "预应力钢筋",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生",
        
        },

        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/混凝土.png",
          title: "混凝土",
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