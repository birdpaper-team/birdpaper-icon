import type { App } from 'vue';
import _IconStackOverflowFill from './icon-stack-overflow-fill.vue';

const IconStackOverflowFill = Object.assign(_IconStackOverflowFill, {
  install: (app: App) => {
    app.component(_IconStackOverflowFill.name, _IconStackOverflowFill);
  }
});

export default IconStackOverflowFill;