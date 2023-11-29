import type { App } from 'vue';
import _IconIndentDecrease from './icon-indent-decrease.vue';

const IconIndentDecrease = Object.assign(_IconIndentDecrease, {
  install: (app: App) => {
    app.component(_IconIndentDecrease.name, _IconIndentDecrease);
  }
});

export default IconIndentDecrease;