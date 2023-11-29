import type { App } from 'vue';
import _IconSkate from './icon-skate.vue';

const IconSkate = Object.assign(_IconSkate, {
  install: (app: App) => {
    app.component(_IconSkate.name, _IconSkate);
  }
});

export default IconSkate;