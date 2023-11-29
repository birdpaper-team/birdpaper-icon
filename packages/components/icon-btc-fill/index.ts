import type { App } from 'vue';
import _IconBtcFill from './icon-btc-fill.vue';

const IconBtcFill = Object.assign(_IconBtcFill, {
  install: (app: App) => {
    app.component(_IconBtcFill.name, _IconBtcFill);
  }
});

export default IconBtcFill;