import type { App } from 'vue';
import _IconDocSuccess from './icon-doc-success.vue';

const IconDocSuccess = Object.assign(_IconDocSuccess, {
  install: (app: App) => {
    app.component(_IconDocSuccess.name, _IconDocSuccess);
  }
});

export default IconDocSuccess;