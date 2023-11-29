import type { App } from 'vue';
import _IconDribbbleLine from './icon-dribbble-line.vue';

const IconDribbbleLine = Object.assign(_IconDribbbleLine, {
  install: (app: App) => {
    app.component(_IconDribbbleLine.name, _IconDribbbleLine);
  }
});

export default IconDribbbleLine;