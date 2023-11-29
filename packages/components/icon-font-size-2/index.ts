import type { App } from 'vue';
import _IconFontSize2 from './icon-font-size-2.vue';

const IconFontSize2 = Object.assign(_IconFontSize2, {
  install: (app: App) => {
    app.component(_IconFontSize2.name, _IconFontSize2);
  }
});

export default IconFontSize2;