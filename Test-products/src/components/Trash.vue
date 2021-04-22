<template>
    <div>
        <div class="container">
            <h1 class="d-flex justify-content-center m-4">
                Trash
            </h1>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-link" @click="onHomeClick">Home</button>
            </div>
            <b-container class="bv-example-row mb-3">
                <b-row cols="3">
                    <b-col
                        v-for="(value, index) in getProductsListFiltered"
                        :key="index"
                        class="mt-3"
                    >
                        <div v-if="value.trashFlag">
                            <b-card 
                                class="custom-card"
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
                                <button type="button" class="btn btn-link" @click="onRestore(value.id)">Restore</button>
                                <button type="button" class="btn btn-link" @click="onRemove(value.id)">Remove</button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Trash',
    computed: {
        ...mapGetters(['getProductsList']),
        getProductsListFiltered() {
            return this.getProductsList.filter(val => val.trashFlag)
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
        onHomeClick() {
            this.$router.push({ name: 'Home' })
        },
        onRemove(id) {
            let tempAry = this.getProductsList
            let index = tempAry.findIndex(d => d.id === id)
            tempAry.splice(index, 1)
            this.$store.dispatch("productListRemoveAction", tempAry);
        },
        onRestore(index) {
            let tempAry = this.getProductsList
            let data = tempAry.find(d => d.id === index)
            data.trashFlag = false
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