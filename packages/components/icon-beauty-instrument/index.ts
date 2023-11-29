import type { App } from 'vue';
import _IconBeautyInstrument from './icon-beauty-instrument.vue';

const IconBeautyInstrument = Object.assign(_IconBeautyInstrument, {
  install: (app: App) => {
    app.component(_IconBeautyInstrument.name, _IconBeautyInstrument);
  }
});

export default IconBeautyInstrument;