<template>
  <TransitionRoot as="template" :show="showDrawer">
    <Dialog
      class="relative z-50 bg-black h-screen overflow-y-auto"
      @close="emit('update:closeDrawer')"
    >
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0overflow-x-hidden">
        <div class="absolute inset-0 overflow-x-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-300 sm:duration-500"
              enter-from="-translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-500"
              leave-from="translate-x-0"
              leave-to="-translate-x-full"
            >
              <DialogPanel class="pointer-events-auto max-w-[310px]">
                <div
                  class="flex h-screen overflow-y-auto flex-col overflow-x-hidden bg-white py-8 shadow-xl"
                >
                  <div class="relative mt-6 flex-1 px-4 sm:px-6 min-h-fit">
                    <slot />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false,
  },
});

const showDrawer = ref(props.showDrawer);
const emit = defineEmits(["update:closeDrawer"]);

watch(
  () => props.showDrawer,
  () => {
    showDrawer.value = props.showDrawer;
  }
);
</script>
