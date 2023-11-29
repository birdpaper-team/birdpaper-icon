import type { App } from 'vue';
import _IconMounted from './icon-mounted.vue';

const IconMounted = Object.assign(_IconMounted, {
  install: (app: App) => {
    app.component(_IconMounted.name, _IconMounted);
  }
});

export default IconMounted;