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
                            <label for="jobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="jobTitle" aria-describedby="emailHelp">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="company" class="form-label">Company</label>
                            <input type="text" class="form-control" id="company" aria-describedby="emailHelp">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="companyLogo" class="form-label">Company Logo</label>
                            <input type="file" class="form-control" id="companyLogo">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="category" class="form-label">Category</label>
                            <input type="text" class="form-control" id="category">
                        </div>
                        <div class="col-lg-6 mb-3">
                            <label for="salary" class="form-label">Salary</label>
                            <input type="text" class="form-control" id="salary">
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