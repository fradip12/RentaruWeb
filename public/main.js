new Vue({
  el: '#app',

  data: {
    size: { large: true },
  },

  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#f4511e',
          accent: '#ffffff',
          dark: '#000000',
        },
      },
    },

    computed: {
      size() {
        const size = { xs: 'x-small', sm: 'small', lg: 'large', xl: 'x-large' }[
          this.$vuetify.breakpoint.name
        ];
        return size ? { [size]: true } : {};
      },
    },
  }),
});
