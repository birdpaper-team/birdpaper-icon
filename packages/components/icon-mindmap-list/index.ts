import type { App } from 'vue';
import _IconMindmapList from './icon-mindmap-list.vue';

const IconMindmapList = Object.assign(_IconMindmapList, {
  install: (app: App) => {
    app.component(_IconMindmapList.name, _IconMindmapList);
  }
});

export default IconMindmapList;