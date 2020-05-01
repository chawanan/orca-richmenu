<template>
  <v-app>
    <AppBar></AppBar>
    <SideBar></SideBar>
    <nuxt></nuxt>
    <!-- nuxt inject content -->
  </v-app>
</template>

<script>
  import AppBar from '../components/AppBar.vue'
  import SideBar from '../components/SideBar.vue'

  export default {
    components: {
      AppBar, SideBar
    },
  }

</script>

<style lang="scss">
  #__layout {
    font-family: 'Prompt', sans-serif;
  }

  .v-navigation-drawer--fixed {
      margin-top: calc(56px + 1vw);
  }

  .v-toolbar__title {
    font-weight: bold;
    // font-size: 2.5em;
    font-size: calc(2.5em + 2vw);
  }

  .cart-order {
    // font-size: 1em;
    font-size: calc(1em + 2vw);
    font-weight: bold;
  }

  .v-application {
    font-family: 'Prompt', sans-serif;
    // width: 100%;
  }

  .drawer-menu {
    display: flex;
  }
 
 .drawer-menu-list {
   display: grid;
  //  margin-top: 0px;
 }

 .item-title {
   font-size: calc(0.5em + 1.5vw);
 }

 .v-list-item {
   text-align: center;
   padding: 0 10px 0 10px;
 }

 .v-data-table td, .v-data-table th {
    padding: 0 5px 0 05px;
  }

  .invisible {
    display: none;
  }
</style>

