# Cool Button
[English](README-ENG.md)

Cool Button 是一个按钮CSS样式，可以快速调用使用，并具有丰富的自定义选项。另外，Cool Button 还提供了Sass构建辅助命令，你可以使用Sass重新构建文件。

[Cool Button 在线预览](https://dev.turboflint.cn/cool-button/view)

[Cool Button 网站](https://dev.turboflint.cn/cool-button)

[Cool Button 文档](https://dev.turboflint.cn/docs/cool-button)

# 为什么是 Cool Button？
Cool Button压缩后仅有13KB，对于你的项目来说，影响微乎其微，特别是对于小型网站来说，Cool Button就特别适合使用在其中。

# 安装与使用

## CDN
beta4版本中，我们删除了大部分臃肿的按钮样式，你可以直接这样引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cool-button@latest/css/style.min.css">
```

## npm安装
在你的项目下安装Cool Buton：

```bash
npm install flint-cool-button
```
### CSS直接使用

在你的CSS文件中引入：
```css
/* Sass / SCSS */
@import 'flint-cool-button/';
/* 原生CSS */
@import url('flint-cool-button/');
```

### 前端框架
在前端框架中，确保你已经配置好了Webpack或其他打包流程，然后像这样引入，就可以使用了：
```javascript
// 直接导入
import 'flint-cool-button';
// 如果向直接导入Sass，需确保项目配置了对应的 loader
import 'flint-cool-button/sass/style.sass';
```

## Sass构建
这个方法适合想要基于Cool Button已有样式进行二次开发的开发者，你可以自己使用Sass构建文件，但生成的文件将会是**未压缩版本**，请自行压缩。

### Sass结构
beta3开始，我们将Sass文件拆分了三个部分，分别是：
- `_variables.sass`：变量文件，用于定义变量
- `style.sass`：主要文件，包括所有样式。

### 开始构建
在beta4版本中，就像这样构建：
```bash
npm run build
```

### 压缩文件

想要压缩你构建后的css文件，请先安装`cleancss cli`：

```bash
npm install clean-css-cli -g
```

然后，在需要的时候压缩：
```bash
npm run compress
```

### 自定义生成

如果想要自定义生成的文件，请确保Sass安装后，执行：
```bash
sass style.sass out_file_name.css
```

这样你就可以重新构建css文件。

# 开源许可证
本项目使用MIT许可证开源，您可以使用在任意项目中，但我们仍然推荐**保留作者信息**或者**在您的项目中添加一个我们的链接**，这将对我们的项目产生极大的帮助。

# 有问题？
如果您发现了问题，请直接提交Issue，我们会尽快回复您。在使用中遇到了问题，你也可以向我们提出疑问。

## 联系我们
你可以通过以下方式联系到我们：
Email: nathan@hlyun.org / ericlee517@outlook.com
Website: https://turboflint.cn