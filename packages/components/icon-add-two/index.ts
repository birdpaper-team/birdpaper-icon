import type { App } from 'vue';
import _IconAddTwo from './icon-add-two.vue';

const IconAddTwo = Object.assign(_IconAddTwo, {
  install: (app: App) => {
    app.component(_IconAddTwo.name, _IconAddTwo);
  }
});

export default IconAddTwo;