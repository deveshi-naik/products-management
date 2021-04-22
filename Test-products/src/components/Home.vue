<template>
    <div>
        <div class="container">
            <h1 class="d-flex justify-content-center m-4">
                Home
            </h1>
            <div class="d-flex justify-content-center m-3">
                <button type="button" class="btn btn-link" @click="onTrashClick">Trash</button>
            </div>
            <b-container class="bv-example-row mb-3">
                <b-row cols="3">
                    <b-col
                        v-for="(value, index) in getProductsListFiltered"
                        :key="index"
                        class="mt-3"
                    >
                        <div v-if="!value.trashFlag">
                            <b-card 
                                class="custom-card"
                                @click="onCardClick(value)"
                            >
                                <b-img src="https://picsum.photos/1024/400/?image=41" class="mb-3" style="height: 175px;" fluid alt="Responsive image"></b-img>
                                <p> 
                                    <span class="font-weight-bold">
                                        Title:
                                    </span>  
                                    {{ value.title }}
                                </p>
                                <p> 
                                    <span class="font-weight-bold">
                                        Rating:
                                    </span> 
                                    {{ value.rating }} 
                                </p>
                                <p> 
                                    <span class="font-weight-bold">
                                        Location:
                                    </span> 
                                    {{ value.location }} 
                                </p>
                            </b-card>
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-link" @click="onRemove(value.id)">Remove</button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="d-flex justify-content-end m-5">
            <b-button type="submit" variant="primary" @click="onClick">Add new Product</b-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapGetters(['getProductsList']),
        getProductsListFiltered() {
            return this.getProductsList.filter(val => !val.trashFlag)
        }
    },
    watch: {
        getProductsList: {
            immediate: true,
            handler(data) {
                return data
            }
        },
        getProductsListFiltered: {
            immediate: true,
            handler(data) {
                return data
            }
        }
    },
    methods: {
        onClick() {
            this.$router.push({ name: 'addProduct' })
        },
        onTrashClick() {
            this.$router.push({ name: 'Trash' })
        },
        onCardClick(value) {
            this.$router.push({ name: 'productDetail',  query: { 'producItem': { value } } })
        },
        onRemove(index) {
            let tempAry = this.getProductsList
            let data = tempAry.find(d => d.id === index)
            data.trashFlag = true
            this.$store.dispatch("productListRemoveAction", tempAry);
        }
    }
}
</script>

<style scoped>
.custom-card {
    height: 21rem;
}
</style>