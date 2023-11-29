import type { App } from 'vue';
import _IconPress from './icon-press.vue';

const IconPress = Object.assign(_IconPress, {
  install: (app: App) => {
    app.component(_IconPress.name, _IconPress);
  }
});

export default IconPress;