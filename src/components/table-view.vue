<template>
  <div class="relative w-[99%] bg-white m-2 top-2 rounded-lg h-2/3  shadow-2xl">
    <!-- Search Input -->
    <div class="p-4 flex border-b-2">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="border border-gray-300 rounded-lg w-11/12 "
      />
      <div class="">
        <button @click="exportToCSV" class="p-1 ml-5 bg-blue-500 text-white rounded">
          Export
        </button>
      </div>
    </div>

    <!-- Table -->
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="sticky top-0 z-10">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="px-6 py-4 text-left text-blue-500 tracking-wider bg-white"
          >
            {{ header }}
            <button @click="reverseRows">
              <IconWrapper class="text-blue-500 mx-2" icon-code="hugeicons:arrow-up-down"></IconWrapper>
            </button>
            <button>
              <IconWrapper class="text-blue-500" icon-code="ph:eye-light"></IconWrapper>
            </button>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="(cell, rowIndex) in paginatedCells"
          :key="rowIndex"
          :class="rowIndex % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
        >
          <td
            v-for="(value, key) in cell"
            :key="key"
            class="px-6 py-4 whitespace-nowrap text-blue-500"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="flex justify-between p-4">
      <button @click="previousPage" :disabled="currentPage === 1" class="bg-gray-300 p-2 rounded">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-gray-300 p-2 rounded">
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import IconWrapper from "./icons/icon-wrapper.vue";

export default defineComponent({
  name: "TableView",
  components: { IconWrapper },
  data() {
    return {
      cells: [
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
        
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
        
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
        
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
        
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          
        },
      ],
      currentPage: 1,
      itemsPerPage: 10,
      hiddenColumns: [],
      isReversed: false,
      searchQuery: '', // Search query
    };
  },
  computed: {
    headers() {
      return Object.keys(this.cells[0]);
    },
    reversedCells() {
      return this.isReversed ? [...this.cells].reverse() : this.cells;
    },
    filteredCells() {
      return this.reversedCells.filter((cell) =>
        Object.values(cell).some((value) =>
          value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
    paginatedCells() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCells.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredCells.length / this.itemsPerPage);
    },
  },
  methods: {
    reverseRows() {
      this.isReversed = !this.isReversed;
    },
    exportToCSV() {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += this.headers.join(",") + "\n";
      this.filteredCells.forEach((row) => {
        const rowData = this.headers.map((header) => row[header]);
        csvContent += rowData.join(",") + "\n";
      });
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "table_data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
});
</script>
