import type { App } from 'vue';
import _IconTrademarkFill from './icon-trademark-fill.vue';

const IconTrademarkFill = Object.assign(_IconTrademarkFill, {
  install: (app: App) => {
    app.component(_IconTrademarkFill.name, _IconTrademarkFill);
  }
});

export default IconTrademarkFill;