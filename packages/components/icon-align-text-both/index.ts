import type { App } from 'vue';
import _IconAlignTextBoth from './icon-align-text-both.vue';

const IconAlignTextBoth = Object.assign(_IconAlignTextBoth, {
  install: (app: App) => {
    app.component(_IconAlignTextBoth.name, _IconAlignTextBoth);
  }
});

export default IconAlignTextBoth;