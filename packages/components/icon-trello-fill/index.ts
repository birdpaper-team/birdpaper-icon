import type { App } from 'vue';
import _IconTrelloFill from './icon-trello-fill.vue';

const IconTrelloFill = Object.assign(_IconTrelloFill, {
  install: (app: App) => {
    app.component(_IconTrelloFill.name, _IconTrelloFill);
  }
});

export default IconTrelloFill;