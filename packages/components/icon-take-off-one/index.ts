import type { App } from 'vue';
import _IconTakeOffOne from './icon-take-off-one.vue';

const IconTakeOffOne = Object.assign(_IconTakeOffOne, {
  install: (app: App) => {
    app.component(_IconTakeOffOne.name, _IconTakeOffOne);
  }
});

export default IconTakeOffOne;