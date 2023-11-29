import type { App } from 'vue';
import _IconOther from './icon-other.vue';

const IconOther = Object.assign(_IconOther, {
  install: (app: App) => {
    app.component(_IconOther.name, _IconOther);
  }
});

export default IconOther;