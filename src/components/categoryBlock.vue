<template>
  <v-row class="category-block">
    <v-col md="6" v-for="(item, index) in blockList" :key="index" class="h-100">
      <div
        class="category-block-wrap"
        @click="redirectPage(item.url)"
        :style="{
          background: item.name === 'Men\'s Clothing' ? '#2BD9AF' : '#FF5E84',
        }"
      >
        <div class="text-wrap">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      blockList: [
        { name: "Men's Clothing", url: "/mens-clothing" },
        { name: "Women's Clothing", url: "/womens-clothing" },
      ],
    };
  },
  methods: {
    redirectPage(val) {
      this.$router.push(val);
    },
  },
};
</script>
<style lang="scss">
.category-block {
  margin-bottom: 150px;
  &-wrap {
    height: 100%;
    border-radius: 60px;
    .text-wrap {
      text-align: center;
      padding: 300px 20px;
      cursor: pointer;
      @media (max-width: 2800.98px) {
        padding: 250px 20px;
      }
      @media (max-width: 1500.98px) {
        padding: 120px 20px;
      }
      p {
        font-family: "Roboto";
        font-size: 150px;
        font-weight: 700;
        line-height: 175.78px;
        color: #ffffff;
        @media (max-width: 2800.98px) {
          font-size: 100px;
          line-height: 110px;
        }
        @media (max-width: 1900.98px) {
          font-size: 80px;
          line-height: 100px;
        }
        @media (max-width: 1500.98px) {
          font-size: 60px;
          line-height: 70px;
        }
        @media (max-width: 1263.98px) {
          font-size: 50px;
          line-height: 60px;
        }
        @media (max-width: 959.98px) {
          font-size: 40px;
          line-height: 50px;
        }
        @media (max-width: 599.98px) {
          font-size: 28px;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
