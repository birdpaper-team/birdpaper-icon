import type { App } from 'vue';
import _IconFileAddition from './icon-file-addition.vue';

const IconFileAddition = Object.assign(_IconFileAddition, {
  install: (app: App) => {
    app.component(_IconFileAddition.name, _IconFileAddition);
  }
});

export default IconFileAddition;