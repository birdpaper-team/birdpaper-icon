import type { App } from 'vue';
import _IconShaverOne from './icon-shaver-one.vue';

const IconShaverOne = Object.assign(_IconShaverOne, {
  install: (app: App) => {
    app.component(_IconShaverOne.name, _IconShaverOne);
  }
});

export default IconShaverOne;