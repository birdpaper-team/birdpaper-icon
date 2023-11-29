import type { App } from 'vue';
import _IconAlignJustify from './icon-align-justify.vue';

const IconAlignJustify = Object.assign(_IconAlignJustify, {
  install: (app: App) => {
    app.component(_IconAlignJustify.name, _IconAlignJustify);
  }
});

export default IconAlignJustify;