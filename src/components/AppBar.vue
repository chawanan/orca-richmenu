<template>
  <!-- top nav bar -->
  <v-app-bar
      flat
      dark
      app
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
              <v-list-item-avatar size="54" tile>
                <img src="img/normal/orca shabu avatar.png" alt="orca shabu">
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
            <v-btn :disabled="(itemsInCart > 0) ? false : true" rounded color="primary" dark @click="sendOrder">ส่งออเดอร์</v-btn>
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
        totalPrice: 0,
     }
    },

    computed: {
      ...mapGetters({
        orders: 'cartProducts'      //get list in cart
      }),
      itemsInCart () {
        let cart = this.$store.getters.cartProducts;
        return cart.reduce((accum, item) => accum + item.quantity, 0)
      },
      total () {
        return this.orders.reduce((total, p) => {
          this.totalPrice = total + p.price * p.quantity
          return this.totalPrice
        }, 0)
      }
    },
    
    methods: {
      ...mapActions([
        'addToCart',
        'deleteFromCart'
      ]),
      sendOrder () {
        console.log(this.$liff.isLoggedIn())
        console.log(this.$liff.getOS())

        let orderString = 'แจ้งสั่งอาหาร รายการดังนี้\n'
        this.orders.forEach(order => orderString += '  ' + order.title + ' จำนวน ' + order.quantity + ' ที่\n')
        orderString += 'ยอดรวม ' + this.totalPrice + '.-'

        console.log(orderString)

        this.$liff.sendMessages([
          {
            type: 'text',
            text: orderString
          }
        ]).then(function () {
          window.alert('Message sent')
          liff.closeWindow();
        }).catch(function (error) {
          window.alert('Error sending message: ' + error)
        })
      },
    }
}
</script>

<style lang="scss">

</style>