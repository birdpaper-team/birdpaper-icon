import type { App } from 'vue';
import _IconLeavesOne from './icon-leaves-one.vue';

const IconLeavesOne = Object.assign(_IconLeavesOne, {
  install: (app: App) => {
    app.component(_IconLeavesOne.name, _IconLeavesOne);
  }
});

export default IconLeavesOne;