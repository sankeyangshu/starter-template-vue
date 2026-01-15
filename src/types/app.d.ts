/**
 * The global namespace for the app
 * @descCN 应用全局类型
 */
declare namespace App {
  /**
   * I18n namespace
   * @descCN 国际化命名空间
   */
  namespace I18n {
    /**
     * Language type
     * @descCN 语言类型
     */
    type LangType = 'en-US' | 'zh-CN';

    /**
     * Language option
     * @descCN 语言选项
     */
    interface LangOption {
      value: LangType;
      text: string;
    }

    /**
     * i18n scheme
     * @descCN i18n key - 这里之所以使用type而不是interface，是因为type避免vue-i18n的类型推导错误
     */
    // eslint-disable-next-line ts/consistent-type-definitions
    type I18nScheme = {
      system: {
        checkUrl: string;
        errorFallback: string;
        forbidden: string;
        goHome: string;
        loading: string;
        notFound: string;
        refreshAgain: string;
        serverError: string;
        title: string;
        updateCancel: string;
        updateConfirm: string;
        updateContent: string;
        updateTitle: string;
        themeMode: string;
        systemTheme: string;
        confirm: string;
        cancel: string;
        noMore: string;
      };
    };
  }
}
