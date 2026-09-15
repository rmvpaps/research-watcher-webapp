import { createRootRouteWithContext, Link, Outlet, redirect, useRouteContext} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header  from '@/components/header'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Route = createRootRouteWithContext()({
  
    component: RootLayout,
})

function RootLayout() {


    const { user,logoutcallback } = Route.useRouteContext();

    return (
        <QueryClientProvider client={queryClient}>
        <div className="app-container">
            {/* Your custom Header with your navigation stays here */}

            <Header user={user} logout={logoutcallback}></Header>
            <div className="h-screen w-screen bg-hero-pattern bg-cover bg-center bg-repeat">
                <Outlet />
            </div>


            {/* Optional: The devtools panel for debugging */}
            <TanStackRouterDevtools position="bottom-right" />
        </div>
        </QueryClientProvider>
    )
}