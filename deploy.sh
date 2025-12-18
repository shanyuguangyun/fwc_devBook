#!/usr/bin/env sh
set -e  # 出错即停止

# 1. 构建静态文件（假设用 VuePress，对应 npm run docs:build）
npm run docs:build

# 2. 切换到 gh-pages 分支（若不存在则创建）
git checkout --orphan gh-pages

# 3. 清空当前分支所有文件（避免残留旧文件）
git rm -rf .

# 4. 复制 dist 下的所有文件到当前工作区（排除 .git 等）
cp -r/.vuepress/dist/* .

# 5. 提交并推送
git add -A
git commit -m "deploy"
git push -f origin gh-pages

# 6. 切回原分支（如 main/master）
git checkout -