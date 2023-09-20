# leofrank.github.io

我的个人博客

**博客地址： <https://lenfrank.github.io/>**

## 工程结构

使用 VitePress 搭建。

```txt
lenfrank.github.io
├─.github           # github配置
│  └─workflows      # 自动构建部署配置
├─bin               # 执行脚本
├─components        # vue组件
├─docs              # 博客内容
│   ├─.vitepress
│   │  ├─config.ts  # vitepress配置
│   │  ├─cache      # 缓存文件，可忽略提交
│   │  ├─dist       # 构建包
│   │  └─theme      # 样式和主题
│   ├─index.md      # 博客首页
│   ├─vuejs-stack   # 按照技术栈存放博文
│   ├─reactjs-stack
│   ├─...           # 更多博客目录
│   └─public        # 博客使用的静态资源
├─.gitignore        # git提交忽略配置
├─package.json      # node.js配置
├─pnpm-lock.yaml    # 依赖的锁定版本号
└─README.md         # 工程说明
```

## 工程开发

```shell
# 安装依赖
pnpm install
# 开发模式启动
pnpm docs:dev
# 手动构建
pnpm docs:build
# 预览构建成果
pnpm docs:preview
# 上传构建成果到gh-pages分支（目前已不用该模式部署）
pnpm deploy:win
```

## 自动构建部署

push 到 GitHub 仓库，GitHub Actions 会自动触发，在 GtHub 服务器上自动构建并部署。
