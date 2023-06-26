<template>
  <div class="container py-5">
    <form class="w-100" v-on:submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
          required
        />
      </div>
      <div class="form-label-group mb-3">
        <router-link to="/courses">
          <button
            class="btn btn-lg btn-primary btn-block col-mb-3"
            type="button"
          >
            Log In
          </button>
        </router-link>
      </div>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2023</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // e.preventDefault();
      const data = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      console.log(data);
    },
  },
};
</script>

<style>
div.d-grid {
  display: flex;
  justify-content: center;
}
button.btn-lg {
  width: 100%;
}
</style>
