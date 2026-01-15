import { usePreferredColorScheme } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, effectScope, onScopeDispose, ref, watch } from 'vue';
import { localStg } from '@/lib/storage';
import { setLanguage } from '@/locales';

const DARK_CLASS = 'dark';

export const useSettingStore = defineStore('settingStore', () => {
  const scope = effectScope();

  /**
   * 系统主题偏好
   */
  const osTheme = usePreferredColorScheme();

  /**
   * 主题模式
   */
  const themeMode = ref<StorageType.Local['themeMode']>(localStg.getItem('themeMode') || 'system');

  /**
   * 是否为暗黑模式
   */
  const isDark = computed(() => {
    if (themeMode.value === 'system') {
      return osTheme.value === 'dark';
    }
    return themeMode.value === 'dark';
  });

  /**
   * 设置主题模式
   */
  const setThemeMode = (value: StorageType.Local['themeMode']) => {
    themeMode.value = value;
    localStg.setItem('themeMode', value);
  };

  const locale = ref<App.I18n.LangType>(localStg.getItem('language') || 'zh-CN');

  const localeOptions = ref<App.I18n.LangOption[]>([
    {
      value: 'zh-CN',
      text: '中文',
    },
    {
      value: 'en-US',
      text: 'English',
    },
  ]);

  /**
   * 设置语言
   * @param lang 语言
   */
  const setLocale = (lang: App.I18n.LangType) => {
    locale.value = lang;
    setLanguage(lang);
  };

  scope.run(() => {
    // 监听 isDark 变化，切换 CSS dark class
    watch(
      isDark,
      (val) => {
        if (val) {
          document.documentElement.classList.add(DARK_CLASS);
        } else {
          document.documentElement.classList.remove(DARK_CLASS);
        }
      },
      { immediate: true },
    );
  });

  onScopeDispose(() => {
    scope.stop();
  });

  return {
    themeMode,
    isDark,
    setThemeMode,

    locale,
    localeOptions,
    setLocale,
  };
});
