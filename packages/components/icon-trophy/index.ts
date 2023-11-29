import type { App } from 'vue';
import _IconTrophy from './icon-trophy.vue';

const IconTrophy = Object.assign(_IconTrophy, {
  install: (app: App) => {
    app.component(_IconTrophy.name, _IconTrophy);
  }
});

export default IconTrophy;