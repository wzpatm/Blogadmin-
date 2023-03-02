import VueMarkdownEditor,{ xss } from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';//代码行号
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';//复制代码
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
Prism.manual = true;
Prism.highlightAll();

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
  });
  VueMarkdownEditor.use(createLineNumbertPlugin());
  VueMarkdownEditor.use(createCopyCodePlugin());

export default VueMarkdownEditor