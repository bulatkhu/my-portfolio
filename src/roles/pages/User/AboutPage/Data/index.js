const {
  JSIcon,
  FirebaseIcon,
  GraphQLIcon,
  CSS3Icon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
  VueIcon,
  VuexIcon,
  HTMLIcon,
  SocketIOIcon,
  NodeJSIcon,
  MongoDBIcon,
  LaravelIcon,
  PhpIcon,
  RedisIcon,
  JWTIcon,
  PostgresIcon,
  MySQLIcon,
  GitIcon,
  GithubIcon,
  NPMIcon,
  YarnIcon,
} = require("@/icons/TechnologiesIcons").default;

export default [
  {
    title: "Front End Development",
    items: [
      {
        main: "JavaScript Development",
        text: "architecting and building web/mobile applications with JavaScript/TypeScript, React, Gatsby.",
      },
      {
        main: "Responsive Design",
        text: "adapting and optimizing web pages to work on all screen sizes (mobile, tablet & desktop).",
      },
      {
        main: "Internationalizaton (i18n) ",
        text: "experienced in developing multilingual and bidirectional web application.",
      },
    ],
    skillsItems: [
      { icon: JSIcon, label: "JavaScript" },
      { icon: FirebaseIcon, label: "Firebase" },
      { icon: GraphQLIcon, label: "GraphQL" },
      { icon: HTMLIcon, label: "HTML5" },
      { icon: CSS3Icon, label: "CSS3" },
      { icon: ReactIcon, label: "React" },
      { icon: ReduxIcon, label: "Redux" },
      { icon: TypescriptIcon, label: "TypeScript" },
      { icon: VueIcon, label: "Vue" },
      { icon: VuexIcon, label: "Vuex" },
      { icon: SocketIOIcon, label: "Socket.io" },
    ],
  },

  {
    title: "Back End Development",
    items: [
      {
        main: "Server API",
        text: "Design and development of high scalable backend API servers using Node JS and Graph QL.",
      },
      {
        main: "High security",
        text: "Highly secure structured APIs with hi-tech technologies and best approaches.",
      },
    ],
    skillsItems: [
      { icon: JSIcon, label: "JavaScript" },
      { icon: TypescriptIcon, label: "TypeScript" },
      { icon: NodeJSIcon, label: "Node JS" },
      { icon: GraphQLIcon, label: "GraphQL" },
      { icon: MongoDBIcon, label: "Mongo DB" },
      { icon: LaravelIcon, label: "Laravel" },
      { icon: SocketIOIcon, label: "Socket.io" },
      { icon: PhpIcon, label: "Php" },
      { icon: RedisIcon, label: "Redis" },
      { icon: JWTIcon, label: "JSON web token" },
    ],
  },

  {
    other: true,
    title: "Databases",
    skillsItems: [
      { icon: MongoDBIcon, label: "MongoDB" },
      { icon: PostgresIcon, label: "PostgreSQL" },
      { icon: MySQLIcon, label: "MySQL" },
      { icon: RedisIcon, label: "Redis" },
    ],
  },

  {
    other: true,
    title: "Other technologies",
    skillsItems: [
      { icon: GitIcon, label: "Git" },
      { icon: GithubIcon, label: "GitHub" },
      { icon: NPMIcon, label: "NPM" },
      { icon: YarnIcon, label: "Yarn" },
    ],
  },
];
