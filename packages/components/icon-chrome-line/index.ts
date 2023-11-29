import type { App } from 'vue';
import _IconChromeLine from './icon-chrome-line.vue';

const IconChromeLine = Object.assign(_IconChromeLine, {
  install: (app: App) => {
    app.component(_IconChromeLine.name, _IconChromeLine);
  }
});

export default IconChromeLine;