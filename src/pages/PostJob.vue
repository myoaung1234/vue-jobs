<script setup>
    
</script>

<template>
    <div class="">
            <section class="bg-image"
            style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 5px;">
                <div class="card-body p-4">
                  <h2 class="text-uppercase text-center mb-5 fw-bold color">Job Post</h2>
                    <form>
                        <div class="form-outline mb-4">
                            <input type="text" class="form-control shadow-none" placeholder="Title" />
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                            <div class="form-outline">
                                <input type="text" class="form-control shadow-none" placeholder="Company" />
                            </div>
                            </div>
                            <div class="col">
                            <div class="form-outline">
                                <input type="file" class="form-control shadow-none" placeholder="Company Logo" />
                            </div>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <div class="col">
                            <div class="form-outline">
                                <input type="text" class="form-control shadow-none" placeholder="Category" />
                            </div>
                            </div>
                            <div class="col">
                            <div class="form-outline">
                                <input type="text" class="form-control shadow-none" placeholder="Salary" />
                            </div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <textarea class="form-control shadow-none" rows="4" placeholder="Description"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
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

<style scoped>
    section {
        height: 100vh;
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