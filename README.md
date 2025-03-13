# Finwise - 智能财务管理

![Finwise Logo](/public/favicon.svg)

Finwise是一款现代化的财务管理应用，旨在帮助用户追踪支出、有效预算和做出更明智的投资决策。该应用采用Next.js、Tailwind CSS和Shadcn UI构建，提供了时尚、响应式的界面和强大的财务工具。

[English Version](./README-EN.md)

## 功能特点

- **智能预算**: 智能分类、可定制目标和预测分析
- **无缝投资**: 微型投资、专家投资组合和实时业绩跟踪
- **银行级安全**: 军事级加密、生物识别认证和实时欺诈检测
- **响应式设计**: 完全优化适配从移动设备到桌面的所有设备
- **现代化界面**: 简洁、直观的界面，流畅的动画和交互

## 技术栈

- **框架**: [Next.js](https://nextjs.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI组件**: [Shadcn UI](https://ui.shadcn.com/)
- **字体**: 来自Google Fonts的[Inter](https://fonts.google.com/specimen/Inter)
- **图标**: 自定义SVG图标

## 项目结构

```
finwise/
├── app/                  # Next.js应用目录
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 根布局组件
│   └── page.tsx          # 首页组件
├── components/           # React组件
│   ├── ui/               # 来自Shadcn的UI组件
│   ├── Header.tsx        # 网站头部导航
│   ├── Hero.tsx          # 英雄区块
│   ├── Features.tsx      # 功能特点区块
│   ├── Investing.tsx     # 投资区块
│   ├── Security.tsx      # 安全区块
│   ├── Pricing.tsx       # 价格方案
│   ├── Testimonials.tsx  # 用户评价
│   ├── FAQ.tsx           # 常见问题
│   ├── Contact.tsx       # 联系表单和信息
│   ├── CTA.tsx           # 行动召唤区块
│   ├── Footer.tsx        # 网站底部
│   └── ...               # 其他组件
├── public/               # 静态资源
│   └── favicon.svg       # 网站图标
└── ...
```

## 开始使用

### 前提条件

- Node.js 18.x或更高版本
- npm或yarn

### 安装步骤

1. 克隆仓库:
   ```bash
   git clone https://github.com/yourusername/finwise.git
   cd finwise
   ```

2. 安装依赖:
   ```bash
   npm install
   # 或
   yarn install
   ```

3. 运行开发服务器:
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

4. 在浏览器中打开[http://localhost:3000](http://localhost:3000)查看应用。

## 自定义

### 样式

项目使用Tailwind CSS进行样式设计。你可以在`app/globals.css`文件中自定义主题。

### 组件

所有组件都位于`components`目录中。每个组件都是独立的，可以单独修改。

### 添加页面

要添加新页面，请按照Next.js App Router约定在`app`目录中创建新文件。

## 部署

此项目可以部署在任何支持Next.js应用的平台上，例如:

- [Vercel](https://vercel.com/) (推荐)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 许可证

本项目采用MIT许可证 - 详情请参阅LICENSE文件。

## 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Shadcn UI](https://ui.shadcn.com/) - UI组件
- [React](https://reactjs.org/) - 用于构建用户界面的JavaScript库

---

由[你的名字/公司]设计和开发 ❤️
