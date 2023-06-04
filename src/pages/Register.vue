<script setup>

</script>

<template>
    <div class="">
        <section class="bg-image"
        style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 5px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase fw-bold text-center mb-5 text-success">Create Account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" class="form-control form-control-lg fs-6 shadow-none" placeholder="Name" />
                </div>

                <div class="form-outline mb-4">
                  <input type="email" class="form-control form-control-lg fs-6 shadow-none" placeholder="Email" />
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg fs-6 shadow-none" placeholder="Password" />
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg fs-6 shadow-none" placeholder="Repeat your password" />
                </div>

                <div class="input-group mb-3">
                    <button class="btn btn-lg btn-success fs-6">Register</button>
                </div>

                <div class="row">
                    <small>Have already an account? <router-link to="/login" class="text-warning">Sign In</router-link></small>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
</template>

<style scope>
    section {
        height: 90vh;
    }
    .gradient-custom-3 {
        background: #84fab0;
        background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
        background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
    .gradient-custom-4 {
        background: #84fab0;
        background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));
        background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
    }

    .color {
        color: #84fab0;
        color: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));
        color: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
    }
</style>