import Vue from 'vue'
import VueRouter from 'vue-router'


//views
const Login = () => import("../views/Login/Login.vue");
const Navbar = () => import("../views/Navbar/Navbar.vue");

//components
const Dashboard = () => import("../components/Dashboard/Dashboard.vue");

const SettingSurveyList = () => import("../components/Setting/SettingSurveyList/SettingSurveyList.vue");
const PostServiceSurvey = () => import("../components/Setting/PostServiceSurvey/PostServiceSurvey.vue");


const Survey = () => import("../components/Survey/MainSurvey/Survey.vue");
const ResultSurvey = () => import("../components/Survey/ViewReSultSurvey/ResultSurvey.vue");
const User = () => import("../components/User/User.vue");
const ManageData = () => import("../components/ManageData/ManageData.vue");
// const Passenger = () => import("../views/Passenger.vue");


Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: Navbar,
    children: [
      //dashboard
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      //survey and resultSurvey
      {
        path: "/survey",
        name: "Survey",
        component: Survey,
      }, {
        path: "/resultSurvey/:survey_name/:survey_id",
        name: "ResultSurvey",
        component: ResultSurvey,
      },
      //setting and POST SERVICE SURVEY
      {
        path: "/settingsurveylist",
        name: "SettingSurveyList",
        component: SettingSurveyList,
      },

      {
        path: "/postservicesurvey/:mode/:survey_name/:survey_id",
        name: "PostServiceSurvey",
        component: PostServiceSurvey,
      },

      //user manage
      {
        path: "/user",
        name: "User",
        component: User,
      },
      //manageData and master data
      {
        path: "/manageData",
        name: "ManageData",
        component: ManageData,
      },


      
    ]
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

export default router
