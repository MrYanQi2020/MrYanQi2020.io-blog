#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
npm install -g vuepress@next
npm install vuepress-theme-reco --save-dev
# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '【css】 flex 子元素属性'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://${token}@${address} master:master
git push -f https://gitee.com/mryanqi2020/mryanqi2020.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
