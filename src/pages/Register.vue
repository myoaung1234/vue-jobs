<template>
    <div class="">
        <section class="bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" class="form-control form-control-lg fs-6" placeholder="Name" />
                </div>

                <div class="form-outline mb-4">
                  <input type="email" class="form-control form-control-lg fs-6" placeholder="Email" />
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg fs-6" placeholder="Password" />
                </div>

                <div class="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg fs-6" placeholder="Repeat your password" />
                </div>

                <div class="input-group mb-3">
                    <button class="btn btn-lg btn-primary fs-6">Register</button>
                </div>

                <div class="row">
                    <small>Have already an account? <router-link to="/login">Sign In</router-link></small>
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
<script>
export default {
    
}
</script>
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
</style>