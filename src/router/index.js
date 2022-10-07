import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/", name: "Panel", component: () => import("@pages/Panel.vue"), redirect: 'projects',
		children: [
			{
				path: "dashboard", name: "Dashboard", component: () => import("@views/Dashboard.vue")
			},
			{
				path: "projects", name: "Projects", component: () => import("@views/Projects.vue")
			},
			{
				path: "modules", name: "Modules", component: () => import("@views/Modules.vue")
			},
			{
				path: "sprint", name: "Sprint", component: () => import("@views/Sprint.vue")
			},
			{
				path: "members", name: "Members", component: () => import("@views/Members.vue")
			},
			{
				path: "reports", name: "Reports", component: () => import("@views/Reports.vue")
			}
		]
	},
	{
		path: "/login", name: "Login", component: () => import("@pages/Login.vue")
	},
	{
		path: "/register", name: "Register", component: () => import("@pages/Register.vue")
	},
	{
		path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("@pages/NotFound.vue")
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
