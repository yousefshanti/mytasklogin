// ParentComponent.vue
<template>
  <div>
    <FilterControl :filters="filters" @update-filters="updateFilters" />
    <DataComponentA :filters="filters" />
    <DataComponentB :filters="filters" />
  </div>
</template>

<script>
import FilterControl from './FilterControl.vue';
import DataComponentA from './DataComponentA.vue';


export default {
  components: { FilterControl, DataComponentA,},
  data() {
    return {
      filters: {
        category: null,
        dateRange: { start: null, end: null },
        status: null,
      },
    };
  },
  methods: {
    updateFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
    },
  },
};
</script>