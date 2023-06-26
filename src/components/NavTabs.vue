<template>
  <ul class="nav nav-tabs mb-4">
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
          title: "首頁",
          path: "/courses",
        },
        {
          id: uuidv4(),
          title: "最新動態",
          path: "/courses/feeds",
        },
        {
          id: uuidv4(),
          title: "我的課程",
          path: "/courses/mycourse",
        },
        {
          id: uuidv4(),
          title: "課程追蹤清單",
          path: "/courses/followedlist",
        },
      ],
    };
  },
};
</script>
