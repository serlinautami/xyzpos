import { Landing, Dashboard, NotFound404 } from "../pages";

/**
 * main routes untuk web aplikasi ini
 * semua url untuk memungkinkan akses di aplikasi didaftarkan  disini
 * route nya, untuk data nya disesuaikan dengan props yang ada pada komponen
 * <Route /> yang ada pada react-router-dom
 */
const appRoutes = [
  {
    title: "Dashboard - xyzPOS",
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    title: "Selamat datang di xyzPOS",
    name: "Landing",
    path: "/",
    exact: true,
    component: Landing,
  },
  {
    title: "Halaman Tidak Ditemukan",
    name: "NotFound404",
    path: "*",
    exact: true,
    component: NotFound404,
  },
];

export { appRoutes };
