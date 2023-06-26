<template>
  <ul class="nav nav-tabs mb-4 mt-3">
    <li v-for="tab in tabs" v-bind:key="tab.id" class="nav-item">
      <router-link v-bind:to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "課程列表",
          path: "/admin/courses",
        },
        {
          id: uuidv4(),
          title: "學生列表",
          path: "/admin/students",
        },
      ],
    };
  },
};
</script>