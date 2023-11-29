import type { App } from 'vue';
import _IconDataNull from './icon-data-null.vue';

const IconDataNull = Object.assign(_IconDataNull, {
  install: (app: App) => {
    app.component(_IconDataNull.name, _IconDataNull);
  }
});

export default IconDataNull;