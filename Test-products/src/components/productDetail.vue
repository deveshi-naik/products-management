<template>
    <div>
        <div class="container">
            <h1 class="d-flex justify-content-center m-4">
                Product Details
            </h1>
            <div class="d-flex justify-content-center m-3">
                <button type="button" class="btn btn-link" @click="onHomeClick">Home</button>
            </div>
            <div>
                <b-card>
                    <h3 class="d-flex justify-content-center mb-3">
                        {{ product.title }}
                    </h3>
                    <div class="m-4">
                        <b-img src="https://picsum.photos/1024/400/?image=41" class="mb-3" fluid alt="Responsive image"></b-img>
                    
                        <p> 
                            <span class="font-weight-bold">
                                Title:
                            </span>  
                            {{ product.title }}
                        </p>
                        <p> 
                            <span class="font-weight-bold">
                                Rating:
                            </span> 
                            {{ product.rating }} 
                        </p>
                        <p> 
                            <span class="font-weight-bold">
                                Location:
                            </span> 
                            {{ product.location }} 
                        </p>
                        <p class="font-weight-bold">
                            Description:
                        </p>
                        <p>
                            {{ product.description }}   
                        </p> 
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productDetail',
    data() {
        return {
            product: ""
        }
    },
    mounted() {
        if(this.$route.query && this.$route.query.producItem) {
            this.product = this.$route.query.producItem.value
        }
    },
    methods: {
        onHomeClick() {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>