<template>
  <div>

    <!-- prop -->
    <product header="อาหารญี่ปุ่น" menuType="jpfood"></product>
    
  </div>
</template>

<script>
import Product from '../components/Product.vue'
  
export default {
  components: {
    Product
  },
  head: {
    title: 'อาหารญี่ปุ่น',
    meta: [
      { hid: 'description', name: 'description', content: 'อาหารญี่ปุ่น' }
    ],
  }
}
</script>

<style lang="scss" scoped>
  
</style>