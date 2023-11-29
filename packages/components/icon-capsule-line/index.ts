import type { App } from 'vue';
import _IconCapsuleLine from './icon-capsule-line.vue';

const IconCapsuleLine = Object.assign(_IconCapsuleLine, {
  install: (app: App) => {
    app.component(_IconCapsuleLine.name, _IconCapsuleLine);
  }
});

export default IconCapsuleLine;