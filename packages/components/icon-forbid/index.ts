import type { App } from 'vue';
import _IconForbid from './icon-forbid.vue';

const IconForbid = Object.assign(_IconForbid, {
  install: (app: App) => {
    app.component(_IconForbid.name, _IconForbid);
  }
});

export default IconForbid;