import type { App } from 'vue';
import _IconRattleOne from './icon-rattle-one.vue';

const IconRattleOne = Object.assign(_IconRattleOne, {
  install: (app: App) => {
    app.component(_IconRattleOne.name, _IconRattleOne);
  }
});

export default IconRattleOne;