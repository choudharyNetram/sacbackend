module.exports = ({ env }) => ({
  // ...other config settings
  upload: {
    provider: 'local',
    providerOptions: {
      // Adjust this path to match your directory structure
      public: './public/uploads',
    },
  },
  // ...other config settings
});


/*module.exports = ({ env }) => ({
    url: env("RENDER_EXTERNAL_URL"),
    dirs: {
      public: "/public"
    },
  });
  */
