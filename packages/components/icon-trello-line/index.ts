import type { App } from 'vue';
import _IconTrelloLine from './icon-trello-line.vue';

const IconTrelloLine = Object.assign(_IconTrelloLine, {
  install: (app: App) => {
    app.component(_IconTrelloLine.name, _IconTrelloLine);
  }
});

export default IconTrelloLine;