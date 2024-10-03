import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Index } from "./Index";
import { Page1, Page2, Page3, Page4, Page5, Page6 } 
  from "../components/Pages";
import { Page21, Page22 } from "../components/Pages";
import { PageWithSidebar } from "../components/PageWithSidebar";
import { WebAPI } from "../webapi/WebAPI";
import { QuizMain } from "../quiz/QuizMain";
import { QuestionPage } from "../quiz/QuestionPage";
import { SidebarUnicorn } from "../unicorns/SidebarUnicorn";
import { AddUnicorn } from "../unicorns/AddUnicorn";
import { EditUnicorn } from "../unicorns/EditUnicorn";
import { ListUnicorns } from "../unicorns/ListUnicorns";
import { IndexUnicorns } from "../unicorns/IndexUnicorns";


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
        path: "/quiz",
        element: <QuizMain />,
        /* children: [
          {
            path: "/quiz/:questionId",
            element: <QuestionPage />,
          },
        ], */
      },
      {
        path: "/unicorns",
        element: <IndexUnicorns />,
        children: [
          {
            path: "addUnicorn",
            element: <AddUnicorn />
          },
          {
            path: "listUnicorns",
            element: <ListUnicorns />
          },
          {
            path: ":editUnicorn/:unicornId",
            element: <EditUnicorn />
          },
        ]
      },
      {
        path: "/page4",
        element: <Page4 />,
      },
      {
        path: "/page5/:itemId?",
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