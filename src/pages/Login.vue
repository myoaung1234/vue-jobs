<script setup>

</script>
<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-80 p-3">
        <div class="col-lg-6 rounded-4 bg-white" >
           <div class="col-lg-12 rounded-4 d-flex justify-content-center align-items-center backgroundImage" style="background-image: url('https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
               <h3 class="fw-bold text-white">SIGN IN</h3>
           </div> 
           <div class="col-lg-12 p-3">
              <div class="row justify-content-center align-items-center">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email address">
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="input-group mb-3 d-flex justify-content-between">
                        <div class="forgot">
                            <small><a href="#">Forgot Password?</a></small>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <button class="btn btn-lg btn-primary fs-6">Login</button>
                    </div>
                    
                    <div class="row">
                        <small>Don't have account? <router-link to="/register">Sign Up</router-link></small>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
    .backgroundImage {
        background-position: 0;
        background-repeat: no-repeat;
        height: 200px;
        margin-bottom: 20px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }
    
</style>