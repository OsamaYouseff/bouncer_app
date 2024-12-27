<template>
  <Listbox as="div" v-model="selected">
    <div class="relative flex-center h-[38px] z-50">
      <ListboxButton
        class="grid w-full grid-cols-1 rounded-md bg-white pl-3 pr-2 text-left text-gray-900 shadow-lg focus:outline-indigo-600 sm:text-sm/6 cursor-pointer"
      >
        <span
          class="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-gray-500 h-[38px]"
        >
          <span class="block truncate">{{ selected }}</span>
        </span>

        <ChevronDownIcon
          class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          aria-hidden="true"
        />
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in "
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        class="absolute top-0 z-100"
      >
        <ListboxOptions
          class="absolute z-10 translate-y-8 w-full border-1 border-black overflow-auto rounded-md bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            @click="emit('update:itemsLimit', option)"
            as="template"
            v-for="option in options"
            :key="option"
            :value="option"
            v-slot="{ active, selected }"
            class="relative cursor-pointer select-none py-2 text-center"
          >
            <li
              :class="[
                active
                  ? 'text-indigo-600 bg-white outline-none'
                  : 'text-gray-900',
                'relative cursor-default select-none py-2 ',
              ]"
            >
              <span
                :class="[
                  selected ? 'text-purple-700' : 'text-gray-900',
                  ' block',
                ]"
                >{{ option }}
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/16/solid";

const props = defineProps({
  options: {
    type: Array,
    default: [""],
  },
});

const emit = defineEmits(["update:viewOption", "update:itemsLimit"]);

const selected = ref(props.options[0]);
</script>
