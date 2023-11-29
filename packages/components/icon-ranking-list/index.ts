import type { App } from 'vue';
import _IconRankingList from './icon-ranking-list.vue';

const IconRankingList = Object.assign(_IconRankingList, {
  install: (app: App) => {
    app.component(_IconRankingList.name, _IconRankingList);
  }
});

export default IconRankingList;