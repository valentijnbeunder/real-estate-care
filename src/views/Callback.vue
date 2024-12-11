<template>
    <div>Redirecting...</div>
  </template>
  
  <script>
  export default {
    mounted() {
      const { handleRedirectCallback } = this.$auth0;
      handleRedirectCallback()
        .then(() => {
          const redirectUrl = localStorage.getItem("auth_redirect_url") || "/";
          this.$router.push(redirectUrl);
        })
        .catch((error) => {
          console.error("Auth0 Redirect Error:", error);
        });
    },
  };
  </script>
  