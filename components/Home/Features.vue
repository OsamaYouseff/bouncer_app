<template>
  <section class="my-20">
    <div
      class="container mx-auto flex-center gap-10 lg:max-w-[1170px] flex-wrap"
    >
      <!--  Feature box -->
      <div
        class="feature-box transition rounded cursor-pointer py-6 px-4 text-center flex-col-center align-center gap-4 sm:max-w-[330px] lg:min-w-[330px]"
      >
        <img src="@/assets/icons/shipping.svg" alt="feature-img" />
        <h2>FREE SHIPPING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in
          similique id reprehenderit harum ab qui tenetur nihil repellendus
          exercitationem. Aliquam quisquam provident
        </p>
      </div>
      <!--  Feature box -->
      <div
        class="feature-box transition rounded cursor-pointer py-6 px-4 text-center flex-col-center align-center gap-4 sm:max-w-[330px] lg:min-w-[330px]"
      >
        <img src="@/assets/icons/refund.svg" alt="feature-img" />
        <h2>FREE SHIPPING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in
          similique id reprehenderit harum ab qui tenetur nihil repellendus
          exercitationem. Aliquam quisquam provident
        </p>
      </div>
      <!--  Feature box -->
      <div
        class="feature-box transition rounded cursor-pointer py-6 px-4 text-center flex-col-center align-center gap-4 sm:max-w-[330px] lg:min-w-[330px]"
      >
        <img src="@/assets/icons/support.svg" alt="feature-img" />
        <h2>FREE SHIPPING</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in
          similique id reprehenderit harum ab qui tenetur nihil repellendus
          exercitationem. Aliquam quisquam provident
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  max-width: 60px;
  margin: 0 auto;
}

.feature-box {
  border: 1px solid transparent;
  /* min-width: 330px; */

  margin-inline: 5px;
}

.feature-box:hover {
  border-color: #ff6876;
}
</style>
