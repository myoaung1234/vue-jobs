<script setup>
    
</script>

<template>
    <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <form class="row">
                        <div class="col-lg-12 mb-3">
                            <h4>Post a New Job</h4>
                        </div>
                        <div class="col-lg-12 mb-3">
                            <label for="exampleInputJobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="exampleInputJobTitle" aria-describedby="emailHelp">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="exampleInputCompary" class="form-label">Company</label>
                            <input type="text" class="form-control" id="exampleInputCompary" aria-describedby="emailHelp">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="exampleInputCompanyLogo" class="form-label">Company Logo</label>
                            <input type="file" class="form-control" id="exampleInputCompanyLogo">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="exampleInputCategory" class="form-label">Category</label>
                            <input type="text" class="form-control" id="exampleInputCategory">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="exampleInputSalary" class="form-label">Salary</label>
                            <input type="text" class="form-control" id="exampleInputSalary">
                        </div>
                        <div class="col-lg-12 mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>