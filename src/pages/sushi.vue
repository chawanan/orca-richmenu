<template>
  <div>

    <!-- prop -->
    <product header="ซูชิ" menuType="sushi"></product>
    
  </div>
</template>

<script>
import Product from '../components/Product.vue'
  
export default {
  components: {
    Product
  },
  head: {
    title: 'ซูชิ',
    meta: [
      { hid: 'description', name: 'description', content: 'ซูชิ' }
    ],
  }
}
</script>

<style lang="scss" scoped>
  
</style>