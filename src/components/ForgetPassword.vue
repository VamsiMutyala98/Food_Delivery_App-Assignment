<template>
    <div class="Reset">
        <h1>Reset Password</h1>
        <label for="">UserName: </label><br>
        <input type="text" id="userName" placeholder="Enter Your userName" @change="userNameChecker"><br>
        <label for="">New Password: </label><br>
        <input type="password" id="password" placeholder="Enter your New Password" @change="passwordChecker"><br>
        <label for="">Confirm Password:</label><br>
        <input type="password" id="confirmPassword" placeholder="Enter your Confirmation Password" @change="confirmationChecker">
        <input type="button" value="Change Password" id="button" @click="password"><br>
        <h5 id="message"></h5>
        <h4 id="msg"></h4>
    </div>
</template>
<script>
export default{
    name:'forgetPassword',
    data(){
        return{

        }
    },
    computed:{
        signUp(){
            return this.$store.state.signUpDetails;
        },
    },
    methods:{
        userNameChecker(){
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
                document.getElementById("message").innerHTML="UserName is Not Registered! Plz, check your username";
                document.getElementById("message").style.color="red";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=true;
                console.log(document.getElementById("message").innerHTML)
            }
            else{
                // document.getElementById("message").innerHTML="Successfully Login";
                document.getElementById("message").style.color="green";
                document.getElementById("message").style.textAlign="center";
                document.getElementById("button").disabled=false;
            }
        },
        passwordChecker(){
            var a=document.getElementById('userName').value;
            var b=document.getElementById('password').value;
            for(var i=0;i<this.signUp.length;i++){
                if(a==this.signUp[i].userName){
                    this.signUp[i].password=b;
                }
            }   
        },
        confirmationChecker(){
            var a=document.getElementById('password').value;
            var b=document.getElementById('confirmPassword').value;
            if(a==b){
                document.getElementById("message").innerHTML="Matching";
                document.getElementById("message").style.color="green";
                document.getElementById("message").style.textAlign="center"
                document.getElementById("button").disabled=false;
            }
            else{
                document.getElementById("message").innerHTML="Confirmation Password is not Matching";
                document.getElementById("message").style.color="red";
                document.getElementById("message").style.textAlign="center"
                document.getElementById("button").disabled=true;
            }
        },
        password(){
            document.getElementById("message").innerHTML="Password Changed Successfully";
            document.getElementById("message").style.color="green"
            document.getElementById("message").style.textAlign="center"
            document.getElementById("msg").innerHTML="Click on login button for login into the food delivery App"
            document.getElementById("msg").style.color="blue"
        }
    }
}
</script>
<style scoped>
.Reset{
    width: 30%;
    border: 2px solid gray;
    border-radius: 5px;
    margin: 7% 35%;
    padding: 20px;
}
label{
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
}
input{
    border: 2px solid gray;
    border-radius: 5px;
    width: 100%;
    padding: 5px;
}
#button{
    margin-top: 20px;
}
</style>
