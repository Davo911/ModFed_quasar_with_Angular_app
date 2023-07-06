<template>
  <div>
    <p>Welcome to my Quasar Shell</p>

    <!--  HERE I WOULD LIKE TO HAVE MY ANGULAR COMPONENT-->
    <TestNgComponent></TestNgComponent>
  </div>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent } from 'vue';
export default defineComponent({
  name: 'ExampleComponent',
  components: {
    TestNgComponent: defineAsyncComponent(()=> import('app_exposes/Component'))
  },
  setup(){
    return {
    }
  }
})
</script>
