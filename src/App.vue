<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="page-bg-color">
    <div class="main-title">
      <div class="main-title-wrap">
        <p>Modern Walk</p>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.page-bg-color {
  background-color: #f5f5f5;
}
.main-title {
  &-wrap {
    padding: 100px 0;
    border-bottom: 4px solid #d9d9d9;
    @media (max-width: 1500.98px) {
      padding: 60px 0;
    }
    @media (max-width: 1263.98px) {
      margin: 50px 0;
    }
    @media (max-width: 959.98px) {
      margin: 40px 0;
    }
    @media (max-width: 599.98px) {
      margin: 30px 0;
    }
    p {
      font-family: "Roboto";
      font-size: 150px;
      font-weight: 700;
      line-height: 175.78px;
      text-align: center;
      color: #0e0e0e;
      @media (max-width: 2500.98px) {
        font-size: 120px;
        line-height: 135px;
      }
      @media (max-width: 1500.98px) {
        font-size: 100px;
        line-height: 120px;
      }
      @media (max-width: 1263.98px) {
        font-size: 80px;
        line-height: 100px;
      }
      @media (max-width: 959.98px) {
        font-size: 60px;
        line-height: 80px;
      }
      @media (max-width: 599.98px) {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
}
</style>
