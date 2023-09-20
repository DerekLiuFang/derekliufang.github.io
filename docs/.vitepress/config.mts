import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Leo.Frank的博客",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "开始阅读", link: "/vuejs-stack/vue-vite" },
    ],

    sidebar: [
      {
        text: "Vue.js",
        items: [
          { text: "vue3 + vite搭建脚手架", link: "/vuejs-stack/vue-vite" },
          { text: "vue3源码", link: "/vuejs-stack/vue-source-code" },
        ],
      },
      {
        text: "React.js",
        items: [
          { text: "react + vite搭建脚手架", link: "/reactjs-stack/react-vite" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DerekLiuFang/leofrank.github.io",
      },
    ],
  },
});
