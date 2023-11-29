import type { App } from 'vue';
import _IconReturn from './icon-return.vue';

const IconReturn = Object.assign(_IconReturn, {
  install: (app: App) => {
    app.component(_IconReturn.name, _IconReturn);
  }
});

export default IconReturn;