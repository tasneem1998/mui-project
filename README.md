### setup
## # create app
- `npx create-react-app mui-project`
after successfully app created can run below command
- `cd mui-project`
- `npm start`

## # git repo
- git init
- git add .
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/tasneem1998/mui-project.git
- git push -u origin main

## # mui installations
- `npm install @mui/material @emotion/react @emotion/styled`
- `npm install @mui/icons-material`

## # Deployment
- `npm install gh-pages --save-dev`

changes in package.json

- "homepage": "http://tasneem1998.github.io/mui-project"
- "predeploye": "npm run build",
    "deploye": "gh-pages -d build"