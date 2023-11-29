import type { App } from 'vue';
import _IconMark from './icon-mark.vue';

const IconMark = Object.assign(_IconMark, {
  install: (app: App) => {
    app.component(_IconMark.name, _IconMark);
  }
});

export default IconMark;