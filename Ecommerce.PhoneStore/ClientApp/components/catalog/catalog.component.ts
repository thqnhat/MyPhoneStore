﻿import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import ProductListComponent from './product-list/product-list.component.vue';
import { Next } from 'vue-router';

@Component({
    components: {
        'product-list': ProductListComponent
    },
    beforeRouteEnter(to, from, next: Next<CatalogComponent>) {
        // Ref: https://github.com/vuejs/vue-router/issues/1863
        axios
            .all([
                axios.get("/product", { params: to.query }),
                axios.get("/filter")
            ])
            .then(
                axios.spread((products, filters) => {
                    next(vm => vm.setData(products.data, filters.data));
                })
            );
    }
})
export default class CatalogComponent extends Vue {
    products: any = [];
    filters: any = {
        brands: [],
        capacity: [],
        colours: [],
        os: [],
        features: []
    }
    constructor() {
        super();
    }

    get sort() {
        return this.$route.query.sort || 0;
    }

    get sortedProducts() {
        switch (this.sort) {
            case 1:
                return this.products.sort((a, b) => {
                    return b.price > a.price;
                });
            case 2:
                return this.products.sort((a, b) => {
                    return a.name > b.name;
                });
            case 3:
                return this.products.sort((a, b) => {
                    return b.name > a.name;
                });
            default:
                return this.products.sort((a, b) => {
                    return a.price > b.price;
                });
        }
    }

    setData(products, filters) {
        this.products = products;
        this.filters = filters;
    }
}