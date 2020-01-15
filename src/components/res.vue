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
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/ppt.png",
          title: "PPT区",
          subtitle: "温故而知新",
          go: "/index/list"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/视频.png",
          title: "视频区",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生",
          go: "/video"
        },

        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/问题.png",
          title: "问题区",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        },
        {
          url:
            "https://bdimges.oss-cn-shenzhen.aliyuncs.com/github_Img/讨论 (1).png",
          title: "讨论区",
          subtitle:
            " 材料力学(mechanics of materials)是研究材料在各种外力作用下产生"
        },
      ]
    };
  },
  components: {
    card
  }
};
</script>