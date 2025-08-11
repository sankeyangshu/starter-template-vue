import { createRouter, createWebHistory } from 'vue-router';
import { layouts, views } from './_generated/imports';
import { routes } from './_generated/routes';
import { transformToVueRoutes } from './_generated/transformer';
import type { App } from 'vue';
import type { Router } from 'vue-router';

const { VITE_BASE_URL } = import.meta.env;

/**
 * 创建一个可以被 Vue 应用程序使用的路由实例
 */
export const router = createRouter({
  history: createWebHistory(VITE_BASE_URL),
  routes: transformToVueRoutes(routes, layouts, views),
});

/**
 * Router guard
 * @descCN 路由守卫
 * @param router - Router instance
 */
function createRouterGuard(_router: Router) {}

/**
 * Setup Vue Router
 * @descCN 配置路由器
 * @param app Vue Element
 */
export async function setupRouter(app: App<Element>) {
  app.use(router);

  createRouterGuard(router);

  await router.isReady();
}
