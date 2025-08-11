import { cloneDeep } from 'es-toolkit';
import { SetupStoreId } from '../enum';
import type { PiniaPluginContext } from 'pinia';

/**
 * The plugin reset the state of the store which is written by setup syntax
 * @descCN 重置store状态
 * @param context pinia插件上下文
 */
export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = Object.values(SetupStoreId) as string[];

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store;

    const defaultStore = cloneDeep($state);

    context.store.$reset = () => {
      context.store.$patch(defaultStore);
    };
  }
}
