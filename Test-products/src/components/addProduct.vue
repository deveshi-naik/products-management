<template>
    <div class="container">
        <h2 class="d-flex justify-content-center m-4">
            Add Product
        </h2>
        <b-card>
            <b-form @submit.prevent="onSubmit" @reset="onReset">

                <b-form-group label="Title:">
                    <b-form-input
                        placeholder="Enter product title"
                        v-model="title"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Description:">
                    <b-form-textarea
                        placeholder="Enter product description"
                        v-model="description"
                        rows="3"
                        max-rows="6"
                        required
                    ></b-form-textarea>
                </b-form-group>

                <b-form-group label="Price:">
                    <b-form-input
                        placeholder="Enter product price"
                        v-model="price"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group label="Rating:">
                    <b-form-rating v-model="rating"></b-form-rating>
                </b-form-group>

                <b-form-group label="Location:">
                    <b-form-input
                        placeholder="Enter product location"
                        v-model="location"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'addProduct',
    data() {
        return {
            title: '',
            description: '',
            price: '',
            rating: '',
            location: ''
        }
    },
    methods: {
        onSubmit() {
            let productData = {}
            productData = {
                id: this._uid,
                title: this.title,
                description: this.description,
                price: this.price,
                rating: this.rating,
                location: this.location,
                trashFlag: false
            }
            this.$store.dispatch("productListAction", productData);
            this.onReset();
            this.$router.push({ name: 'Home' })
        },
        onReset() {
            this.title = '',
            this.description = '',
            this.price = '',
            this.rating = '',
            this.location = ''
        }
    }
}
</script>