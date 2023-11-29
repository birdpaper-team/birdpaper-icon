import type { App } from 'vue';
import _IconClothesSweater from './icon-clothes-sweater.vue';

const IconClothesSweater = Object.assign(_IconClothesSweater, {
  install: (app: App) => {
    app.component(_IconClothesSweater.name, _IconClothesSweater);
  }
});

export default IconClothesSweater;