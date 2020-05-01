import Vuex from 'vuex'
import * as types from './mutation-types'

// state
const state = {
  orders: [],
  menuList: [
    //lunchbox
    {id:'box01',img:'/normal/lunchbox/ข้าวหน้าหมูกระทะ.jpg',webp: '/webp/lunchbox/ข้าวหน้าหมูกระทะ.webp',title:'ข้าวหน้าหมูกระทะ',subtitle:'',price:45,badge:'ขายดี',rating:4.5,menutype:'lunchbox'},
    {id:'box02',img:'/normal/lunchbox/ข้าวหน้าหมูกระทะ.jpg',webp: '/webp/lunchbox/ข้าวหน้าหมูกระทะ.webp',title:'ข้าวหมูเทอริยากิ',subtitle:'',price:45,badge:'',rating:4,menutype:'lunchbox'},
    {id:'box03',img:'/normal/lunchbox/ข้าวหน้าหมูกระทะ.jpg',webp: '/webp/lunchbox/ข้าวหน้าหมูกระทะ.webp',title:'ข้าวแกงจืดเต้าหู้หมูสับ',subtitle:'',price:45,badge:'',rating:3,menutype:'lunchbox'},
    {id:'box04',img:'/normal/lunchbox/ข้าวหน้าหมูกระทะ.jpg',webp: '/webp/lunchbox/ข้าวหน้าหมูกระทะ.webp',title:'ข้าวหน้าหมู',subtitle:'',price:45,badge:'ขายดี',rating:4.5,menutype:'lunchbox'},
    {id:'box05',img:'/normal/lunchbox/ข้าวหน้าหมูกระทะ.jpg',webp: '/webp/lunchbox/ข้าวหน้าหมูกระทะ.webp',title:'ข้าวหัวปลาต้มซีอิ๊ว',subtitle:'',price:45,badge:'',rating:3.5,menutype:'lunchbox'},

    //donburi
    {id:'don01',img:'/normal/donburi/ข้าวหน้าไก่เทอริยากิ.jpg',webp: '/webp/donburi/ข้าวหน้าไก่เทอริยากิ.webp',title:'ข้าวหน้าไก่เทอริยากิ',subtitle:'',price:69,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don02',img:'/normal/donburi/ข้าวหน้าไก่โอยาโกะ.jpg',webp: '/webp/donburi/ข้าวหน้าไก่โอยาโกะ.webp',title:'ข้าวหน้าไก่โอยาโกะ',subtitle:'',price:69,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don09',img:'/normal/donburi/ข้าวหน้าหมูผัดกิมจิ.jpg',webp: '/webp/donburi/ข้าวหน้าหมูผัดกิมจิ.webp',title:'ข้าวหน้าหมูผัดกิมจิ',subtitle:'',price:89,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don10',img:'/normal/donburi/ข้าวหน้าหมูทอดทงคัตสึ.jpg',webp: '/webp/donburi/ข้าวหน้าหมูทอดทงคัตสึ.webp',title:'ข้าวหน้าหมูทอดทงคัตสึ',subtitle:'',price:109,badge:'ขายดี',rating:4.5,menutype:'donburi'},
    {id:'don11',img:'/normal/donburi/ข้าวหน้าหมูทอดคัตสึด้ง.jpg',webp: '/webp/donburi/ข้าวหน้าหมูทอดคัตสึด้ง.webp',title:'ข้าวหน้าหมูทอดคัตสึด้ง',subtitle:'',price:109,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don12',img:'/normal/donburi/ข้าวหน้าหมูทอดแกงกระหรี่.jpg',webp: '/webp/donburi/ข้าวหน้าหมูทอดแกงกระหรี่.webp',title:'ข้าวหน้าหมูทอดแกงกะหรี่',subtitle:'',price:109,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don14',img:'/normal/donburi/ข้าวหน้าเนื้อ.jpg',webp: '/webp/donburi/ข้าวหน้าเนื้อ.webp',title:'ข้าวหน้าเนื้อ',subtitle:'',price:120,badge:'แนะนำ',rating:4.5,menutype:'donburi'},
    {id:'don16',img:'/normal/donburi/ข้าวหน้าซาบะย่าง.jpg',webp: '/webp/donburi/ข้าวหน้าซาบะย่าง.webp',title:'ข้าวหน้าซาบะย่าง',subtitle:'',price:89,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don17',img:'/normal/donburi/ข้าวหน้าแซลมอนย่าง.jpg',webp: '/webp/donburi/ข้าวหน้าแซลม่อนย่าง.webp',title:'ข้าวหน้าแซลมอนย่าง',subtitle:'',price:120,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don18',img:'/normal/donburi/ข้าวหน้าญี่ปุ่นรวม.jpg',webp: '/webp/donburi/ข้าวหน้าญี่ปุ่นรวม.webp',title:'ข้าวหน้าญี่ปุ่นรวม',subtitle:'',price:150,badge:'',rating:4.5,menutype:'donburi'},
    {id:'don19',img:'/normal/donburi/ข้าวแฮมเบิร์ก.jpg',webp: '/webp/donburi/ข้าวแฮมเบิร์ก.webp',title:'ข้าวหน้าเนื้อแฮมเบิร์ก',subtitle:'',price:150,badge:'',rating:4.5,menutype:'donburi'},

    //sushi
    {id:'sushi01',img:'',title:'กุนกังไข่กุ้ง',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi02',img:'',title:'กุนกังไข่กุ้งมายองเนส',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi03',img:'',title:'กุนกังยำสาหร่าย',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi04',img:'',title:'กุนกังสลัดไข่หวาน',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi05',img:'',title:'กุนกังสลัดทูน่า',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi06',img:'',title:'กุนกังสลัดปูอัด',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi07',img:'',title:'ข้าวปั้นปลาซาบะย่าง',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi08',img:'',title:'ข้าวปั้นไข่หวานย่าง',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi09',img:'',title:'ข้าวปั้นกุ้งมายองเนส',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi10',img:'',title:'ข้าวปั้นกุ้งซอสไข่กุ้ง',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},
    {id:'sushi11',img:'',title:'ข้าวปั้นปูอัด',webp: '',subtitle:'',price:10,badge:'',rating:0,menutype:'sushi'},

    //shabu
    {id:'shabu01',img:'',title:'ชุดกลับบ้าน',webp: '',subtitle:'',price:189,badge:'ขายดี',rating:4.5,menutype:'shabudelivery'},
    {id:'shabu02',img:'',title:'น้ำจิ้มสุกี้',webp: '',subtitle:'',price:25,badge:'',rating:5,menutype:'shabudelivery'},


    //jpFood
    {id:'jpfood01',img:'',title:'แซลมอนซาชิมิ',webp: '',subtitle:'',price:120,badge:'ขายดี',rating:4.5,menutype:'jpfood'},
    {id:'jpfood02',img:'',title:'แซลมอนยำไทย',webp: '',subtitle:'',price:120,badge:'',rating:4.5,menutype:'jpfood'},



  ],
}

// getters
const getters = {
  // allProducts: state => state.donburiList, // would need action/mutation if data fetched async
  // getNumberOfProducts: state => (state.donburiList) ? state.donburiList.length : 0,

  getListByMenuType: state => (menutype) => {
    return state.menuList.filter(item => item.menutype === menutype)
  },
  
	cartProducts: state => {
		return state.orders.map(({ id, quantity }) => {
			const product = state.menuList.find(p => p.id === id)
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity
        }
		})
  },
  qtyByProduct: state => {
    return state.orders.map(({ id, quantity }) => {
      return{
        id,
        quantity
      }
		})
  }
}

const actions = {
	addToCart({ commit }, product){
		commit(types.ADD_TO_CART, {
			id: product.id
		})
  },
  
  deleteFromCart({ commit }, product){
		commit(types.DELETE_FROM_CART, {
			id: product.id
		})
	}
}

// mutations
const mutations = {

  //add product to cart
	[types.ADD_TO_CART] (state, { id }) {
    const record = state.orders.find(p => p.id === id)

    if (!record) {
      state.orders.push({ id, quantity: 1})
    } else {
      record.quantity++
    }
  },
  //delete product from cart
  [types.DELETE_FROM_CART] (state, { id }) {
    const record = state.orders.find(p => p.id === id)

    if (record.quantity > 0) {
      record.quantity--
    }  
    
    if (record.quantity === 0) {
      let index = state.orders.indexOf(record)
      state.orders.splice(index, 1)
    }
  }
}

const store = () => {
  return new Vuex.Store({
   state,
   getters,
   mutations,
   actions
  })
}
export default store