import type { App } from 'vue';
import _IconEditTwo from './icon-edit-two.vue';

const IconEditTwo = Object.assign(_IconEditTwo, {
  install: (app: App) => {
    app.component(_IconEditTwo.name, _IconEditTwo);
  }
});

export default IconEditTwo;