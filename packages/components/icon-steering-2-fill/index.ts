import type { App } from 'vue';
import _IconSteering2Fill from './icon-steering-2-fill.vue';

const IconSteering2Fill = Object.assign(_IconSteering2Fill, {
  install: (app: App) => {
    app.component(_IconSteering2Fill.name, _IconSteering2Fill);
  }
});

export default IconSteering2Fill;