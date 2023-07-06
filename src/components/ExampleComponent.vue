<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>

    <!--  HERE I WOULD LIKE TO HABE MY ANGULAR COMPONENT-->
    <TestNgComponent></TestNgComponent>
  </div>
</template>
<script lang="ts">
import { computed, ref, defineComponent, defineAsyncComponent } from 'vue';
import { Todo, Meta } from './models';
export default defineComponent({
  name: 'ExampleComponent',
  components: {
    TestNgComponent: defineAsyncComponent(()=> import('app_exposes/Component'))
  },
  setup(){
    interface Props {
      title: string;
      todos?: Todo[];
      meta: Meta;
      active: boolean;
    }
    const props = withDefaults(defineProps<Props>(), {
      todos: () => [],
    });

    const clickCount = ref(0);
    function increment() {
      clickCount.value += 1;
      return clickCount.value;
    }

    const todoCount = computed(() => props.todos.length);
    return {
      todoCount,
      increment,
      clickCount,
      props

    }
  }
})
</script>
