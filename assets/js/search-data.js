// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-tmi",
          title: "tmi",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmi/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-24-solver",
          title: '24 Solver',
          description: "A browser-based solver for the 24 card game. Solutions grouped by idea. (written almost entirely with Claude Code)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24solver/";
            },},];
