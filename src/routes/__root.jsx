import { createRootRoute, Link, Outlet, redirect} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header  from '@/components/header'
import { getUser } from '@/api/auth'

export const Route = createRootRoute({
  
    component: RootLayout,
})

function RootLayout() {




    return (
        <div className="app-container">
            {/* Your custom Header with your navigation stays here */}

            <Header loggedIn={true}></Header>
            <div className="h-screen w-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
                <Outlet />
            </div>


            {/* Optional: The devtools panel for debugging */}
            <TanStackRouterDevtools position="bottom-right" />
        </div>
    )
}