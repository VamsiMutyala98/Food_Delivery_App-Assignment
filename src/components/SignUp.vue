<template>
    <div class="signup">
        <h1>SignUP</h1>
        <label for="">Name:</label><br>
        <input id="name" type="text" placeholder="Enter Your Name"><br>
        <label  for="">UserName: </label><br>
        <input id="userName" type="text" placeholder="Enter Your UserName"><br>
        <label for="">Email: </label><br>
        <input id="email" type="email" placeholder="Enter your Email"><br>
        <label for="">Password:</label>
        <input id="password" type="text" placeholder="Enter Your Password"><br>
        <input type="button" value="Register" id="button" @click="Register">
        <h4 style="text-align:center" id="message"></h4>
        <h5 style="text-align:center" id="message1"></h5>
    </div>
</template>
<script>
export default{
    name:"signup",
    data(){
        return {

        }
    },
    computed:{
        signUP(){
            return this.$store.state.signUpDetails
        }
    },
    methods:{
        Register(){
            var a=document.getElementById("name").value;
            var b=document.getElementById('userName').value;
            var c=document.getElementById('email').value;
            var d=document.getElementById('password').value;
            var obj={
                Name:a,
                userName:b,
                email:c,
                password:d,
            };
            this.signUP.push(obj);
            document.getElementById("message").innerHTML="Registerd Successfully completed";
            document.getElementById("message").style.color="green";
            document.getElementById("message1").innerHTML="Click Login button For Login into the Food Delivery App"
        }
    }
}
</script>
<style scoped>
.signup{
    margin:5% 20%;
    width:62%
}
label{
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
    
}
input{
    width: 100%;
    border-bottom: 2px solid gray;
    margin-top: 5px;
    margin-bottom: 20px;
}
#button{
    border: 2px solid gray;
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
}
</style>
