# Cool Button
Cool Button 是一个按钮CSS样式，可以快速调用使用，并具有丰富的自定义选项。

另外，Cool Button 还提供了Sass构建辅助命令，你可以使用Sass重新构建文件。

你可以前往[Cool Button 在线预览](https://dev.turboflint.cn/cool-button)查看最新版本的按钮样式。

# 使用方法

## Sass构建
你可以自己使用Sass构建文件，但生成的文件将会是**未压缩版本**，请自行压缩。

### Sass结构
beta3开始，我们将Sass文件拆分了三个部分，分别是：
- `_variables.sass`：变量文件，用于定义变量
- `main.sass`：主要文件，包括所有样式。
- `hover.sass`：只包括hover部分的样式
- `basic.sass`：包括除了hover的基础样式

### 开始构建
在beta3版本中，我们把sass文件拆分了三个部分，因此你需要指定生成的部分，就像：
```bash
npm run build:main
```
如果想要构建所有sass文件：
```bash
npm run build:all
```

如果你想要实时构建：
```bash
npm run watch:main
```

### 压缩文件

想要压缩你构建后的css文件，请先安装`cleancss cli`：
```bash
npm install clean-css-cli -g
```

然后，在需要的时候指定压缩的部分：
```bash
npm run compress:main
```

如果想要压缩所有文件：
```bash
npm run compress:all
```

同时，压缩版会生成在`xxx.min.css`

### 自定义生成

如果想要自定义生成的文件，请确保Sass安装后，执行：
```bash
sass style.sass out_file_name.css
```

这样你就可以重新构建css文件。
## CDN
beta3版本中，由于压缩后的文件仍然较大，你可以选择引入**完整版**、**Hover版**或**基础版**。我们推荐您使用基础版，已经可以满足您的日常开发需求：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Turbo-Flint/cool-button@latest/css/basic.min.css">
```

如果你需要完整版本的话：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Turbo-Flint/cool-button@latest/css/main.min.css">
```

或者Hover版：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Turbo-Flint/cool-button@latest/css/hover.min.css">
```

**当前Beta版本可能会随时修改样式，请在使用时注意更新。**