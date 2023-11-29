import type { App } from 'vue';
import _IconMassageChair from './icon-massage-chair.vue';

const IconMassageChair = Object.assign(_IconMassageChair, {
  install: (app: App) => {
    app.component(_IconMassageChair.name, _IconMassageChair);
  }
});

export default IconMassageChair;