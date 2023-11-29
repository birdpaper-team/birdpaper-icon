import type { App } from 'vue';
import _IconCool from './icon-cool.vue';

const IconCool = Object.assign(_IconCool, {
  install: (app: App) => {
    app.component(_IconCool.name, _IconCool);
  }
});

export default IconCool;