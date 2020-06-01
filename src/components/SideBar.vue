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
            <v-img :src=item.img
              max-width="100%" 
              max-height="100%"
            />
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
        items: [
          { title: 'ข้าวกล่อง', icon: 'mdi-rice', path: '/lunchbox', img: 'img/normal/menu/lunchbox.png', webp: 'img/webp/menu/lunchbox.webp'},
          { title: 'ข้าวด้ง', icon: 'mdi-rice', path: '/donburi', img: 'img/normal/menu/donburi.png', webp: 'img/webp/menu/donburi.webp' },
          { title: 'ซูชิ', icon: 'mdi-rice', path: '/sushi', img: 'img/normal/menu/sushi.png', webp: 'img/webp/menu/sushi.webp' },
          { title: 'ชาบู', icon: 'mdi-rice', path: '/shabudelivery', img: 'img/normal/menu/shabu.png', webp: 'img/webp/menu/shabu.webp' },
          { title: 'อาหารญี่ปุ่น', icon: 'mdi-rice', path: '/jpfood', img: 'img/normal/menu/sashimi.png', webp: 'img/webp/menu/sashimi.webp' },
        ],
     }
    },
}
</script>