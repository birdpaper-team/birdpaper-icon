import type { App } from 'vue';
import _IconHelpcenter from './icon-helpcenter.vue';

const IconHelpcenter = Object.assign(_IconHelpcenter, {
  install: (app: App) => {
    app.component(_IconHelpcenter.name, _IconHelpcenter);
  }
});

export default IconHelpcenter;