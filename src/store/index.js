import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:[],
    message:[0,1],
    signUpDetails:[
      {
        Name:'Vamsi Krishna',
        userName:'Vamsi',
        email:'vamsi@gmail.com',
        password:"123456",
      },
      {
        Name:'Rama Krishna',
        userName:'Rama',
        email:'rama@gmail.com',
        password:"123456",
      },
      {
        Name:'Saii Krishna',
        userName:'Saii',
        email:'saii@gmail.com',
        password:"123456",
      }
    ],
    count:0,
    restaurants:[
      {
        id:0,
        img:"https://3.bp.blogspot.com/-8gPjOiwN9Uw/Vhzg985vWWI/AAAAAAAADVI/CBYfsq219WA/s1600/20151012_193958.jpg",
        name:"Bidri Restaurant",
        rating:4.3,
        ratingName:"4.3(440)",
        cuisine:"₹₹ • Hyderabadi, Restaurant",
        cuisineType:"Hyderabadi cuisine served alongside Lucknwoi & Kahsmiri fare in an upscale in-hotel restaurant.",
        menuList:["Mattar Panner","Malai Kulfi","Tandoori Roti","Naan","Jera Rice","Bidiri Halem","Shekampuri Kebab","Kothimira Charu","Mirapakay Bajji","Plain Dahi"],
        numberOfItems:[0,1,2,3,4,5,6,7,8,9],
        list:[0,0,0,0,0,0,0,0,0,0],
        price:["₹100","₹200","₹350","₹450","₹210","₹310","₹750","₹340","₹220","₹150"],
        idForAddtoCart:"cart1"
      },
      {
        id:1,
        img:"http://www.theterracekitchen.in/wp-content/uploads/2019/07/034.-Sizzing-Brownie_545x545.png",
        name:"The Water Front Restaurant",
        rating:4.1,
        ratingName:"4.1(2,522)",
        cuisine:"₹₹ • Fine dining restaurant",
        cuisineType:"Fine dining restaurant with Burmese, Vietnamese & Tibetan cuisine, popular for Sunday brunches.",
        menuList:["Apollo Fish","sweet Corn Soup","MushRoom Salt and Pepper","Vegetable Munchurian","Broccoli Hot Chilli","Tandoori Gobi","Panner Tikka","Mushroom Mutter Masala","Kadai Paneer","Palak Panner"],
        numberOfItems:[0,1,2,3,4,5,6,7,8,9],
        list:[0,0,0,0,0,0,0,0,0,0],
        price:["₹100","₹200","₹350","₹450","₹210","₹310","₹750","₹340","₹220","₹150"],
        idForAddtoCart:"cart2"
      },
      {
        id:2,
        img:"https://www.thehindu.com/life-and-style/food/b3w226/article25094907.ece/ALTERNATES/LANDSCAPE_1200/hy28crab",
        name:"Mekong Restaurant",
        rating:4.5,
        ratingName:"4.5(648))",
        cuisine:"₹₹₹ • Pan-Asian restaurant",
        cuisineType:"Airy, upscale restaurant with global cuisine, live music & a deck overlooking a lake.",
        menuList:["Prawn Chip","Coconut Jaggery Ice Cream","Chicken Shushi","Jasmine Tea","Crabs "],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹150","₹250","₹310","₹210","₹180"],
        idForAddtoCart:"cart3"
      },
      {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1ncvx0xIiQrLalROGiNE_M1f2OqTkpihJA&usqp=CAU",
        name:"Okra Restaurant",
        rating:4.3,
        ratingName:"4.3(2,163))",
        cuisine:"₹₹₹ • Continental restaurant",
        cuisineType:"Indian & global fare served in a modern, light-filled space with pool views at the Marriott Hotel.",
        menuList:["Smothie/Lassi","Fresh Juice","Chicken Club Sandwich","Panner Butter Masala","Kodi Kura"],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹210","₹200","₹750","₹700","₹800"],
        idForAddtoCart:"cart4"
      },
      {
        id:4,
        img:"https://b.zmtcdn.com/data/pictures/3/18385313/b062ca96ade308291f83714d8dd6893c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        name:"Tatva Restaurant",
        rating:4.4,
        ratingName:"4.4(3,681))",
        cuisine:"₹₹₹ • Vegetarian",
        cuisineType:"Elegant contemporary restaurant serving a mix of vegetarian dishes from around the world.",
        menuList:["Soya Shami Kebab","Smoked Pesto Panner Tikka","Achari Paneer Tikka","Malai Broccoli","Kamalkakadi Galouti"],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹380","₹430","₹380","₹380","₹430"],
        idForAddtoCart:"cart5"
      },
      {
        id:5,
        img:"https://b.zmtcdn.com/data/pictures/chains/4/18233284/ab4f486ed57ab0e71763470d8600901d.jpg",
        name:"Farzi Cafe",
        rating:4.4,
        ratingName:"4.4(5,527))",
        cuisine:"₹₹₹ • Modern Indian restaurant",
        cuisineType:"Popular dining venue for creative takes on classic Indian dishes in a vibrant atmosphere.",
        menuList:["South Indian Filter Coffee","Darjeeling Tea","Early Grey Tea","Red Bull","Diet Coke"],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹100","₹110","₹100","₹200","₹100"],
        idForAddtoCart:"cart6"
      },
      {
        id:6,
        img:"https://b.zmtcdn.com/data/pictures/6/93766/093813bc9cf5968a8b038c0465e78457.jpg",
        name:"Olive Bistro & Bar ",
        rating:4.3,
        ratingName:"4.3(4,438))",
        cuisine:"₹₹₹• Bistro",
        cuisineType:"Indian & global fare served in a modern, light-filled space with pool views at the Marriott Hotel.",
        menuList:["BlueBerry","Venilla","Peanut Butter Almond","Fresh Mushroom Tortellini","The Bistro Veg"],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹300","₹400","₹300","₹620","₹560"],
        idForAddtoCart:"cart7"
      },
      {
        id:7,
        img:"https://content.jdmagicbox.com/comp/def_content/buffet-restaurants/buffet-restaurants7-buffet-restaurants-7-5z4hn.jpg",
        name:"Verandah Restaurant",
        rating:4.1,
        ratingName:"4.1(681))",
        cuisine:"₹₹ • Buffet restaurant",
        cuisineType:"Chic 24-hour Indian & Italian buffet restaurant with lake & city views at a luxury boutique hotel.",
        menuList:["Pizza","Pasta","Burgers & Wraps","Soup","Salad"],
        numberOfItems:[0,1,2,3,4],
        list:[0,0,0,0,0],
        price:["₹420","₹490","₹425","₹395","₹425"],
        idForAddtoCart:"cart8"
      },
      
    ],
    cartItems: [],
    totalBill:[0],
    Discount:[0],
    totalQuantity:[0],
    finalAmount:[0],
    dAmount:[0],
    gst:[0],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
