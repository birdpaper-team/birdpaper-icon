import type { App } from 'vue';
import _IconIndentIncrease from './icon-indent-increase.vue';

const IconIndentIncrease = Object.assign(_IconIndentIncrease, {
  install: (app: App) => {
    app.component(_IconIndentIncrease.name, _IconIndentIncrease);
  }
});

export default IconIndentIncrease;