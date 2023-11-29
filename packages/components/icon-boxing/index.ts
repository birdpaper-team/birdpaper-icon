import type { App } from 'vue';
import _IconBoxing from './icon-boxing.vue';

const IconBoxing = Object.assign(_IconBoxing, {
  install: (app: App) => {
    app.component(_IconBoxing.name, _IconBoxing);
  }
});

export default IconBoxing;