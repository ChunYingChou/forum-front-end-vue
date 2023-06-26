<template>
  <div class="container py-5">
    <h1>後台管理</h1>
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNavTabs />
    <router-link to="/admin/courses/new" class="btn btn-primary mb-4">
      新增課程
    </router-link>

    <!-- 後台課程列表 AdminCoursesTable -->
    <AdminCoursesTable />
  </div>
</template>

<script>
import AdminNavTabs from "./../components/AdminNavTabs.vue";
import AdminCoursesTable from "./../components/AdminCoursesTable.vue";

export default {
  name: "AdminCourses",
  components: {
    AdminNavTabs,
    AdminCoursesTable,
  },
};
</script>
