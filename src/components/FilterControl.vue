// FilterControl.vue
<template>
  <div>
    <label>Category:</label>
    <select v-model="localFilters.category" @change="update">
      <option value="">All</option>
      <option value="category1">Category 1</option>
      <option value="category2">Category 2</option>
    </select>

    <label>Status:</label>
    <select v-model="localFilters.status" @change="update">
      <option value="">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
    
    <label>Date Range:</label>
    <input type="date" v-model="localFilters.dateRange.start" @change="update" />
    <input type="date" v-model="localFilters.dateRange.end" @change="update" />
  </div>
</template>

<script>
export default {
  props: {
    filters: Object,
  },
  data() {
    return {
      localFilters: { ...this.filters },
    };
  },
  methods: {
    update() {
      this.$emit('update-filters', this.localFilters);
    },
  },
  watch: {
    filters: {
      handler(newFilters) {
        this.localFilters = { ...newFilters };
      },
      deep: true,
    },
  },
};
</script>