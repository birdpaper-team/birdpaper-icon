import type { App } from 'vue';
import _IconDrizzleLine from './icon-drizzle-line.vue';

const IconDrizzleLine = Object.assign(_IconDrizzleLine, {
  install: (app: App) => {
    app.component(_IconDrizzleLine.name, _IconDrizzleLine);
  }
});

export default IconDrizzleLine;