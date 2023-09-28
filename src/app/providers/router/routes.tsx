import { Navigate, RouteObject } from 'react-router-dom'

import { CheckEmail, CreateNewPassword, ForgotPassword, Packs, SignIn, SignUp } from '@/pages'

export const publicRoutes: RouteObject[] = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/recover-password',
    element: <ForgotPassword />,
  },
  {
    path: '/create-new-password',
    element: <CreateNewPassword />,
  },
  {
    path: '/check-email/:email',
    element: <CheckEmail />,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/packs" />,
  },
  {
    path: '/packs',
    element: <Packs />,
  },
]
