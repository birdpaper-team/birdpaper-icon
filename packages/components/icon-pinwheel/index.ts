import type { App } from 'vue';
import _IconPinwheel from './icon-pinwheel.vue';

const IconPinwheel = Object.assign(_IconPinwheel, {
  install: (app: App) => {
    app.component(_IconPinwheel.name, _IconPinwheel);
  }
});

export default IconPinwheel;