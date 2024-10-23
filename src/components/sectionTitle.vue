<template>
  <div class="section-title">
    <div class="section-title-wrap">
      <p>{{sectionTitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    sectionTitle:{
type:String
    }
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
};
</script>
<style scoped lang="scss">
.section-title {
  &-wrap {
    margin: 120px 0;
    @media (max-width: 1500.98px) {
      margin: 60px 0;
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
      font-size: 66px;
      font-weight: 700;
      line-height: 77.34px;
      text-align: left;
      color: #0e0e0e;
      @media (max-width: 2500.98px) {
        font-size: 50px;
        line-height: 60px;
      }
      @media (max-width: 1500.98px) {
        font-size: 40px;
        line-height: 60px;
      }
      @media (max-width: 1263.98px) {
        font-size: 35px;
        line-height: 60px;
      }
      @media (max-width: 959.98px) {
        font-size: 30px;
        line-height: 40px;
      }
      @media (max-width: 599.98px) {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
}
</style>
