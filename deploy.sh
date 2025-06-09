#!/bin/bash

# 檢查 dist 目錄是否存在
if [ ! -d "dist" ]; then
    echo "錯誤:dist 目錄不存在，請先執行 npm run build"
    exit 1
fi

# 進入 dist 目錄
cd dist || exit 1

# 檢查是否已經初始化 git 倉庫
if [ ! -d ".git" ]; then
    echo "初始化 git 倉庫..."
    git init
    git remote add origin "$(git -C .. config --get remote.origin.url)"
fi

# 添加所有檔案
git add .

# 提交更改
if [ -z "$1" ]; then
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
else
    git commit -m "$1"
fi

# 推送到 gh-pages 分支
echo "正在推送到 gh-pages 分支..."
if ! git push -f origin HEAD:gh-pages; then
    echo "錯誤：推送失敗"
    exit 1
fi

echo "部署完成！"