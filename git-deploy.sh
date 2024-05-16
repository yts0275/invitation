#!/bin/bash

# 사용법 확인
if [ $# -eq 0 ]; then
    echo "사용법: $0 <commit_message>"
    exit 1
fi

# 변경사항 스테이징
git add .

# 커밋
git commit -m "$1"

# 푸시
git push

cd ./invitation-frontend/

# 배포
npm run git