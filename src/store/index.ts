import { createPinia } from 'pinia';
import { resetSetupStore } from './plugins';
import type { App } from 'vue';

/**
 * Setup Vue store plugin pinia
 * @descCN 配置pinia
 * @param app vue实例
 */
export function setupStore(app: App<Element>) {
  // 创建pinia实例
  const store = createPinia();

  // 使用重置store状态插件
  store.use(resetSetupStore);

  app.use(store);
}
