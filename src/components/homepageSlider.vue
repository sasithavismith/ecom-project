<template>
  <div class="home-product-slider">
    <swiper
      :breakpoints="swiperOptions.breakpoints"
      :centeredSlides="false"
      :pagination="false"
      :navigation="false"
      :modules="modules"
      class="home-product-slider-wrap"
    >
      <swiper-slide v-for="(item, index) in productListData" :key="index">
        <v-row justify="center">
          <v-col cols="10">
            <productBlock :itemData="item" />
          </v-col>
        </v-row> </swiper-slide
    ></swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import productBlock from "./productBlock.vue";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
    productBlock,
  },
  props: {
    productListData: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      errors: false,
      pagination: {
        clickable: true,
      },
      modules: [Autoplay, Pagination],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 2.1,
          },
          998: {
            slidesPerView: 2.6,
          },
          1200: {
            slidesPerView: 3,
          },
          1800: {
            slidesPerView: 3.5,
          },
          2300: {
            slidesPerView: 4,
          },
        },
      },
    };
  },
  methods: {},
  watch: {},
};
</script>
