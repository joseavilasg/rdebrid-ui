/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as AuthedImport } from "./routes/_authed"
import { Route as AuthImport } from "./routes/_auth"
import { Route as AuthedIndexImport } from "./routes/_authed/index"
import { Route as WatchSplatImport } from "./routes/watch.$"
import { Route as AuthedViewImport } from "./routes/_authed/view"
import { Route as AuthedDownloaderImport } from "./routes/_authed/downloader"
import { Route as AuthedBtsearchImport } from "./routes/_authed/btsearch"
import { Route as AuthLoginImport } from "./routes/_auth.login"
import { Route as AuthedDownloaderTabIdImport } from "./routes/_authed/downloader.$tabId"
import { Route as AuthedAuthSuccessImport } from "./routes/_authed/auth.success"

// Create/Update Routes

const AuthedRoute = AuthedImport.update({
  id: "/_authed",
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any)

const AuthedIndexRoute = AuthedIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthedRoute,
} as any)

const WatchSplatRoute = WatchSplatImport.update({
  id: "/watch/$",
  path: "/watch/$",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/watch.$.lazy").then((d) => d.Route))

const AuthedViewRoute = AuthedViewImport.update({
  id: "/view",
  path: "/view",
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedDownloaderRoute = AuthedDownloaderImport.update({
  id: "/downloader",
  path: "/downloader",
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedBtsearchRoute = AuthedBtsearchImport.update({
  id: "/btsearch",
  path: "/btsearch",
  getParentRoute: () => AuthedRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => AuthRoute,
} as any)

const AuthedDownloaderTabIdRoute = AuthedDownloaderTabIdImport.update({
  id: "/$tabId",
  path: "/$tabId",
  getParentRoute: () => AuthedDownloaderRoute,
} as any)

const AuthedAuthSuccessRoute = AuthedAuthSuccessImport.update({
  id: "/auth/success",
  path: "/auth/success",
  getParentRoute: () => AuthedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_auth": {
      id: "/_auth"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    "/_authed": {
      id: "/_authed"
      path: ""
      fullPath: ""
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    "/_auth/login": {
      id: "/_auth/login"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    "/_authed/btsearch": {
      id: "/_authed/btsearch"
      path: "/btsearch"
      fullPath: "/btsearch"
      preLoaderRoute: typeof AuthedBtsearchImport
      parentRoute: typeof AuthedImport
    }
    "/_authed/downloader": {
      id: "/_authed/downloader"
      path: "/downloader"
      fullPath: "/downloader"
      preLoaderRoute: typeof AuthedDownloaderImport
      parentRoute: typeof AuthedImport
    }
    "/_authed/view": {
      id: "/_authed/view"
      path: "/view"
      fullPath: "/view"
      preLoaderRoute: typeof AuthedViewImport
      parentRoute: typeof AuthedImport
    }
    "/watch/$": {
      id: "/watch/$"
      path: "/watch/$"
      fullPath: "/watch/$"
      preLoaderRoute: typeof WatchSplatImport
      parentRoute: typeof rootRoute
    }
    "/_authed/": {
      id: "/_authed/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof AuthedIndexImport
      parentRoute: typeof AuthedImport
    }
    "/_authed/auth/success": {
      id: "/_authed/auth/success"
      path: "/auth/success"
      fullPath: "/auth/success"
      preLoaderRoute: typeof AuthedAuthSuccessImport
      parentRoute: typeof AuthedImport
    }
    "/_authed/downloader/$tabId": {
      id: "/_authed/downloader/$tabId"
      path: "/$tabId"
      fullPath: "/downloader/$tabId"
      preLoaderRoute: typeof AuthedDownloaderTabIdImport
      parentRoute: typeof AuthedDownloaderImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface AuthedDownloaderRouteChildren {
  AuthedDownloaderTabIdRoute: typeof AuthedDownloaderTabIdRoute
}

const AuthedDownloaderRouteChildren: AuthedDownloaderRouteChildren = {
  AuthedDownloaderTabIdRoute: AuthedDownloaderTabIdRoute,
}

const AuthedDownloaderRouteWithChildren =
  AuthedDownloaderRoute._addFileChildren(AuthedDownloaderRouteChildren)

interface AuthedRouteChildren {
  AuthedBtsearchRoute: typeof AuthedBtsearchRoute
  AuthedDownloaderRoute: typeof AuthedDownloaderRouteWithChildren
  AuthedViewRoute: typeof AuthedViewRoute
  AuthedIndexRoute: typeof AuthedIndexRoute
  AuthedAuthSuccessRoute: typeof AuthedAuthSuccessRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedBtsearchRoute: AuthedBtsearchRoute,
  AuthedDownloaderRoute: AuthedDownloaderRouteWithChildren,
  AuthedViewRoute: AuthedViewRoute,
  AuthedIndexRoute: AuthedIndexRoute,
  AuthedAuthSuccessRoute: AuthedAuthSuccessRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  "": typeof AuthedRouteWithChildren
  "/login": typeof AuthLoginRoute
  "/btsearch": typeof AuthedBtsearchRoute
  "/downloader": typeof AuthedDownloaderRouteWithChildren
  "/view": typeof AuthedViewRoute
  "/watch/$": typeof WatchSplatRoute
  "/": typeof AuthedIndexRoute
  "/auth/success": typeof AuthedAuthSuccessRoute
  "/downloader/$tabId": typeof AuthedDownloaderTabIdRoute
}

export interface FileRoutesByTo {
  "": typeof AuthRouteWithChildren
  "/login": typeof AuthLoginRoute
  "/btsearch": typeof AuthedBtsearchRoute
  "/downloader": typeof AuthedDownloaderRouteWithChildren
  "/view": typeof AuthedViewRoute
  "/watch/$": typeof WatchSplatRoute
  "/": typeof AuthedIndexRoute
  "/auth/success": typeof AuthedAuthSuccessRoute
  "/downloader/$tabId": typeof AuthedDownloaderTabIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  "/_auth": typeof AuthRouteWithChildren
  "/_authed": typeof AuthedRouteWithChildren
  "/_auth/login": typeof AuthLoginRoute
  "/_authed/btsearch": typeof AuthedBtsearchRoute
  "/_authed/downloader": typeof AuthedDownloaderRouteWithChildren
  "/_authed/view": typeof AuthedViewRoute
  "/watch/$": typeof WatchSplatRoute
  "/_authed/": typeof AuthedIndexRoute
  "/_authed/auth/success": typeof AuthedAuthSuccessRoute
  "/_authed/downloader/$tabId": typeof AuthedDownloaderTabIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ""
    | "/login"
    | "/btsearch"
    | "/downloader"
    | "/view"
    | "/watch/$"
    | "/"
    | "/auth/success"
    | "/downloader/$tabId"
  fileRoutesByTo: FileRoutesByTo
  to:
    | ""
    | "/login"
    | "/btsearch"
    | "/downloader"
    | "/view"
    | "/watch/$"
    | "/"
    | "/auth/success"
    | "/downloader/$tabId"
  id:
    | "__root__"
    | "/_auth"
    | "/_authed"
    | "/_auth/login"
    | "/_authed/btsearch"
    | "/_authed/downloader"
    | "/_authed/view"
    | "/watch/$"
    | "/_authed/"
    | "/_authed/auth/success"
    | "/_authed/downloader/$tabId"
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren
  AuthedRoute: typeof AuthedRouteWithChildren
  WatchSplatRoute: typeof WatchSplatRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  AuthedRoute: AuthedRouteWithChildren,
  WatchSplatRoute: WatchSplatRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_authed",
        "/watch/$"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login"
      ]
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/btsearch",
        "/_authed/downloader",
        "/_authed/view",
        "/_authed/",
        "/_authed/auth/success"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth.login.tsx",
      "parent": "/_auth"
    },
    "/_authed/btsearch": {
      "filePath": "_authed/btsearch.tsx",
      "parent": "/_authed"
    },
    "/_authed/downloader": {
      "filePath": "_authed/downloader.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/downloader/$tabId"
      ]
    },
    "/_authed/view": {
      "filePath": "_authed/view.tsx",
      "parent": "/_authed"
    },
    "/watch/$": {
      "filePath": "watch.$.tsx"
    },
    "/_authed/": {
      "filePath": "_authed/index.tsx",
      "parent": "/_authed"
    },
    "/_authed/auth/success": {
      "filePath": "_authed/auth.success.tsx",
      "parent": "/_authed"
    },
    "/_authed/downloader/$tabId": {
      "filePath": "_authed/downloader.$tabId.tsx",
      "parent": "/_authed/downloader"
    }
  }
}
ROUTE_MANIFEST_END */
