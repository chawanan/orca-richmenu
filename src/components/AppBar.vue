<template>
  <!-- top nav bar -->
  <v-app-bar
      flat
      dark
      fixed
    >
      <!-- title bar ORCA -->
      <v-toolbar-title>
        <font class="orange--text">O</font>R<font class="orange--text">C</font>A
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- cart show qty and menu -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="0"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn 
            width="auto" 
            v-on="on"
          >
            <v-icon 
              large 
              style="margin-right: 10px"
              :style="itemsInCart != 0 ? 'color: #ff8f00' : ''" 
            >
              mdi-cart
            </v-icon>
            <span class="cart-order ml-2">
              <font 
                class="orange--text" 
                style="text-decoration: underline"
              >{{itemsInCart}}</font> รายการ 
            </span>
          </v-btn>
        </template>

        <!-- cart card -->
        <v-card>
          <!-- card title and subtitle -->
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="img/orca shabu avatar.png" alt="orca shabu">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>ORCA SHABU : ออร์ก้า ชาบู</v-list-item-title>
                <v-list-item-subtitle>รายการอาหารที่สั่ง</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>

          <!-- cart data table -->
          <v-list-item-title 
            class="text-center"
            :class="itemsInCart===0 ? '' : 'invisible'"
          >
            ยังไม่มีรายการอาหารในรถเข็น
          </v-list-item-title>
          <v-simple-table 
            dense
            fixed-header
            height="300"
            :class="itemsInCart===0 ? 'invisible' : ''"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <!-- <th class="text-center">ลำดับ</th> -->
                  <th class="text-center">เมนู</th>
                  <th class="text-center">จำนวน</th>
                  <th class="text-center">ราคา</th>
                  <th class="text-center">เพิ่ม+ลด</th>
                  <th style="display:none">>id</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in orders" :key="item.id">
                  <td>{{ item.title }}</td>
                  <td class="text-center">{{ item.quantity }}</td>
                  <td class="text-center">{{ item.price }}</td>
                  <td class="text-center">
                    <v-btn fab outlined dark small color="green" @click="addToCart(item)">
                      <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn fab outlined dark small color="red" @click="deleteFromCart(item)">
                      <v-icon dark>mdi-minus</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  	<td class="text-right"><b>ยอดรวม:</b></td>
                    <td></td>
                    <td class="text-center"><b>{{ total }}</b></td>
                    <td class="text-left"><b>฿</b></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          

          <!-- cart action -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="(itemsInCart > 0) ? false : true" rounded color="primary" dark @click="menu=false">ส่งออเดอร์</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <!-- title menu -->
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
      return {
        menu: false,
        // drawer: false,
        // items: [
        //   { title: 'ข้าวกล่อง', icon: 'mdi-rice', path: '/lunchbox', src: 'img/lunchbox.png' },
        //   { title: 'ข้าวด้ง', icon: 'mdi-rice', path: '/donburi', src: 'img/donburi.png' },
        //   { title: 'ซูชิ', icon: 'mdi-rice', path: '/sushi', src: 'img/sushi.png' },
        //   { title: 'ชาบู', icon: 'mdi-rice', path: '/shabudelivery', src: 'img/shabu.png' },
        //   { title: 'อาหารญี่ปุ่น', icon: 'mdi-rice', path: '/jpfood', src: 'img/sashimi.png' },
        // ],
     }
    },

    computed: {
      ...mapGetters({
        // products: 'allProducts',    //getDonburiList
        orders: 'cartProducts'      //get list in cart
      }),
      itemsInCart () {
        let cart = this.$store.getters.cartProducts;
        return cart.reduce((accum, item) => accum + item.quantity, 0)
      },
      total () {
        return this.orders.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    
    methods: {
      ...mapActions([
        'addToCart',
        'deleteFromCart'
      ]),
    }
}
</script>

<style lang="scss">

</style>