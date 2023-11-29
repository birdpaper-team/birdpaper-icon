import type { App } from 'vue';
import _IconMicrowaves from './icon-microwaves.vue';

const IconMicrowaves = Object.assign(_IconMicrowaves, {
  install: (app: App) => {
    app.component(_IconMicrowaves.name, _IconMicrowaves);
  }
});

export default IconMicrowaves;