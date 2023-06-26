<template>
  <div class="container py-5">
    <h1>後台管理</h1>
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNavTabs />

    <!-- 後台學生列表 AdminStudentsTable -->
    <AdminStudentsTable />
  </div>
</template>

<script>
import AdminStudentsTable from "../components/AdminStudentsTable.vue";
import AdminNavTabs from "./../components/AdminNavTabs.vue";

export default {
  name: "AdminStudents",
  components: {
    AdminNavTabs,
    AdminStudentsTable,
  },
};
</script>
