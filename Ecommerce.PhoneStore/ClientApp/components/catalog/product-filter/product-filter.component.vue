<template>
    <div class="filters mb-4">
        <h5 class="mt-4">Filters</h5>
        <b-btn variant="outline-secondary" @click.prevent="reset"><i class="fas fa-sync mr-2"></i> Reset</b-btn>
        <b-list-group class="mt-4">
            <filter-accordion>
                <span slot="header">Brand</span>
                <multi-select-filter slot="body" query-key="brands" :items="filters.brands"></multi-select-filter>
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Price</span>
                <range-filter slot="body"
                              :min=0
                              :max=1000
                              :interval=50
                              :formatter="priceFormatter"
                              min-query-key="minPrice"
                              max-query-key="maxPrice" />
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Screen size</span>
                <range-filter slot="body"
                              :min=0
                              :max=7
                              formatter="{value} in"
                              min-query-key="minScreen"
                              max-query-key="maxScreen" />
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Capacity</span>
                <multi-select-filter slot="body" query-key="capacity" :items="filters.storage"></multi-select-filter>
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Colour</span>
                <multi-select-filter slot="body" query-key="colours" :items="filters.colours"></multi-select-filter>
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Operating System</span>
                <multi-select-filter slot="body" query-key="os" :items="filters.os"></multi-select-filter>
            </filter-accordion>
            <filter-accordion>
                <span slot="header">Features</span>
                <multi-select-filter slot="body" query-key="features" :items="filters.features"></multi-select-filter>
            </filter-accordion>
        </b-list-group>
    </div>
</template>

<script lang="ts" src="./product-filter.component.ts"></script>