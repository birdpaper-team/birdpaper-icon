import type { App } from 'vue';
import _IconRanking from './icon-ranking.vue';

const IconRanking = Object.assign(_IconRanking, {
  install: (app: App) => {
    app.component(_IconRanking.name, _IconRanking);
  }
});

export default IconRanking;