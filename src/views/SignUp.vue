<template>
  <div class="container py-5">
    <form class="w-100" v-on:submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          v-model="passwordCheck"
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
          Submit
        </button>
      </div>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy;2023</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.passwordCheck) {
        alert("請確認密碼是否輸入相同");
        return;
      }
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      };
      console.log(JSON.stringify(data));
      alert("註冊成功!");
    },
  },
};
</script>
