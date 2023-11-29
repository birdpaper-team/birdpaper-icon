import type { App } from 'vue';
import _IconMilkOne from './icon-milk-one.vue';

const IconMilkOne = Object.assign(_IconMilkOne, {
  install: (app: App) => {
    app.component(_IconMilkOne.name, _IconMilkOne);
  }
});

export default IconMilkOne;