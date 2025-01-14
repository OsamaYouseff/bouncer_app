<template>
  <!-- Main modal -->
  <div
    :class="centerDialogVisible ? 'flex' : 'hidden'"
    tabindex="-1"
    aria-hidden="true"
    class="message-popup pt-6 px-5 border-[1px] border-[#f6f7f8] sm:max-w-[95%] md:max-w-[1000px] fixed z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-white rounded-md"
    style="
      height: fit-content;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <!-- close btn -->
    <span
      @click="centerDialogVisible = false"
      class="close-btn absolute flex-center -top-5 -right-3 cursor-pointer p-3 hover:bg-red-600 bg-black w-10 h-10 text-white rounded-full flex-center"
    >
      <span class="text-lg"> ✕ </span>
      <!-- <img src="@/assets/icons/x.svg" class="w-4 text-white" alt="close-icon" /> -->
    </span>
    <!-- close btn -->

    <div class="flex lg:flex-row flex-col-reverse">
      <div class="content grow">
        <h1 class="text-[48px] text-center md:mb-4 mt-3">Newsletter</h1>
        <p class="text-center mb-2 text-sm px-4 leading-7 max-w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus quidem, rem soluta ab velit quas incidunt delectus esse
          aliquid
        </p>
        <div class="flex-center py-2 md:py-10 px-2 sm:max-w-full">
          <input
            type="text"
            class="input h-[50px] sm:w-[200px] md:w-[300px] py-3 px-4 border-[1px] border-[#f6f7f8] rounded-[5px]"
            placeholder="Search query..."
          />
          <button
            class="h-[50px] w-[110px] rounded-[5px] border-[1px] py-3 px-4 text-white border-[#f6f7f8] text-[14px]"
            style="background: var(--primary)"
          >
            Search
          </button>
        </div>
        <div class="wrapper flex-center gap-3 mb-4">
          <input type="checkbox" name="don't-show" id="don't-show" />
          <p class="font-[16px]">Don't show this popup again</p>
        </div>
      </div>
      <div
        class="img-container md:min-w-[410px] max-h-[300px] sm:max-h-[500px] lg:max-h-[500px] max-w-full"
        style="max-height: 50%"
      >
        <img
          class="max-h-[100%]"
          src="@/assets/images/img.png"
          alt="message-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const centerDialogVisible = ref(false);

const toggleModal = () => {
  centerDialogVisible.value = !centerDialogVisible.value;
};

onMounted(() => {
  setTimeout(() => {
    centerDialogVisible.value = true;
  }, 5000);
});
</script>

<style scoped></style>
