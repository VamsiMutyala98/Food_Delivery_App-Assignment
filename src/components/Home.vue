<template>
<div class="ml-7">
   <v-card  class="my-10 float-left mr-5" max-width="350" min-height="450" v-for="(restaurant,i) of restaurants" :key="i">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    
      <v-img
      height="250"
      :src=restaurants[i].img
    ></v-img>

    <v-card-title>{{restaurants[i].name}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value=restaurants[i].rating
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        
        <div class="grey--text ml-4 my-2">
            {{restaurants[i].ratingName}}
        </div>
      </v-row>

        <div class="my-4 subtitle-2 ">
            {{restaurants[i].cuisine}}
        </div>

      <div class="mb-5">{{restaurants[i].cuisineType}}</div>
      
      <div class="text-center">
        <v-dialog v-model="dialog" width="1000" persistent :retain-focus="false"  :v-active.sync="dialog">
          <template v-slot:activator="{ on }">
            <v-btn @click="onClick" v-on="on" :id=restaurants[i].id :value=restaurants[i].id>
              Show Menu
            </v-btn>
          </template>
          <v-card>
            <v-card-title class=" indigo darken-4 white--text">
              <h2>Menu</h2>
              <v-layout justify-end><v-card-actions >
                <v-btn class="white black--text font-weight-bold" text @click="dialog = false">Close</v-btn>
              </v-card-actions></v-layout>
            </v-card-title>
              <v-card-text>
                  <v-layout justify-start class="ml-6 mt-5"><h2 class="black--text text-decoration-underline">Items List</h2></v-layout>
                  <v-layout justify-center class="mt-n5 ml-7"><h2 class="black--text text-decoration-underline">Price</h2></v-layout>
                  <ul v-for="(menu,j) of restaurants[targetId].menuList" :key="j">
                      <li>{{restaurants[targetId].menuList[j]}}
                      <v-layout justify-center class="mt-n4"><h4>{{restaurants[targetId].price[j]}}</h4></v-layout> 
                      <v-layout justify-end class="mt-n8"><button @click="minus" :id=restaurants[targetId].numberOfItems[j] :class=restaurants[targetId].menuList[j]>-</button><button :class=restaurants[targetId].menuList[j]>{{restaurants[targetId].list[j]}}</button><button @click="addition" :id=restaurants[targetId].numberOfItems[j] :class=restaurants[targetId].menuList[j]>+</button></v-layout></li>
                  </ul>
                
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
              <router-link to="/cart" class="text-decoration-none"><v-btn  class="green darken-2 white--text" text @click="addInToCart" :id=restaurants[targetId].idForAddtoCart>Add to Cart</v-btn></router-link>
        </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card-text>
  </v-card>
  </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            dialog: false,
            targetId:0,
            subract:0,
            Addition:0,
            cardId:0,
        }
    },
    updated() {
      this.restaurants[this.targetId].list[this.subract];
      this.restaurants[this.targetId].list[this.Addition];
    },
    computed:{
        restaurants(){
            return this.$store.state.restaurants;
        },
        count() {
          return this.$store.state.count;
        },
        cartItems(){
          return this.$store.state.cartItems;
        },
        
    },
    methods:{
      onClick(event){
        this.targetId=event.currentTarget.id;
      },
      minus(event){
        this.subract=event.currentTarget.id;
        this.restaurants[this.targetId].list[this.subract]--;
      },
      addition(event){
        this.Addition=event.currentTarget.id;
        this.restaurants[this.targetId].list[this.Addition]++;
      },
      addInToCart(event){
        console.log("Hi this is cart");
        this.cardId=event.currentTarget.Id;
        for(var i=0;i<this.restaurants[this.targetId].list.length;i++){
          if(this.restaurants[this.targetId].list[i] == 0){
              continue;
          }
          else{
            var a=this.restaurants[this.targetId].menuList[i];
            var b=this.restaurants[this.targetId].price[i];
            var c=this.restaurants[this.targetId].list[i];
            var d=this.restaurants[this.targetId].name;
            // var e=this.count+1;
            var g=parseInt(b.substring(1));
            var f=g*c;
            var obj={
              restaurantName:d,
              itemName: a,
              itemPrice: b,
              Quantity: c,
              totalPrice:f,
            };
            this.cartItems.push(obj);
          }
        }
        console.log(this.addInToCart);
      }
    },
    
}
</script>
<style scoped>
li{
  list-style-type: none;
  color: black;
  margin-top: 20px;
  font-weight: bold;
}
button{
  border:1px solid black;
  padding:0px 10px 0px 10px;
  text-align: end;
}
</style>
