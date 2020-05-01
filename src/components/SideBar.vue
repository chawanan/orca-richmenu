<template>
  <v-card style="margin-top: 58px">  <!-- drawer-menu -->
      <v-navigation-drawer
        v-model="drawer"
        permanent
        height="100vh"
        width="15%" 
        dark
        fixed
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.path"
            link
          >
            <v-list-item-icon class="drawer-menu-list ma-0">
              <v-img :src=item.webp
                @error="abc(event)"
                max-width="100%" 
                max-height="100%"/>
              <div class="item-title">{{item.title}}</div>
            </v-list-item-icon>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
  data () {
      return {
        drawer: false,
        failed_image: false,
        items: [
          { title: 'ข้าวกล่อง', icon: 'mdi-rice', path: '/lunchbox', img: '/normal/menu/lunchbox.png', webp: '/webp/menu/lunchbox.webp'},
          { title: 'ข้าวด้ง', icon: 'mdi-rice', path: '/donburi', img: '/normal/menu/donburi.png', webp: '/webp/menu/donburi.webp' },
          { title: 'ซูชิ', icon: 'mdi-rice', path: '/sushi', img: '/normal/menu/sushi.png', webp: '/webp/menu/sushi.webp' },
          { title: 'ชาบู', icon: 'mdi-rice', path: '/shabudelivery', img: '/normal/menu/shabu.png', webp: '/webp/menu/shabu.webp' },
          { title: 'อาหารญี่ปุ่น', icon: 'mdi-rice', path: '/jpfood', img: '/normal/menu/sashimi.png', webp: '/webp/menu/sashimi.webp' },
        ],
     }
    },
  beforeCreate() {
    console.log("before")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  },


  methods: {
    abc(event) {
      console.log("error");
    }
  }
}
</script>