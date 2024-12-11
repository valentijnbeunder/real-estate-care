import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '../components/MainContent.vue';
import ExecutedReports from '../components/ExecutedReports.vue';
import SettingsPage from '../components/SettingsPage.vue';
import AssignedReports from '../components/AssignedReports.vue';
import KnowledgeBase from '../components/KnowledgeBase.vue';
import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'MainMenu',
    component: MainContent, // Only load MainContent here
  },
  {
    path: '/executedreports',
    name: 'ExecutedReports',
    component: ExecutedReports, // Only load ExecutedReports here
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: SettingsPage,
  },
  {
    path: '/assignedreports',
    name: 'AssignedReports',
    component: AssignedReports,
  },
  {
    path: '/knowledgebase',
    name: 'KnowledgeBase',
    component: KnowledgeBase,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: "/callback",
    component: () => import("./views/Callback.vue"), // Een eenvoudige leeg component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
