<template>
  <el-button style="display: none" plain @click="centerDialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog
    class="message-popup max-w-[100%]"
    v-model="centerDialogVisible"
    style="padding: 20px; max-width: 90%"
    width="960"
    align-center
  >
    <div class="flex lg:flex-row flex-col-reverse">
      <div class="content grow">
        <h1 class="text-[48px] text-center md:mb-4">Newsletter</h1>
        <p class="text-center md:mb-2 text-sm px-4 leading-7 max-w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus quidem, rem soluta ab velit quas incidunt delectus esse
          aliquid
        </p>
        <div class="flex-center py-2 md:py-10 px-2 sm:max-w-full">
          <input
            type="text"
            class="input h-[60px] xs:w-[200px] md:w-[300px] py-3 px-4 border-[1px] border-[#f6f7f8] rounded-[5px]"
            placeholder="Search query..."
          />
          <button
            class="h-[60px] w-[120px] rounded-[5px] border-[1px] py-3 px-4 text-white border-[#f6f7f8] text-[14px]"
            style="background: var(--primary)"
          >
            Search
          </button>
        </div>
        <div class="wrapper flex-center gap-3">
          <input type="checkbox" name="don't-show" id="don't-show" />
          <p class="font-[16px]">Don't show this popup again</p>
        </div>
      </div>
      <div
        class="img-container md:min-w-[410px] max-h-[300px] lg:max-h-[500px] max-w-full"
      >
        <img
          class="max-h-[100%]"
          src="@/assets/images/img.png"
          alt="message-image"
        />
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    centerDialogVisible.value = true;
  }, 0);
});
</script>

<style scoped></style>
