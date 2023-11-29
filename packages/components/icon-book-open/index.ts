import type { App } from 'vue';
import _IconBookOpen from './icon-book-open.vue';

const IconBookOpen = Object.assign(_IconBookOpen, {
  install: (app: App) => {
    app.component(_IconBookOpen.name, _IconBookOpen);
  }
});

export default IconBookOpen;