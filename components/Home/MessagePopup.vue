<template>
  <el-button plain @click="centerDialogVisible = true">
    Click to open the Dialog
  </el-button>

  <el-dialog v-model="centerDialogVisible" width="960" align-center>
    <div class="flex">
      <div class="content grow">
        <h1 class="text-[48px] text-center mb-4">Newsletter</h1>
        <p class="text-center mb-2 text-sm px-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus quidem, rem soluta ab velit quas incidunt delectus esse
          aliquid
        </p>
        <div class="flex-center py-10 px-2 sm:max-w-full">
          <input
            type="text"
            class="input sm:mx-1 md:min-w-[280px] xs:min-w-[280px] h-[60px] xs:w-[200px] w-[300px] py-3 px-4 border-[1px] border-[#f6f7f8] rounded-[5px]"
            placeholder="Search query..."
          />
          <button
            class="h-[60px] w-[120px] rounded-[5px] border-[1px] py-3 px-4 text-white border-[#f6f7f8] text-[14px]"
            style="background: var(--primary)"
          >
            Search
          </button>
        </div>
      </div>
      <div class="img-container min-w-[410px]">
        <img src="@/assets/images/img.jpg" alt="message-image" />
      </div>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);
</script>
