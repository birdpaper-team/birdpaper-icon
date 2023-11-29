import type { App } from 'vue';
import _IconLoginCircleFill from './icon-login-circle-fill.vue';

const IconLoginCircleFill = Object.assign(_IconLoginCircleFill, {
  install: (app: App) => {
    app.component(_IconLoginCircleFill.name, _IconLoginCircleFill);
  }
});

export default IconLoginCircleFill;