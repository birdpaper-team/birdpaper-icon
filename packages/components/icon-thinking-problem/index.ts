import type { App } from 'vue';
import _IconThinkingProblem from './icon-thinking-problem.vue';

const IconThinkingProblem = Object.assign(_IconThinkingProblem, {
  install: (app: App) => {
    app.component(_IconThinkingProblem.name, _IconThinkingProblem);
  }
});

export default IconThinkingProblem;