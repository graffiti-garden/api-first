import { ref, onMounted, onBeforeUnmount, watch, type Ref } from "vue";

export function useBoundingBox(target: Ref<HTMLElement | null>) {
  const top = ref(0);
  const left = ref(0);
  const width = ref(0);
  const height = ref(0);

  function updateRect() {
    const node = target.value;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    top.value = rect.top;
    left.value = rect.left;
    width.value = rect.width;
    height.value = rect.height;
  }

  let resizeObserver: ResizeObserver | null = null;
  let interval: number | null = null;

  function clear() {
    resizeObserver?.disconnect();
    if (interval !== null) clearInterval(interval);
  }

  function onChange() {
    clear();

    const node = target.value;
    if (!node) return;

    updateRect();

    if (node) {
      resizeObserver = new ResizeObserver(updateRect);
      resizeObserver.observe(node);
    }

    // Poll for position changes
    if (interval !== null) clearInterval(interval);
    interval = window.setInterval(updateRect, 200);
  }

  onMounted(() => {
    watch(target, onChange, { immediate: true });
  });

  onBeforeUnmount(clear);

  return { top, left, width, height };
}
