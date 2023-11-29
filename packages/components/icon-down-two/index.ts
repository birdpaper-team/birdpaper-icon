import type { App } from 'vue';
import _IconDownTwo from './icon-down-two.vue';

const IconDownTwo = Object.assign(_IconDownTwo, {
  install: (app: App) => {
    app.component(_IconDownTwo.name, _IconDownTwo);
  }
});

export default IconDownTwo;