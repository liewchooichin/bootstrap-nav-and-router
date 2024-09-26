import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Index } from "./Index";
import { Page1, Page2, Page3, Page4, Page5, Page6 } 
  from "../components/Pages";
import { Page21, Page22 } from "../components/Pages";
import { PageWithSidebar } from "../components/PageWithSidebar";
import { WebAPI } from "../webapi/WebAPI";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/webapi",
        element: <WebAPI />,
      },
      {
        path: "/page2",
        element: <Page2 />,
        children: [
          {
            path: "/page2/page21",
            element: <Page21 />,
          },
          {
            path: "/page2/page22",
            element: <Page22 />,
          },
        ],
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
      {
        path: "/page4",
        element: <Page4 />,
      },
      {
        path: "/page5",
        element: <Page5 />,
      },
      {
        path: "/page6",
        element: <Page6 />,
      },
      {
        path: "/sidebar",
        element: <PageWithSidebar />,
        children: [
          {
            path: "/sidebar/page6",
            element: <Page6 />,
          },
          {
            path: "/sidebar/page5",
            element: <Page5 />,
          },
          {
            path: "/sidebar/page4",
            element: <Page4 />,
          },
        ],
      },
    ],
  },
])