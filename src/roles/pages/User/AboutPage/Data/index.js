const JSIcon = require("@/assets/item-skills/javascript-icon.svg");
const FirebaseIcon = require("@/assets/item-skills/firebase-icon.svg");
const GraphQLIcon = require("@/assets/item-skills/graphQL.svg");
const CSS3Icon = require("@/assets/item-skills/css3-icon.svg");
const ReactIcon = require("@/assets/item-skills/react-icon.svg");
const ReduxIcon = require("@/assets/item-skills/redux-icon.svg");
const TypescriptIcon = require("@/assets/item-skills/typescript-icon.svg");
const VueIcon = require("@/assets/item-skills/vue-icon.svg");
const VuexIcon = require("@/assets/item-skills/vuex-icon.svg");
const HTMLIcon = require("@/assets/item-skills/html5-icon.svg");
const SocketIOIcon = require("@/assets/item-skills/socket-io-icon.svg");

const NodeJSIcon = require("@/assets/item-skills/nodejs-icon.svg");
const MongoDBIcon = require("@/assets/item-skills/mongodb-icon.svg");
const LaravelIcon = require("@/assets/item-skills/laravel-icon.svg");
const PhpIcon = require("@/assets/item-skills/php-icon.svg");
const RedisIcon = require("@/assets/item-skills/redis-icon.svg");
const JWTIcon = require("@/assets/item-skills/jwt-icon.svg");

const PostgresIcon = require("@/assets/item-skills/postgresql-icon.svg");
const MySQLIcon = require("@/assets/item-skills/mysql-icon.svg");

const GitIcon = require("@/assets/item-skills/git-icon.svg");
const GithubIcon = require("@/assets/svg-icons/github-icon.svg");
const NPMIcon = require("@/assets/item-skills/npm-icon.svg");
const YarnIcon = require("@/assets/item-skills/yarn-icon.svg");

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
