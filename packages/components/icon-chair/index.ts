import type { App } from 'vue';
import _IconChair from './icon-chair.vue';

const IconChair = Object.assign(_IconChair, {
  install: (app: App) => {
    app.component(_IconChair.name, _IconChair);
  }
});

export default IconChair;