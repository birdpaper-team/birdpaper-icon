import type { App } from 'vue';
import _IconCeMarking from './icon-ce-marking.vue';

const IconCeMarking = Object.assign(_IconCeMarking, {
  install: (app: App) => {
    app.component(_IconCeMarking.name, _IconCeMarking);
  }
});

export default IconCeMarking;