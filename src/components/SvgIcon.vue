<template>
  <template v-if="renderLocalIcon">
    <svg
      aria-hidden="true"
      width="1em"
      height="1em"
      v-bind="bindAttrs"
    >
      <use
        :xlink:href="symbolId"
        fill="currentColor"
      />
    </svg>
  </template>
  <template v-else>
    <IconifyIcon
      v-if="icon"
      :icon="icon"
      v-bind="bindAttrs"
    />
  </template>
</template>

<script lang="ts" setup>
import { Icon as IconifyIcon, type IconifyIcon as IconType } from '@iconify/vue';
import { computed, useAttrs } from 'vue';

interface Props {
  /**
   * iconify name
   * @descCN 图标名称
   */
  icon?: string | IconType;
  /**
   * local svg icon
   * @descCN 本地svg图标
   */
  localIcon?: string;
}

const props = defineProps<Props>();

defineOptions({
  name: 'SvgIcon',
  inheritAttrs: false,
});

const attrs = useAttrs();

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}));

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env;

  const defaultLocalIcon = 'no-icon';

  const icon = props.localIcon || defaultLocalIcon;

  return `#${prefix}-${icon}`;
});

/**
 * If localIcon is passed, render localIcon first
 * @descCN 如果本地 SVG Icon 被传递，则首先渲染本地 SVG Icon
 */
const renderLocalIcon = computed(() => props.localIcon || !props.icon);
</script>
