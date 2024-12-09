// utils
import { paramCase } from "src/utils/change-case";
import { _id, _postTitles } from "src/_mock/assets";

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DEMO: "/demo",
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  components: "/components",
  docs: "https://docs.minimals.cc",
  changelog: "https://docs.minimals.cc/changelog",
  zoneUI: "https://mui.com/store/items/zone-landing-page/",
  minimalUI: "https://mui.com/store/items/minimal-dashboard/",
  freeUI: "https://mui.com/store/items/minimal-dashboard-free/",
  figma:
    "https://www.figma.com/file/kAYnYYdib0aQPNKZpgJT6J/%5BPreview%5D-Minimal-Web.v5.0.0?type=design&node-id=0%3A1&t=Al4jScQq97Aly0Mn-1",
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id: string) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // AUTH
  auth: {
    amplify: {
      login: `${ROOTS.AUTH}/amplify/login`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      register: `${ROOTS.AUTH}/amplify/register`,
      newPassword: `${ROOTS.AUTH}/amplify/new-password`,
      forgotPassword: `${ROOTS.AUTH}/amplify/forgot-password`,
    },
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
    firebase: {
      login: `${ROOTS.AUTH}/firebase/login`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      register: `${ROOTS.AUTH}/firebase/register`,
      forgotPassword: `${ROOTS.AUTH}/firebase/forgot-password`,
    },
    auth0: {
      login: `${ROOTS.AUTH}/auth0/login`,
    },
  },
  authDemo: {
    classic: {
      login: `${ROOTS.AUTH_DEMO}/classic/login`,
      register: `${ROOTS.AUTH_DEMO}/classic/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/classic/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/classic/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/classic/verify`,
    },
    modern: {
      login: `${ROOTS.AUTH_DEMO}/modern/login`,
      register: `${ROOTS.AUTH_DEMO}/modern/register`,
      forgotPassword: `${ROOTS.AUTH_DEMO}/modern/forgot-password`,
      newPassword: `${ROOTS.AUTH_DEMO}/modern/new-password`,
      verify: `${ROOTS.AUTH_DEMO}/modern/verify`,
    },
  },
  // DASHBOARD
  demo: {
    root: ROOTS.DEMO,
    mail: `${ROOTS.DEMO}/mail`,
    chat: `${ROOTS.DEMO}/chat`,
    blank: `${ROOTS.DEMO}/blank`,
    kanban: `${ROOTS.DEMO}/kanban`,
    calendar: `${ROOTS.DEMO}/calendar`,
    fileManager: `${ROOTS.DEMO}/file-manager`,
    permission: `${ROOTS.DEMO}/permission`,
    general: {
      app: `${ROOTS.DEMO}/app`,
      ecommerce: `${ROOTS.DEMO}/ecommerce`,
      analytics: `${ROOTS.DEMO}/analytics`,
      banking: `${ROOTS.DEMO}/banking`,
      booking: `${ROOTS.DEMO}/booking`,
      file: `${ROOTS.DEMO}/file`,
    },
    user: {
      root: `${ROOTS.DEMO}/user`,
      new: `${ROOTS.DEMO}/user/new`,
      list: `${ROOTS.DEMO}/user/list`,
      cards: `${ROOTS.DEMO}/user/cards`,
      profile: `${ROOTS.DEMO}/user/profile`,
      account: `${ROOTS.DEMO}/user/account`,
      edit: (id: string) => `${ROOTS.DEMO}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DEMO}/user/${MOCK_ID}/edit`,
      },
    },
    product: {
      root: `${ROOTS.DEMO}/product`,
      new: `${ROOTS.DEMO}/product/new`,
      details: (id: string) => `${ROOTS.DEMO}/product/${id}`,
      edit: (id: string) => `${ROOTS.DEMO}/product/${id}/edit`,
      demo: {
        details: `${ROOTS.DEMO}/product/${MOCK_ID}`,
        edit: `${ROOTS.DEMO}/product/${MOCK_ID}/edit`,
      },
    },
    invoice: {
      root: `${ROOTS.DEMO}/invoice`,
      new: `${ROOTS.DEMO}/invoice/new`,
      details: (id: string) => `${ROOTS.DEMO}/invoice/${id}`,
      edit: (id: string) => `${ROOTS.DEMO}/invoice/${id}/edit`,
      demo: {
        details: `${ROOTS.DEMO}/invoice/${MOCK_ID}`,
        edit: `${ROOTS.DEMO}/invoice/${MOCK_ID}/edit`,
      },
    },
    post: {
      root: `${ROOTS.DEMO}/post`,
      new: `${ROOTS.DEMO}/post/new`,
      details: (title: string) => `${ROOTS.DEMO}/post/${paramCase(title)}`,
      edit: (title: string) => `${ROOTS.DEMO}/post/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DEMO}/post/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DEMO}/post/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    order: {
      root: `${ROOTS.DEMO}/order`,
      details: (id: string) => `${ROOTS.DEMO}/order/${id}`,
      demo: {
        details: `${ROOTS.DEMO}/order/${MOCK_ID}`,
      },
    },
    job: {
      root: `${ROOTS.DEMO}/job`,
      new: `${ROOTS.DEMO}/job/new`,
      details: (id: string) => `${ROOTS.DEMO}/job/${id}`,
      edit: (id: string) => `${ROOTS.DEMO}/job/${id}/edit`,
      demo: {
        details: `${ROOTS.DEMO}/job/${MOCK_ID}`,
        edit: `${ROOTS.DEMO}/job/${MOCK_ID}/edit`,
      },
    },
    tour: {
      root: `${ROOTS.DEMO}/tour`,
      new: `${ROOTS.DEMO}/tour/new`,
      details: (id: string) => `${ROOTS.DEMO}/tour/${id}`,
      edit: (id: string) => `${ROOTS.DEMO}/tour/${id}/edit`,
      demo: {
        details: `${ROOTS.DEMO}/tour/${MOCK_ID}`,
        edit: `${ROOTS.DEMO}/tour/${MOCK_ID}/edit`,
      },
    },
  },
};
