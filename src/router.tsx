import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const SupportoAmministrazione = lazy(
  () => import("./pages/SupportoAmministrazione")
);
const Vocabolario = lazy(() => import("./pages/Vocabolario"));
const ControlloEmail = lazy(() => import("./pages/ControlloEmail"));

// Aggiunta: pagina Guida per i tutorial amministrativi
const Guida = lazy(() => import("./components/Guida"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="section">
                <p className="Caricamento">Caricamento…</p>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/supporto-amministrazione",
        element: (
          <Suspense
            fallback={
              <div className="section">
                <p>Caricamento…</p>
              </div>
            }
          >
            <SupportoAmministrazione />
          </Suspense>
        ),
      },
      {
        path: "/vocabolario",
        element: (
          <Suspense
            fallback={
              <div className="section">
                <p>Caricamento…</p>
              </div>
            }
          >
            <Vocabolario />
          </Suspense>
        ),
      },
      {
        path: "/controllo-email",
        element: (
          <Suspense
            fallback={
              <div className="section">
                <p>Caricamento…</p>
              </div>
            }
          >
            <ControlloEmail />
          </Suspense>
        ),
      },
      // Aggiunta: route delle guide (spid/f24/cup/isee)
      {
        path: "/guida/:guidaId",
        element: (
          <Suspense
            fallback={
              <div className="section">
                <p>Caricamento…</p>
              </div>
            }
          >
            <Guida />
          </Suspense>
        ),
      },
    ],
  },
]);
