import type { App } from 'vue';
import _IconGastrointestinal from './icon-gastrointestinal.vue';

const IconGastrointestinal = Object.assign(_IconGastrointestinal, {
  install: (app: App) => {
    app.component(_IconGastrointestinal.name, _IconGastrointestinal);
  }
});

export default IconGastrointestinal;