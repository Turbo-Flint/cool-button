# Cool Button
Cool Button 是一个按钮CSS样式，可以快速调用使用，并具有丰富的自定义选项。

另外，Cool Button 还提供了Sass构建辅助命令，你可以使用Sass重新构建文件。

# 如何使用？
目前处于beta阶段，请以最终发行版为准，因此请先直接下载库解压后自行测试使用。

## Sass构建
你可以自己使用Sass构建文件，但生成的文件将会是**未压缩版本**，请自行压缩。

请先提前安装Sass后，命令行执行：
```bash
npm run build
```

如果想要实时编译，请执行：
```bash
npm run watch
```

### 压缩文件

想要压缩你构建后的`out.css`文件，请执行：
```bash
npm run compress
```

同时，压缩版会生成在`out.min.css`

### 自定义生成

如果想要指定生成的文件名，请先安装cleancss：
```bash
npm install clean-css-cli -g
```

然后，在需要的时候执行：
```bash
sass style.sass out_file_name.css
```

这样你就可以重新构建css文件。
## CDN
引入css文件后，即可直接使用。
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Turbo-Flint/cool-button@latest/out.css">
```

**当前Beta版本可能会随时修改样式，请在使用时注意更新。**