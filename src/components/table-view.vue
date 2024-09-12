<template>
  <div class="absolute w-[99%] bg-white m-2 top-5 p-3 rounded-lg">
    <div class="text-blue-600 p-2 flex gap-x-80 bg-white">
      <!-- Time column with sorting buttons -->
      <th class="flex items-stretch gap-x-4 mr-36">
        Time
        <div class="mt-1 flex justify-stretch">
          <button
            class="focus:outline-none"
            :class="sortTime === 'asc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('time', 'asc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-up-02"></IconWrapper>
          </button>
          <button
            class="focus:outline-none"
            :class="sortTime === 'desc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('time', 'desc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-down-02"></IconWrapper>
          </button>
        </div>
        <button >
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
          </button>
      </th>

      <!-- Label column with sorting buttons -->
      <th class="flex items-stretch gap-x-4 ">
        Label
        <div class="mt-1 flex justify-stretch">
          <button
            class="focus:outline-none"
            :class="sortLabel === 'asc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('label', 'asc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-up-02"></IconWrapper>
          </button>
          <button
            class="focus:outline-none"
            :class="sortLabel === 'desc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('label', 'desc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-down-02"></IconWrapper>
          </button>
        </div>
        <button >
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
          </button>
      </th>

      <!-- Value column with sorting buttons -->
      <th class="flex items-stretch gap-x-4">
        Value
        <div class="mt-1 flex justify-stretch">
          <button
            class="focus:outline-none"
            :class="sortValue === 'asc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('value', 'asc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-up-02"></IconWrapper>
          </button>
          <button
            class="focus:outline-none"
            :class="sortValue === 'desc' ? 'text-blue-700' : 'text-blue-200'"
            @click="sort('value', 'desc')"
          >
            <IconWrapper icon-Code="hugeicons:arrow-down-02"></IconWrapper>
          </button>
        </div>
        <button >
            <IconWrapper
            class="text-blue-500 mt-1"
            icon-Code="ph:eye-light"
          ></IconWrapper>
          </button>
      </th>
    </div>

    <!-- Data Table -->
    <div class="h-96 overflow-auto">
      <tr
        v-for="(cell, index) in sortedCells"
        :key="index"
        :class="index % 2 === 0 ? 'bg-stone-200' : 'bg-white'"
      >
        <Cell :time="cell.time" :label="cell.label" :value="cell.value" />
      </tr>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Cell from "./data-view.vue";
import IconWrapper from "./icons/icon-wrapper.vue";

export default defineComponent({
  components: { Cell, IconWrapper },
  name: "TableView",

  data() {
    return {
      cells: [
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
          sticky_column:true,
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:true,
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:true,
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:45 PM",
          label: "Zl Demand",
          value: "7.31 mg/hr",
          sticky_column:true,
        },
        {
          time: "23 Oct 2022 - 8:30 PM",
          label: "Zl Demand",
          value: "8.35 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:15 PM",
          label: "Zl Demand",
          value: "9.14 m3/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 8:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:45 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:30 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:15 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:false,
        },
        {
          time: "23 Oct 2022 - 7:00 PM",
          label: "Zl Demand",
          value: "8.68 mg/hr",
          sticky_column:true,
        },
      ],

      // Sorting state
      sortTime: "none", // 'asc', 'desc', or 'none'
      sortLabel: "none",
      sortValue: "none",
    };
  },

  computed: {
    sortedCells() {
      let sortedArray = [...this.cells];

      if (this.sortTime !== "none") {
        sortedArray.sort((a, b) => {
          if (this.sortTime === "asc") return a.time.localeCompare(b.time);
          else return b.time.localeCompare(a.time);
        });
      } else if (this.sortLabel !== "none") {
        sortedArray.sort((a, b) => {
          if (this.sortLabel === "asc") return a.label.localeCompare(b.label);
          else return b.label.localeCompare(a.label);
        });
      } else if (this.sortValue !== "none") {
        sortedArray.sort((a, b) => {
          if (this.sortValue === "asc") return parseFloat(a.value) - parseFloat(b.value);
          else return parseFloat(b.value) - parseFloat(a.value);
        });
      }

      return sortedArray;
    },
  },

  methods: {
    // Sorting function
    sort(column: string, order: string) {
      if (column === "time") {
        this.sortTime = this.sortTime === order ? "none" : order;
        this.sortLabel = "none";
        this.sortValue = "none";
      } else if (column === "label") {
        this.sortLabel = this.sortLabel === order ? "none" : order;
        this.sortTime = "none";
        this.sortValue = "none";
      } else if (column === "value") {
        this.sortValue = this.sortValue === order ? "none" : order;
        this.sortTime = "none";
        this.sortLabel = "none";
      }
    },
  },
});
</script>
