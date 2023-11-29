import type { App } from 'vue';
import _IconNext from './icon-next.vue';

const IconNext = Object.assign(_IconNext, {
  install: (app: App) => {
    app.component(_IconNext.name, _IconNext);
  }
});

export default IconNext;