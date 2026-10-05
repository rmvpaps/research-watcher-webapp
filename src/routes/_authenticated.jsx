import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({

   beforeLoad: ({ context,location }) => {

    //alert("protected route")
    // 2. Check if the user is logged in
    //console.log(context)
    if (!context.isLoggedIn) {
      // 3. Redirect them immediately to the login page
      throw redirect({
        to: '/',
        // Optional: Save the current page path so you can send them back after logging in
        search: {
          redirect: location.href,
        },
      })
    }
  },

  component: () => <Outlet />,
})