import type { App } from 'vue';
import _IconFindReplaceLine from './icon-find-replace-line.vue';

const IconFindReplaceLine = Object.assign(_IconFindReplaceLine, {
  install: (app: App) => {
    app.component(_IconFindReplaceLine.name, _IconFindReplaceLine);
  }
});

export default IconFindReplaceLine;