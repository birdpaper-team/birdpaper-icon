import type { App } from 'vue';
import _IconFlipVertically from './icon-flip-vertically.vue';

const IconFlipVertically = Object.assign(_IconFlipVertically, {
  install: (app: App) => {
    app.component(_IconFlipVertically.name, _IconFlipVertically);
  }
});

export default IconFlipVertically;