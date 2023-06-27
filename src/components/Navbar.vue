<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand ms-3" to="/"> 語言學習網 </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent"
      class="navbar-collapse collapse justify-content-end"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->

        <router-link
          to="/admin/courses"
          class="text-white me-3"
          v-if="currentUser.isAdmin"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link to="#" class="text-white me-3"
            >Hi~{{ currentUser.isAdmin ? "管理者" : "使用者" }} 您好
          </router-link>
          <router-link to="/signin">
            <button
              type="button"
              class="btn btn-sm btn-outline-success me-2 my-sm-0"
            >
              登出
            </button>
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// 假資料,先模擬一組登入使用者
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,

  // currentUser: {
  //   id: 2,
  //   name: "學生",
  //   email: "student@example.com",
  //   image: "https://i.pravatar.cc/300",
  //   isAdmin: false,
  // },
  // isAuthenticated: true,
};

export default {
  data() {
    return {
      // 使用者未登入的情況下
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  methods: {
    // 模擬向後端API拉取資料
    fetchUser() {
      // 把 dummyUser 蓋過 currentUser
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
  created() {
    // 在生命週期created載入
    this.fetchUser();
  },
};
</script>
