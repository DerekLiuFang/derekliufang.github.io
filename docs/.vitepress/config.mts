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
          { text: "next.js", link: "/reactjs-stack/nextjs" },
        ],
      },
      {
        text: "Docker",
        items: [
          { text: "Docker基础", link: "/docker-stack/1-docker-basic" },
          { text: "Docker File", link: "/docker-stack/docker-file" },
        ],
      },
      {
        text: "Vitepress",
        items: [
          { text: "vitepress + github搭建博客", link: "/vitepress-blog/index" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "markdown example", link: "/markdown-examples" },
          { text: "api example", link: "/api-examples" },
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
