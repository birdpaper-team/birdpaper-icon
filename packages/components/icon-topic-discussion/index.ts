import type { App } from 'vue';
import _IconTopicDiscussion from './icon-topic-discussion.vue';

const IconTopicDiscussion = Object.assign(_IconTopicDiscussion, {
  install: (app: App) => {
    app.component(_IconTopicDiscussion.name, _IconTopicDiscussion);
  }
});

export default IconTopicDiscussion;