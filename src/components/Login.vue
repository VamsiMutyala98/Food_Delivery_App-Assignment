<template>
        <div>
            <div style="text-align:center;margin-top:50px">
                <h1>Food Delivery App</h1>
            </div>
            <div class="login" >
                <h1 class="mb-3">SignIn</h1>
                <label for="">UserName: </label><br>
                <input type="text" placeholder="Enter your username" id="userName" @change="userNameCheck" required><br>
                <label for="">Password: </label><br>
                <input type="password" id="password" @change="passwordCheck" placeholder="Enter Password" required><br>
                <router-link to="/forgetPassword" style="font-size:13px;color:blue">forget Password?</router-link>
                <router-link to="/Home" class="black--text"><input class="button" @click="onLogin" id="button" type="button"  style="color:black;font-weight:bold;font-size:18px;margin-top:10px" value="Login"></router-link>
                <h5 id="message"></h5>
                <div class="mr-5" style="font-size:15px;font-family:sans-serif">By continuing, you agree to Food Delivery App <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a></div>
                <input class="checkbox" type="checkbox" style="margin-left:-160px;margin-top:10px"><label style="font-size:15px;font-family:sans-serif;font-weight:unset;margin-left:-160px"> Keep me signed in.</label>
                <p class="mr-5 mt-4">New to Food Delivery App?</p>
                <router-link to="/signUp"><input type="button" style="background-color:#0D47A1;color:white;font-weight:bold;font-size:18px;margin-top:5px" value="SignUp"></router-link>
            </div>
        </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return{
        }
    },
    computed:{
        userName() {
            return this.$store.state.userName
        },
        signUp(){
            return this.$store.state.signUpDetails
        },
        message(){
            return this.$store.state.message
        }
    },
    methods:{
        onLogin() {
            var a=document.getElementById('userName').value;
            this.userName.push(a);
        },
        userNameCheck(){
            var a=document.getElementById('userName').value;
             var c=0;
            for(var i=0;i<this.signUp.length;i++){
                if(a==this.signUp[i].userName){
                    continue;
                }
                else{
                    c++;
                }
            }
            if(c==this.signUp.length){
                document.getElementById("message").innerHTML="UserName is Not Registered";
                document.getElementById("message").style.color="red";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=true;
                console.log(document.getElementById("message").innerHTML)
            }
            else{
                document.getElementById("message").innerHTML="";
                document.getElementById("message").style.color="green";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=false;
            }
        },
        passwordCheck(){
            var a=document.getElementById('password').value;
             var c=0;
            for(var i=0;i<this.signUp.length;i++){
                if(a==this.signUp[i].password){
                    continue;
                }
                else{
                    c++;
                }
            }
            if(c==this.signUp.length){
                document.getElementById("message").innerHTML="Wrong Password";
                document.getElementById("message").style.color="red";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=true;
            }
            else{
                document.getElementById("message").innerHTML="";
                document.getElementById("message").style.color="green";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=false;
            }
        }
    },
    beforeUpdated(){
        this.message[0]
    },
}
</script>
<style scoped>
.login{
    width: 25%;
    border: 2px solid black;
    border-radius: 8px;
    margin: auto;
    margin-top: 0%;
    padding-left: 20px;
    padding-bottom: 20px;
}
label{
    font-size: 20px;
    font-weight: bold;
}
input{
    border: 2px solid black;
    border-radius: 5px;
    width: 95%;
    margin-top: 5px;
    margin-bottom: 10px;
    padding:5px;
}
p { 
    display: flex; 
    flex-direction: row; 
    color: gray;
    font-size: 15px;
    font-family: sans-serif;
}
p:before, 
p:after { 
        content: ""; 
        flex: 1 1; 
        border-bottom: 2px solid gray; 
        margin: auto; 
        margin-top:10px;
    }
.x{
    text-align: right;
}
input[type=button]:disabled{
    background-color: gray;
}
</style>
