/**
 * @description 命令行直接生成组件开发模板
 * 
 * 在命令行输入 node src/generator.ts Test  注意要大写
 */

const fs = require('fs')
const path = require('path')
let ejs = require('ejs')
let prettier = require('prettier')

const componentName = process.argv[2] || 'TestComponent'
const lowerName = componentName.toLowerCase()

const templatePath = path.join(__dirname, 'components', 'Template')   //模板路径
const toPath = path.join(__dirname, 'components', componentName)   //生成路径

console.log(`当前正在生成${process.argv[2]}组件模板.....`);

function copyDir (srcDir, desDir) {
  fs.readdir(srcDir, { withFileTypes: true }, (err, files) => {
    if (fs.existsSync(desDir)) {
      console.log("无法覆盖原文件, 请删除已有文件夹");
      return
    } else {
      fs.mkdirSync(desDir);
    }

    for (const file of files) {
      //判断是否为文件夹
      if (file.isDirectory()) {
        const dirS = path.resolve(srcDir, file.name);
        const dirD = path.resolve(desDir, file.name);
        //判断是否存在dirD文件夹
        if (!fs.existsSync(dirD)) {
          fs.mkdir(dirD, (err) => {
            if (err) console.log(err);
          });
        }
        copyDir(dirS, dirD);
      } else {
        function handleOutputFilename (name) {
          if (name === 'template.stories.ejs') {
            return `${lowerName}.stories.tsx`
          }
          if (name === 'Template.ejs') {
            return `${componentName}.tsx`
          }
          if (name === 'index.ejs') {
            return `index.ts`
          }
        }
        const srcFile = path.resolve(srcDir, file.name);
        const desFile = path.resolve(desDir, handleOutputFilename(file.name));
        fs.copyFileSync(srcFile, desFile);

        //传入ejs渲染
        const template = fs.readFileSync(desFile, {
          encoding: 'utf-8'
        })
        const code = ejs.render(template, { name: componentName, lowname: lowerName })
        let newCode = prettier.format(code, {
          parser: "babel-ts"
        }); //格式化

        fs.writeFileSync(desFile, newCode)
      }
    }
  })
}

copyDir(templatePath, toPath)



