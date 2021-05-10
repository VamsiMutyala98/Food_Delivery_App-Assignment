<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
    >
    <v-layout>
      <h1 class="white--text">Food Delivery App</h1>
    </v-layout>
    <v-layout justify-end>
      <router-link to='/home' class="white--text text-decoration-none mr-5"><h4><v-icon class="white--text mb-1">mdi-home</v-icon>Home</h4></router-link>
      <router-link to='/login' class="white--text text-decoration-none mr-5">
      <div v-if="userName.length==0"><h4><v-icon class="white--text">mdi-login</v-icon>Login</h4></div>
      <div v-else class="dropdownhover"><h4><v-icon class="white--text">mdi-account</v-icon>Hello, {{userName[userName.length-1]}}</h4>
      <div class="dropdown">
        <router-link to="/forgetPassword" class="text-decoration-none black--text"><li>Change Password</li></router-link>
        <li @click="logout">Logout</li>
      </div>
      </div>
      </router-link>
      <router-link to='/cart' class="white--text text-decoration-none"><h4><v-icon class="white--text">mdi-cart</v-icon>Cart</h4></router-link>
    </v-layout>
    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed:{
    userName(){
      return this.$store.state.userName;
    }
  },
  methods:{
    logout(){
      for(var i=0;i<this.userName.length;i++){
        this.userName.pop();
      }
      console.log(this.userName);
      return this.userName
    }
  }
};
</script>
<style scoped>
.Login{
  text-align: right;
}
.dropdown{
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  color: black;
  list-style-type: none;
}
.dropdownhover:hover .dropdown{
  display:block
}
li{
  font-weight: bold;
}
</style>
