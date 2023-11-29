import type { App } from 'vue';
import _IconRemind from './icon-remind.vue';

const IconRemind = Object.assign(_IconRemind, {
  install: (app: App) => {
    app.component(_IconRemind.name, _IconRemind);
  }
});

export default IconRemind;