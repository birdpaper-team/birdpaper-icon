import type { App } from 'vue';
import _IconFlipHorizontally from './icon-flip-horizontally.vue';

const IconFlipHorizontally = Object.assign(_IconFlipHorizontally, {
  install: (app: App) => {
    app.component(_IconFlipHorizontally.name, _IconFlipHorizontally);
  }
});

export default IconFlipHorizontally;