<template>
  <div class="overflow-hidden page-bg-color">
    <v-row no-gutters justify="center">
      <v-col cols="11">
        <sectionTitle :sectionTitle="'Flash Sale'" />
        <homepageSlider :productListData="productData" />
        <sectionTitle :sectionTitle="'Categories'" />
        <categoryBlock />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import http from "@/services/http-common";
import homepageSlider from "@/components/homepageSlider.vue";
import sectionTitle from "@/components/sectionTitle.vue";
import categoryBlock from "@/components/categoryBlock.vue";

export default {
  components: {
    homepageSlider,
    sectionTitle,
    categoryBlock,
  },
  data() {
    return {
      productData: [],
      homeMainTitle: "Modern Walk",
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      http({
        method: "get",
        url: "/products",
      })
        .then((response) => {
          this.productData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
