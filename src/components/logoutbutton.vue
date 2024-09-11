<template>
  <div>
    <button @click="logout" class="underline hover:text-blue-500">
      Logout
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Logout",
  setup() {
    const router = useRouter();

    // Define the logout function
    const logout = () => {
      // Clear the authentication token
      localStorage.removeItem("authToken");
      // Redirect to login page
      router.push("/"); // Redirects to the login page
    };

    return {
      logout,
    };
  },
});
</script>
