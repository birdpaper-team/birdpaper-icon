import type { App } from 'vue';
import _IconDocFail from './icon-doc-fail.vue';

const IconDocFail = Object.assign(_IconDocFail, {
  install: (app: App) => {
    app.component(_IconDocFail.name, _IconDocFail);
  }
});

export default IconDocFail;