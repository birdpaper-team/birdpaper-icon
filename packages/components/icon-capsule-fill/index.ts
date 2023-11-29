import type { App } from 'vue';
import _IconCapsuleFill from './icon-capsule-fill.vue';

const IconCapsuleFill = Object.assign(_IconCapsuleFill, {
  install: (app: App) => {
    app.component(_IconCapsuleFill.name, _IconCapsuleFill);
  }
});

export default IconCapsuleFill;