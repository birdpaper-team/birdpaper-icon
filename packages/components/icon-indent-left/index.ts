import type { App } from 'vue';
import _IconIndentLeft from './icon-indent-left.vue';

const IconIndentLeft = Object.assign(_IconIndentLeft, {
  install: (app: App) => {
    app.component(_IconIndentLeft.name, _IconIndentLeft);
  }
});

export default IconIndentLeft;