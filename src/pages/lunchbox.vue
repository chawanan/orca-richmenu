<template>
  <div>

    <!-- prop -->
    <product header="ข้าวกล่อง" menuType="lunchbox"></product>
    
  </div>
</template>

<script>
import Product from '../components/Product.vue'
  
export default {
  components: {
    Product
  },
  head: {
    title: 'ข้าวกล่อง',
    meta: [
      { hid: 'description', name: 'description', content: 'ข้าวกล่อง' }
    ],
  }
}
</script>

<style lang="scss" scoped>
  
</style>