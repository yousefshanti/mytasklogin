
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import chart from './chart.vue';
  import Headercomponent from './header.vue';
  import mymap from './mymap.vue';
  import IconWrapper from './icons/icon-wrapper.vue';
  import Jsoncomponents from './jsoncomponents.vue';
  
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    
    components: { chart, IconWrapper, Headercomponent, Jsoncomponents },
    setup(props) {
      const grid = ref(true); // Toggles between grid and non-grid layout
  
      const getgrid = () => {
        grid.value = !grid.value; // Toggle grid layout
      };
  
      return {
        props,
        grid,
        getgrid,
      };
    },
  });
  </script>
  