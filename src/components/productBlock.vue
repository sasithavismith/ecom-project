<template>
  <div class="product-block">
    <div class="product-block-inner" v-if="itemData">
      <div class="product-block-inner-wrap">
        <div class="title-wrap">
          <p class="prod-title">{{ itemData.title }}</p>
        </div>
        <div class="img-wrap">
          <img :src="itemData.image" alt="Product Image" />
        </div>
        <div
          class="text-wrap"
          :style="{
            background:
              itemData.category === 'men\'s clothing' ? '#2BD9AF' : '#FF5E84',
          }"
        >
          <p class="price-text">Rs. {{ itemData.price }}</p>
          <p class="para-text">{{ itemData.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style lang="scss">
.product-block {
  padding: 8px 0;
  &-inner {
    height: 100%;
    &-wrap {
      background-color: #fff;
      box-shadow: 10px 15px 20px 0px #00000026;
      border-radius: 50px;
      text-align: center;
      @media (max-width: 1930.98px) {
        border-radius: 24px;
      }
      .title-wrap {
        padding: 48px;
        @media (max-width: 1500.98px) {
          padding: 32px;
        }
        @media (max-width: 1263.98px) {
          padding: 24px;
        }
        @media (max-width: 959.98px) {
          padding: 16px;
        }
        .prod-title {
          font-family: "Roboto";
          font-size: 52px;
          font-weight: 700;
          line-height: 60.94px;
          color: #0e0e0e;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 1;
          @media (max-width: 2500.98px) {
            font-size: 48px;
            line-height: 58px;
          }
          @media (max-width: 1930.98px) {
            font-size: 40px;
            line-height: 55px;
          }
          @media (max-width: 1500.98px) {
            font-size: 35px;
            line-height: 55px;
          }
          @media (max-width: 1263.98px) {
            font-size: 32px;
            line-height: 50px;
          }
          @media (max-width: 959.98px) {
            font-size: 30px;
            line-height: 52px;
          }
          @media (max-width: 599.98px) {
            font-size: 20px;
            line-height: 32px;
          }
        }
      }
      .img-wrap {
        padding: 48px;
        height: 384px;
        width: auto;
        @media (max-width: 1500.98px) {
          padding: 20px 32px 32px 32px;
          height: 160px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text-wrap {
        @media (max-width: 1500.98px) {
          padding: 32px;
        }
        @media (max-width: 1930.98px) {
          border-radius: 24px;
        }
        padding: 48px;
        background-color: #2bd9af;
        border-radius: 50px;
        .price-text {
          font-family: "Roboto";
          font-size: 60px;
          font-weight: 700;
          line-height: 70.31px;
          color: #0e42fd;
          @media (max-width: 2500.98px) {
            font-size: 55px;
            line-height: 65px;
          }
          @media (max-width: 1930.98px) {
            font-size: 40px;
            line-height: 55px;
          }
          @media (max-width: 1500.98px) {
            font-size: 36px;
            line-height: 45px;
          }
          @media (max-width: 1263.98px) {
            font-size: 32px;
            line-height: 50px;
          }
          @media (max-width: 959.98px) {
            font-size: 32px;
            line-height: 52px;
          }
          @media (max-width: 599.98px) {
            font-size: 24px;
            line-height: 32px;
          }
        }
        .para-text {
          font-family: "Roboto";
          font-size: 38px;
          font-weight: 400;
          line-height: 44.53px;
          color: #0e0e0e;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 3;
          @media (max-width: 2500.98px) {
            font-size: 36px;
            line-height: 42px;
          }
          @media (max-width: 1930.98px) {
            font-size: 32px;
            line-height: 38px;
          }
          @media (max-width: 1500.98px) {
            font-size: 30px;
            line-height: 38px;
          }
          @media (max-width: 1263.98px) {
            font-size: 28px;
            line-height: 35px;
          }
          @media (max-width: 959.98px) {
            font-size: 24px;
            line-height: 30px;
          }
          @media (max-width: 599.98px) {
            font-size: 16px;
            line-height: 32px;
          }
        }
      }
    }
  }
}
</style>
