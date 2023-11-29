import type { App } from 'vue';
import _IconMultiRectangle from './icon-multi-rectangle.vue';

const IconMultiRectangle = Object.assign(_IconMultiRectangle, {
  install: (app: App) => {
    app.component(_IconMultiRectangle.name, _IconMultiRectangle);
  }
});

export default IconMultiRectangle;