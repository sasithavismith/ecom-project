<template>
  <div class="overflow-hidden">
    <v-row no-gutters justify="center">
      <v-col md="11">
        <sectionTitle :sectionTitle="'Women\'s Clothing'" />
        <clothingList :productData="womensproductData" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import http from "@/services/http-common";
import sectionTitle from "@/components/sectionTitle.vue";
import clothingList from "@/components/clothingList.vue";
export default {
  components: {
    sectionTitle,
    clothingList,
  },
  data() {
    return {
      womensproductData: [],
    };
  },
  mounted() {
    this.getwomensProductList();
  },
  methods: {
    getwomensProductList() {
      http({
        method: "get",
        url: "/products/category/women's clothing",
      })
        .then((response) => {
          this.womensproductData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
