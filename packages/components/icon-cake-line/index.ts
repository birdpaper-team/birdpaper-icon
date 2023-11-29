import type { App } from 'vue';
import _IconCakeLine from './icon-cake-line.vue';

const IconCakeLine = Object.assign(_IconCakeLine, {
  install: (app: App) => {
    app.component(_IconCakeLine.name, _IconCakeLine);
  }
});

export default IconCakeLine;