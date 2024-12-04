<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import "@/assets/css/main.css";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  box-shadow: none !important;
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  font-weight: normal;
}

p,
button {
  font-weight: normal !important;
}

:root {
  --gray: #929292;
  --primary: #33a0ff;
}

.flex {
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-col-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.flex-col-start {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-col-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button.el-dialog__headerbtn {
  background: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transform: translate(15px, -15px);
  color: white;
}

@media (max-width: 768px) {
  button.el-dialog__headerbtn {
    max-width: 30px;
    max-height: 30px;
    transform: translate(10px, -10px);
  }
}
</style>
