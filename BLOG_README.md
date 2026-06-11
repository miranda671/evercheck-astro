# 如何新增博客文章

在 `src/content/blog/` 目录下新建一个 `.md` 或 `.mdx` 文件，文件名即为 URL slug。

## 示例：新建 `my-new-post.md`

```markdown
---
title: "文章标题"
description: "文章摘要，用于 SEO 和博客卡片"
pubDate: 2026-07-01
author: "EverCheck Team"
category: "CGM Technology"       # 显示在博客卡片左上角
coverImage: "/your-image.jpg"    # 封面图，放在 public/ 目录下
coverAlt: "图片描述"
featured: false
---

这里写文章正文，支持标准 Markdown。

## 一级标题用 h2

正文内容……

### 小节用 h3

- 列表项 1
- 列表项 2
```

## 说明

- 文章写好保存后，**自动出现在 `/blog` 列表页**，无需修改任何其他文件
- 博客文章 URL 格式：`/blog/文件名（不含扩展名）`
- 封面图放在 `public/` 目录下，`coverImage` 填写 `/文件名.jpg`
- `pubDate` 支持 `YYYY-MM-DD` 格式
- `.mdx` 文件支持在 Markdown 中直接嵌入 HTML

## 可用 category 值（自由填写）

- CGM Technology
- Manufacturing
- Regulatory
- Market Insights
- Partnership
