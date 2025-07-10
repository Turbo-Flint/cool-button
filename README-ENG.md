# Cool Button
[Chinese](README.md)
Cool Button is a CSS button style that can be quickly called and used, offering a wide range of customizable options. Additionally, Cool Button provides auxiliary commands for Sass building, allowing you to rebuild files using Sass.

[Cool Button Online Preview](https://dev.turboflint.cn/cool-button/view)
[Cool Button Website](https://dev.turboflint.cn/cool-button)
[Cool Button Documentation](https://dev.turboflint.cn/docs/cool-button)

# Why Choose Cool Button?
Cool Button is only 13KB after compression, which has a negligible impact on your project. It's particularly suitable for small - scale websites.

# Installation and Usage

## CDN
In the beta4 version, we removed most of the bloated button styles. You can directly import the styles as follows:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cool-button@latest/css/style.min.css">
```

## npm Installation
Install Cool Button in your project:
```bash
npm install flint-cool-button
```
### Direct CSS Usage
Import it in your CSS file:
```css
/* Sass / SCSS */
@import 'flint-cool-button/';
/* Plain CSS */
@import url('flint-cool-button/');
```

### Front - end Frameworks
In a front - end framework, make sure you have configured Webpack or other bundling processes. Then import it like this to use it:
```javascript
// Direct import
import 'flint-cool-button';
// If you want to import Sass directly, make sure your project has the corresponding loader configured.
import 'flint-cool-button/sass/style.sass';
```

## Sass Building
This method is suitable for developers who want to perform secondary development based on the existing styles of Cool Button. You can build files using Sass on your own. However, the generated files will be in an **uncompressed version**. Please compress them manually.

### Sass Structure
Starting from beta3, we've split the Sass files into three parts:
- `_variables.sass`: A variable file used to define variables.
- `style.sass`: The main file containing all styles.

### Start Building
In the beta4 version, build files like this:
```bash
npm run build
```

### Compress Files
To compress the built CSS files, first install `cleancss cli`:
```bash
npm install clean-css-cli -g
```
Then, compress the files when necessary:
```bash
npm run compress
```

### Custom Generation
If you want to generate custom files, make sure Sass is installed and execute the following command:
```bash
sass style.sass out_file_name.css
```
This way, you can rebuild CSS files.

# Open - Source License
This project is open - sourced under the MIT License. You can use it in any project. However, we still recommend **keeping the author information** or **adding a link to our project** in your project, which will be of great help to us.

# Have Questions?
If you find any issues, please submit an Issue directly. We'll respond to you as soon as possible. If you encounter problems during use, you can also reach out to us.

## Contact Us
You can contact us through the following methods:
Email: nathan@hlyun.org / ericlee517@outlook.com
Website: https://turboflint.cn