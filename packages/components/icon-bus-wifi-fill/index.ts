import type { App } from 'vue';
import _IconBusWifiFill from './icon-bus-wifi-fill.vue';

const IconBusWifiFill = Object.assign(_IconBusWifiFill, {
  install: (app: App) => {
    app.component(_IconBusWifiFill.name, _IconBusWifiFill);
  }
});

export default IconBusWifiFill;