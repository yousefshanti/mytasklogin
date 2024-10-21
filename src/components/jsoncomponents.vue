
  <template>
    <div
   
    v-for="(componentData, index) in pageComponents"
        :key="index"
    >

      <div class="bg-white w-[70%] pb-3 rounded-lg ml-10 overflow-auto m-10">
        <div class="flex justify-between pt-5 pl-5 bg-stone-100 w-full border-b-2 h-16 rounded-t-lg">
          <Headercomponent title="chart" class="text-blue-500" />
          <div class="">
            <button><IconWrapper icon-code="iconoir:table-rows" class="size-6 mx-3"></IconWrapper></button>
            <button @click="getgrid"><IconWrapper icon-code="bi:grid" class="size-6 mx-3"></IconWrapper></button>
          </div>
        </div>
  
        <!-- Grid or inline chart layout -->
     
           
            <div class=" m-3">
      <component
      :is="getComponentType(componentData.type)"
        v-bind="componentData.props"
      />
    

        </div>
      </div>
  
      
    
    </div>

   
  </template>
  <script>
  // Import the component types
  import Heading from './Heading.vue';
  import Paragraph from './Paragraph.vue';
  import Button from './Button.vue';
  import IconWrapper from './icons/icon-wrapper.vue';
  import Headercomponent from './header.vue';
  // Load JSON (you can load it from an API or a local file)
  const pageJson = [
    {
      type: "Heading",
      props: { text: "Welcome to the Dynamic Page" }
    },
    {
      type: "Paragraph",
      props: { text: "This content is generated from a JSON file." }
    },
    {
      type: "Button",
      props: { label: "Click Me", action: "alert('Button Clicked!')" }
    }
  ];
  
  export default {
    data() {
      return {
        pageComponents: pageJson // Loaded JSON data
      };
    },
    components:{ IconWrapper,
        Headercomponent },
    methods: {
      getComponentType(type) {
        const componentsMap = {
          Heading,
          Paragraph,
          Button,
         
        };
        return componentsMap[type] || null;
      }
    }
    
  };
  </script>