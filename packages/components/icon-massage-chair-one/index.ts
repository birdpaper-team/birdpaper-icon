import type { App } from 'vue';
import _IconMassageChairOne from './icon-massage-chair-one.vue';

const IconMassageChairOne = Object.assign(_IconMassageChairOne, {
  install: (app: App) => {
    app.component(_IconMassageChairOne.name, _IconMassageChairOne);
  }
});

export default IconMassageChairOne;