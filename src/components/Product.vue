<template>
  <div class="list-content">
    <!-- prop header  -->
    <h1 style="margin-left: 10px"> {{header}} {{(products.length) ? products.length : 0}} เมนู </h1>  
    
    <v-container fluid class="ma-0">
      <v-row class="mb-6">
        <v-col
          v-for="(product, id) in getListProduct"
          :key="id"
          cols="6"
          :sm="4"
          :md="4"
          :lg="2"
        >
          <v-card class="pa-0 v-card__img-width ma-0" 
            flat outlined height="100%" 
          >  
            <v-img lazy-src 
              height="auto"
              :src=product.img
            >  
              <v-overlay :id="product.id"
                :absolute="absolute"
                :value=showQtyByProduct(product.id)
              > <p style="font-size: 4em;">{{showQtyByProduct(product.id)}}</p>
              </v-overlay>
            </v-img>
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              length="5" 
              dense
              half-increments 
              small
            ></v-rating>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.price }}฿ {{ product.badge}}</v-card-subtitle>
            <v-card-actions>
              <v-btn 
                large 
                rounded 
                color="#ff8f00" 
                dark
                @click='addToCart(product)'
              >
                เพิ่ม</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <v-rating
        :v-model=5
        background-color="orange lighten-3"
        color="orange"
        length="5" 
        dense
        half-increments 
        small
      ></v-rating>*** rating เฉลี่ยจากยอดขาย</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    products: [],
    rating: 2,
  }),

   props: {
    header: '',
    menuType: ''
  },

  computed: {
    getListProduct () {
      this.products = this.$store.getters.getListByMenuType(this.menuType)
      return this.products
    },
     
  },

  methods: {
    ...mapActions([
      'addToCart',
      'qtyByProduct'
    ]),
    showQtyByProduct (id) {
      let cart = this.$store.getters.qtyByProduct;
      let cartFilter = cart.filter((item) => {
        return id === item.id 
      })
      
      return cartFilter.reduce((accum, item) => accum + item.quantity, 0)
    }
  },
 
}
</script>

<style lang="scss" scoped>
  .list-content {
    width: auto;
    margin-left: 15%;
  }
  @media screen and (min-width: 768px) {
    .list-content {
      margin-top: 10px;
    }
  }

  .row {
    margin-top: -12px;
    margin-bottom: -12px;
  }

  .v-card__title {
    word-break: break-word;
    padding-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: calc(0.85em + 1vw);
    // line-height: 1.5rem;
    // margin-bottom: 10px;
  }

  .v-card__subtitle, .v-card__text {
    font-size: calc(0.7em + 1vw);
    padding-bottom: 5px;
  }

  .v-card__actions {
    display: block;
    text-align: center;
  }

  .v-card__img-width {
    width: 35vw; // save my life
  }
</style>