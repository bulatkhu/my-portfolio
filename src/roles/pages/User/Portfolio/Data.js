const {
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  HTMLIcon,
  // JSIcon,
  // FirebaseIcon,
  // GraphQLIcon,
  // CSS3Icon,
  // VueIcon,
  // VuexIcon,
  // SocketIOIcon,
  // NodeJSIcon,
  // MongoDBIcon,
  // LaravelIcon,
  // PhpIcon,
  // RedisIcon,
  // JWTIcon,
  // PostgresIcon,
  // MySQLIcon,
  // GitIcon,
  // GithubIcon,
  // NPMIcon,
  // YarnIcon,
} = require("@/icons/TechnologiesIcons").default;

export default [
  {
    id: 1,
    icon: [ReactIcon, ReactIcon, ReactIcon],
    thumbnail: "/images/project-image-1.png",
    title: "Some title",
    description: "Some description",
    mainDescription:
      "Provides a user-friendly guided process to quickly check and test all of the main components of your phone, from which display information reports. Among the many tests are a network, storage, GPS test, and a WiFi test.",
    features: {
      title: "Features of Safe Phone",
      items: [
        "Device information check",
        "Device information check",
        "Device information check",
        "Device information check",
        "Device information check",
        "Device information check",
      ],
    },
    technologies: [
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: ReduxIcon,
        label: "Redux",
      },
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: HTMLIcon,
        label: "HTML5",
      },
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: ReactIcon,
        label: "React",
      },
      {
        icon: ReactIcon,
        label: "React",
      },
    ],
  },
  {
    id: 2,
    icon: ReduxIcon,
    thumbnail: "/images/project-image-1.png",
    title: "Some title",
    description: "Some description",
    mainDescription: "",
  },
  {
    id: 3,
    icon: HTMLIcon,
    thumbnail: "/images/project-image-1.png",
    title: "Some title",
    description: "Some description",
    mainDescription:
      "Provides a user-friendly guided process to quickly check and test all of the main components of your phone, from which display information reports. Among the many tests are a network, storage, GPS test, and a WiFi test.",
  },
  {
    id: 4,
    icon: TypescriptIcon,
    thumbnail: "/images/project-image-1.png",
    title: "Some title",
    description: "Some description",
    mainDescription:
      "Provides a user-friendly guided process to quickly check and test all of the main components of your phone, from which display information reports. Among the many tests are a network, storage, GPS test, and a WiFi test.",
  },
];
