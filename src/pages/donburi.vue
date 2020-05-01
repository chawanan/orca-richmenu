<template>
  <div>

    <!-- prop -->
    <product header="ข้าวด้ง" menuType="donburi"></product>
    
  </div>
</template>

<script>
import Product from '../components/Product.vue'
  
export default {
  components: {
    Product
  },
  head: {
    title: 'ข้าวด้งญี่ปุ่น',
    meta: [
      { hid: 'description', name: 'description', content: 'ข้าวด้งญี่ปุ่น' }
    ],
  }
}
</script>

<style lang="scss" scoped>
  
</style>