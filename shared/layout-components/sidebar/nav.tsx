import React from "react";
const icon1 = <i className="bx bx-home side-menu__icon"></i>
const icon2 = <i className="bx bx-file-blank side-menu__icon"></i>
const icon3 = <i className="bx bx-task side-menu__icon"></i>
const icon4 = <i className="bx bx-fingerprint side-menu__icon"></i>
const icon5 = <i className="bx bx-error side-menu__icon"></i>
const icon6 = <i className="bx bx-box side-menu__icon"></i>
const icon7 = <i className="bx bx-medal side-menu__icon"></i>
const icon8 = <i className="bx bx-file side-menu__icon"></i>
const icon9 = <i className="bx bx-party side-menu__icon"></i>
const icon10 = <i className="bx bx-gift side-menu__icon"></i>
const icon11 = <i className="bx bx-grid-alt side-menu__icon"></i>
const icon12 = <i className="bx bx-table side-menu__icon"></i>
const icon13 = <i className="bx bx-bar-chart-square side-menu__icon"></i>
const icon14 = <i className="bx bx-map side-menu__icon"></i>
const icon15 = <i className="bx bx-store-alt side-menu__icon"></i>
const icon16 = <i className="bx bx-layer side-menu__icon"></i>

//Badges
const badge1 = <span className="badge bg-secondary-transparent ms-2">New</span>
const badge2 = <span className="badge bg-warning-transparent ms-2">12</span>
const badge3 = <span className="badge bg-danger-transparent ms-2">Hot</span>
const badge4 = <span className="badge bg-success-transparent ms-2">3</span>
export const MENUITEMS:any = [
  {
    menutitle: "MAIN",
  },
      {
        title: "Dashboards", icon: icon1, badgetxt: badge2, type: "sub", active: false, selected: false,
        children: [
          { path: "/dashboards/crm", type: "link", active: false, selected: false, title: "CRM", },
          { path: "/dashboards/ecommerce", type: "link", active: false, selected: false, title: "Ecommerce" },
          { path: "/dashboards/crypto", type: "link", active: false, selected: false, title: "Crypto" },
          { path: "/dashboards/jobs", type: "link", active: false, selected: false, title: "Jobs" },
          { path: "/dashboards/nft", type: "link", active: false, selected: false, title: "NFT" },
          { path: "/dashboards/sales", type: "link", active: false, selected: false, title: "Sales" },
          { path: "/dashboards/analytics", type: "link", active: false, selected: false, title: "Analytics" },
          { path: "/dashboards/projects", type: "link", active: false, selected: false, title: "Projects" },
          { path: "/dashboards/hrm", type: "link", active: false, selected: false, title: "HRM" },
          { path: "/dashboards/stocks", type: "link", active: false, selected: false, title: "Stocks" },
          { path: "/dashboards/courses", type: "link", active: false, selected: false, title: "Courses" },
          { path: "/dashboards/personal", type: "link", active: false, selected: false, title: "Personal" },
        ],
      },
   
      {
        menutitle: "PAGES",
      },
  
      {
        title: "Pages", icon: icon2, badgetxt: badge1, type: "sub", active: false, selected: false,
        children: [
          { path: "/pages/about-us", type: "link", active: false, selected: false, title: "About Us" },
          {
            title: "Blog", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/pages/blog/blog", type: "link", active: false, selected: false, title: "Blog" },
              { path: "/pages/blog/blog-details", type: "link", active: false, selected: false, title: "Blog Details " },
              { path: "/pages/blog/create-blog", type: "link", active: false, selected: false, title: "Create Blog" },
            ],
          },
          { path: "/pages/chat", type: "link", active: false, selected: false, title: "Chat" },
          { path: "/pages/contacts", type: "link", active: false, selected: false, title: "Contacts" },
          { path: "/pages/contact-us", type: "link", active: false, selected: false, title: "Contact us" },
          {
            title: "Ecommerce", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/pages/ecommerce/add-products", type: "link", active: false, selected: false, title: "Add Products" },
              { path: "/pages/ecommerce/cart", type: "link", active: false, selected: false, title: "Cart " },
              { path: "/pages/ecommerce/checkout", type: "link", active: false, selected: false, title: "Checkout" },
              { path: "/pages/ecommerce/edit-products", type: "link", active: false, selected: false, title: "Edit Products" },
              { path: "/pages/ecommerce/order-details", type: "link", active: false, selected: false, title: "Order Details" },
              { path: "/pages/ecommerce/orders", type: "link", active: false, selected: false, title: "Orders" },
              { path: "/pages/ecommerce/products", type: "link", active: false, selected: false, title: "Products" },
              { path: "/pages/ecommerce/product-details", type: "link", active: false, selected: false, title: "Product Details" },
              { path: "/pages/ecommerce/products-list", type: "link", active: false, selected: false, title: "Products List" },
              { path: "/pages/ecommerce/wishlist", type: "link", active: false, selected: false, title: "Wishlist" },
            ],
          },
          {
            title: "Email", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/pages/email/mail-app", type: "link", active: false, selected: false, title: "Mail App" },
              { path: "/pages/email/mail-settings", type: "link", active: false, selected: false, title: "Mail Settings" },
            ],
          },
          { path: "/pages/empty", type: "link", active: false, selected: false, title: "Empty" },
          { path: "/pages/faqs", type: "link", active: false, selected: false, title: "FAQ's" },
          {
            title: "File Manager", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/pages/filemanager", type: "link", active: false, selected: false, title: "File Manager" },
            ],
          },
          {
            title: "Invoice", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/pages/invoice/create-invoice", type: "link", active: false, selected: false, title: "Create Invoice" },
              { path: "/pages/invoice/invoice-details", type: "link", active: false, selected: false, title: "Invoice Details" },
              { path: "/pages/invoice/invoice-list", type: "link", active: false, selected: false, title: "Invoice List" },
            ],
          },
          { path: "/landing", type: "link", active: false, selected: false, title: "Landing" },
          { path: "/jobs-landing", type: "link", active: false, badgetxt: badge1, selected: false, title: "Jobs Landing" },
          { path: "/pages/notifications", type: "link", active: false, selected: false, title: "Notifications" },
          { path: "/pages/pricing", type: "link", active: false, selected: false, title: "Pricing" },
          { path: "/pages/profile", type: "link", active: false, selected: false, title: "Profile" },
          { path: "/pages/reviews", type: "link", active: false, selected: false, title: "Reviews" },
          { path: "/pages/team", type: "link", active: false, selected: false, title: "Team" },
          { path: "/pages/terms-conditions", type: "link", active: false, selected: false, title: "Terms & Conditions" },
          { path: "/pages/timeline", type: "link", active: false, selected: false, title: "Timeline" },
          { path: "/pages/todo-list", type: "link", active: false, selected: false, title: "To Do List" },
        ],
      },
      {
        title: "Task", icon: icon3, type: "sub", active: false, selected: false, badgetxt: badge1,
        children: [
          { path: "/task/kanban-board", type: "link", active: false, selected: false, title: "Kanban Board" },
          { path: "/task/list-view", type: "link", active: false, selected: false, title: "List View" },
          { path: "/task/task-details", type: "link", active: false, selected: false, title: "Task Details" },
        ],
      },
      {
        title: "Authentication", icon: icon4, type: "sub", active: false, selected: false,
        children: [
          { path: "/authentication/comming-soon", type: "link", active: false, selected: false, title: "Coming Soon" },
          {
            title: "Create Password", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/create-password/basic", type: "link", active: false, selected: false, title: "Basic" },
              { path: "/authentication/create-password/cover", type: "link", active: false, selected: false, title: "Cover" },
            ],
          },
          {
            title: "Lock Screen", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/lock-screen/basic", type: "link", active: false, selected: false, title: "Basic" },
              { path: "/authentication/lock-screen/cover", type: "link", active: false, selected: false, title: "Cover" },
            ],
          },
          {
            title: "Reset Password", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/reset-password/basic", type: "link", active: false, selected: false, title: "Basic" },
              { path: "/authentication/reset-password/cover", type: "link", active: false, selected: false, title: "Cover" },
            ],
          },
          {
            title: "Sign Up", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/sign-up/basic", type: "link", active: false, selected: false, title: "Basic" },
              { path: "/authentication/sign-up/cover", type: "link", active: false, selected: false, title: "Cover" },
            ],
          },
          {
            title: "Sign In", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/sign-in/basic", type: "link", active: false, selected: false, title: "Basic", },
              { path: "/authentication/sign-in/cover", type: "link", active: false, selected: false, title: "Cover", },
            ],
          },
          {
            title: "Two Step Verification", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/authentication/two-step-verification/basic", type: "link", active: false, selected: false, title: "Basic" },
              { path: "/authentication/two-step-verification/cover", type: "link", active: false, selected: false, title: "Cover" },
            ],
          },
          { path: "/authentication/under-maintanance", type: "link", active: false, selected: false, title: "Under Maintainance" },
        ],
      },
      {
        title: "Error", icon: icon5, type: "sub", active: false, selected: false,
        children: [
          { path: "/error/error-401", type: "link", active: false, selected: false, title: "401-Error" },
          { path: "/error/error-404", type: "link", active: false, selected: false, title: "404-Error" },
          { path: "/error/error-500", type: "link", active: false, selected: false, title: "500-Error" },
        ],
      },
    
      {
        menutitle: "GENERAL",
      },

      {
        title: "Ui Elements", icon: icon6, type: "sub", active: false, selected: false,
        children: [
          { path: "/ui-elements/alerts", type: "link", active: false, selected: false, title: "Alerts" },
          { path: "/ui-elements/badge", type: "link", active: false, selected: false, title: "Badge" },
          { path: "/ui-elements/breadcrumb", type: "link", active: false, selected: false, title: "Breadcrumb" },
          { path: "/ui-elements/buttons", type: "link", active: false, selected: false, title: "Buttons" },
          { path: "/ui-elements/buttongroup", type: "link", active: false, selected: false, title: "Button Group" },
          { path: "/ui-elements/cards", type: "link", active: false, selected: false, title: "Cards" },
          { path: "/ui-elements/dropdowns", type: "link", active: false, selected: false, title: "Dropdowns" },
          { path: "/ui-elements/images-figures", type: "link", active: false, selected: false, title: "Images & Figures" },
          { path: "/ui-elements/listgroup", type: "link", active: false, selected: false, title: "List Group" },
          { path: "/ui-elements/nav-tabs", type: "link", active: false, selected: false, title: "Navs & Tabs" },
          { path: "/ui-elements/objectfit", type: "link", active: false, selected: false, title: "Object Fit" },
          { path: "/ui-elements/pagination", type: "link", active: false, selected: false, title: "Pagination" },
          { path: "/ui-elements/popovers", type: "link", active: false, selected: false, title: "Popovers" },
          { path: "/ui-elements/progress", type: "link", active: false, selected: false, title: "Progress" },
          { path: "/ui-elements/spinners", type: "link", active: false, selected: false, title: "Spinners" },
          { path: "/ui-elements/toasts", type: "link", active: false, selected: false, title: "Toasts" },
          { path: "/ui-elements/tooltips", type: "link", active: false, selected: false, title: "Tooltips" },
          { path: "/ui-elements/typography", type: "link", active: false, selected: false, title: "Typography" },
        ],
      },
      {
        title: "Utilities", icon: icon7, type: "sub", active: false, selected: false,
        children: [
          { path: "/utilities/avatars", type: "link", active: false, selected: false, title: "Avatars" },
          { path: "/utilities/borders", type: "link", active: false, selected: false, title: "Borders" },
          { path: "/utilities/break-points", type: "link", active: false, selected: false, title: "Breakpoints" },
          { path: "/utilities/colors", type: "link", active: false, selected: false, title: "Colors" },
          { path: "/utilities/columns", type: "link", active: false, selected: false, title: "Columns" },
          { path: "/utilities/flex", type: "link", active: false, selected: false, title: "Flex" },
          { path: "/utilities/gutters", type: "link", active: false, selected: false, title: "Gutters" },
          { path: "/utilities/helpers", type: "link", active: false, selected: false, title: "Helpers" },
          { path: "/utilities/position", type: "link", active: false, selected: false, title: "Position" },
          { path: "/utilities/additional-content", type: "link", active: false, selected: false, title: "Additional Content" },
        ],
      },
      {
        title: "Forms", icon: icon8, type: "sub", active: false, selected: false,
        children: [
          {
            title: "Form Elements", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/forms/form-elements/inputs", type: "link", active: false, selected: false, title: "Inputs" },
              { path: "/forms/form-elements/checks-radios", type: "link", active: false, selected: false, title: "checks & Radios" },
              { path: "/forms/form-elements/input-groups", type: "link", active: false, selected: false, title: "Input Groups" },
              { path: "/forms/form-elements/form-select", type: "link", active: false, selected: false, title: "Form select" },
              { path: "/forms/form-elements/range-slider", type: "link", active: false, selected: false, title: "Range Slider" },
              { path: "/forms/form-elements/input-masks", type: "link", active: false, selected: false, title: "Input Masks" },
              { path: "/forms/form-elements/file-uploads", type: "link", active: false, selected: false, title: "File Uploads" },
              { path: "/forms/form-elements/date-time-picker", type: "link", active: false, selected: false, title: "Date,Time Picker" },
              { path: "/forms/form-elements/color-pickers", type: "link", active: false, selected: false, title: "Color Pickers" },
            ],
          },
          { path: "/forms/floating-labels", type: "link", active: false, selected: false, title: "Floating Labels" },
          { path: "/forms/form-layouts", type: "link", active: false, selected: false, title: "Form Layouts" },
          {
            title: "Form Editors", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/forms/form-editors/quill-editor", type: "link", active: false, selected: false, title: "Quill Editors" },
            ],
          },
          { path: "/forms/validation", type: "link", active: false, selected: false, title: "Validation" },
          { path: "/forms/select2", type: "link", active: false, selected: false, title: "Select2" },
        ],
      },
      {
        title: "Advanced Ui", icon: icon9, type: "sub", active: false, selected: false,
        children: [
          { path: "/advanced-ui/accordions-collapse", type: "link", active: false, selected: false, title: "Accordions & collapse" },
          { path: "/advanced-ui/carousel", type: "link", active: false, selected: false, title: "Carousel" },
          { path: "/advanced-ui/draggable-cards", type: "link", active: false, selected: false, title: "Draggable & Cards" },
          { path: "/advanced-ui/modals-closes", type: "link", active: false, selected: false, title: "Modals & Closes" },
          { path: "/advanced-ui/navbar", type: "link", active: false, selected: false, title: "Navbar" },
          { path: "/advanced-ui/offcanvas", type: "link", active: false, selected: false, title: "Offcanvas" },
          { path: "/advanced-ui/placeholders", type: "link", active: false, selected: false, title: "Placeholders" },
          { path: "/advanced-ui/ratings", type: "link", active: false, selected: false, title: "Ratings" },
          { path: "/advanced-ui/swiper", type: "link", active: false, selected: false, title: "Swiper JS" },
        ],
      },
      { path: "/widgets", title: "Widgets", icon: icon10, badgetxt: badge3, type: "link", active: false, selected: false },
    
  {
    menutitle: "web apps",
  },
      {
        title: "Apps", icon: icon11, type: "sub", badgetxt: badge1, active: false, selected: false,
        children: [
          { path: "/apps/full-calendar", type: "link", active: false, selected: false, title: "Full Calendar" },
          { path: "/apps/gallery", type: "link", active: false, selected: false, title: "Gallery" },
          { path: "/apps/sweet-alerts", type: "link", active: false, selected: false, title: "Sweet Alerts" },
          {
            title: "Projects", type: "sub", badgetxt: badge1, menusub: true, active: false, selected: false,
            children: [
              { path: "/apps/projects/project-list", type: "link", active: false, selected: false, title: "Projects List" },
              { path: "/apps/projects/project-overview", type: "link", active: false, selected: false, title: "Project Overview" },
              { path: "/apps/projects/create-project", type: "link", active: false, selected: false, title: "Create Project" },
            ],
          },
          {
            title: "Jobs", type: "sub", menusub: true, badgetxt: badge1, active: false, selected: false,
            children: [
              { path: "/apps/jobs/job-details", type: "link", active: false, selected: false, title: "Job Details" },
              { path: "/apps/jobs/search-company", type: "link", active: false, selected: false, title: "Search Company" },
              { path: "/apps/jobs/search-jobs", type: "link", active: false, selected: false, title: "Search Jobs" },
              { path: "/apps/jobs/job-post", type: "link", active: false, selected: false, title: " Job Post" },
              { path: "/apps/jobs/jobs-list", type: "link", active: false, selected: false, title: " Jobs List" },
              { path: "/apps/jobs/search-candidate", type: "link", active: false, selected: false, title: " Search Candidate", },
              { path: "/apps/jobs/candidate-details", type: "link", active: false, selected: false, title: "Candidate details" },
            ],
          },
          {
            title: "NFT", type: "sub", menusub: true, badgetxt: badge1, active: false, selected: false,
            children: [
              { path: "/apps/nft/market-place", type: "link", active: false, selected: false, title: "Market Place" },
              { path: "/apps/nft/nft-details", type: "link", active: false, selected: false, title: "NFT Details" },
              { path: "/apps/nft/create-nft", type: "link", active: false, selected: false, title: "Create NFT" },
              { path: "/apps/nft/wallet-integration", type: "link", active: false, selected: false, title: "Wallet Integration" },
              { path: "/apps/nft/live-auction", type: "link", active: false, selected: false, title: "Live Auction" },
            ],
          },
          {
            title: "CRM", type: "sub", menusub: true, badgetxt: badge1, active: false, selected: false,
            children: [
              { path: "/apps/crm/contacts", type: "link", active: false, selected: false, title: "Contacts" },
              { path: "/apps/crm/companies", type: "link", active: false, selected: false, title: "Companies" },
              { path: "/apps/crm/deals", type: "link", active: false, selected: false, title: "Deals" },
              { path: "/apps/crm/leads", type: "link", active: false, selected: false, title: " Leads" },
            ],
          },
          {
            title: "Crypto", type: "sub", badgetxt: badge1, menusub: true, active: false, selected: false,
            children: [
              { path: "/apps/crypto/transactions", type: "link", active: false, selected: false, title: "Transactions" },
              { path: "/apps/crypto/currency-exchanges", type: "link", active: false, selected: false, title: "Currency Exchanges" },
              { path: "/apps/crypto/buy-sell", type: "link", active: false, selected: false, title: "Buy&Sell" },
              { path: "/apps/crypto/market-cap", type: "link", active: false, selected: false, title: " Market Cap" },
              { path: "/apps/crypto/wallet", type: "link", active: false, selected: false, title: "Wallet" },
            ],
          },
        ],
      },
      {
        title: "Nested Menu", icon: icon16, type: "sub",
        children: [
          { path: "/", type: "empty", active: false, selected: false, title: "Nested-1" },
          {
            title: "Nested-2", type: "sub", active: false, selected: false,
            children: [
              { path: "#!", type: "empty", active: false, selected: false, title: "Nested-2-1" },
              { path: "#", type: "empty", active: false, selected: false, title: "Nested-2-2" },
              
            ],
          },
        ],
      },
  {
    menutitle: "TABLES & CHARTS",
  },
      {
        title: "Tables", icon: icon12, type: "sub", menutitle: "", badgetxt: badge4, active: false, selected: false,
        children: [
          { path: "/tables/tables", type: "link", active: false, selected: false, title: "Tables" },
          { path: "/tables/gridjs-tables", type: "link", active: false, selected: false, title: "Grid JS Tables" },
          { path: "/tables/data-tables", type: "link", active: false, selected: false, title: "Data Tables" },
        ],
      },
      {
        title: "Charts", icon: icon13, type: "sub",
        children: [
          {
            title: "Apex Charts", type: "sub", menusub: true, active: false, selected: false,
            children: [
              { path: "/charts/apex-charts/line-charts", type: "link", active: false, selected: false, title: "Line Charts" },
              { path: "/charts/apex-charts/area-charts", type: "link", active: false, selected: false, title: "Area Charts " },
              { path: "/charts/apex-charts/column-charts", type: "link", active: false, selected: false, title: "Column Charts " },
              { path: "/charts/apex-charts/bar-charts", type: "link", active: false, selected: false, title: "Bar Charts" },
              { path: "/charts/apex-charts/mixed-charts", type: "link", active: false, selected: false, title: "Mixed Charts" },
              { path: "/charts/apex-charts/range-area-charts", type: "link", active: false, selected: false, title: "Range Area Charts" },
              { path: "/charts/apex-charts/timeline-charts", type: "link", active: false, selected: false, title: "Timeline Charts" },
              { path: "/charts/apex-charts/candlestick-charts", type: "link", active: false, selected: false, title: "CandleStick Charts" },
              { path: "/charts/apex-charts/boxplot-charts", type: "link", active: false, selected: false, title: "Boxplot Charts" },
              { path: "/charts/apex-charts/bubble-charts", type: "link", active: false, selected: false, title: "Bubble Charts" },
              { path: "/charts/apex-charts/scatter-charts", type: "link", active: false, selected: false, title: "Scatter Charts" },
              { path: "/charts/apex-charts/heatmap-charts", type: "link", active: false, selected: false, title: "Heatmap Charts" },
              { path: "/charts/apex-charts/treemap-charts", type: "link", active: false, selected: false, title: "Treemap Charts" },
              { path: "/charts/apex-charts/pie-charts", type: "link", active: false, selected: false, title: "Pie Charts" },
              { path: "/charts/apex-charts/radialbar-charts", type: "link", active: false, selected: false, title: "Radialbar Charts" },
              { path: "/charts/apex-charts/radar-charts", type: "link", active: false, selected: false, title: "Radar Charts" },
              { path: "/charts/apex-charts/polararea-charts", type: "link", active: false, selected: false, title: "Polararea Charts" },
            ],
          },
          { path: "/charts/chartjs-charts", type: "link", active: false, selected: false, title: "ChartJS Charts" },
          { path: "/charts/echart-charts", type: "link", active: false, selected: false, title: "Echart Charts" },
        ],
      },
    
  {
    menutitle: "MAPS & ICONS",
  },
      {
        title: "Maps", icon: icon14, type: "sub", background: "hor-rightangle", active: false, selected: false,
        children: [
          { path: "/maps/leaflet-maps", type: "link", active: false, selected: false, title: "Leaflet Maps" },
        ],
      },
      { path: "/icons", icon: icon15, type: "link", active: false, selected: false, title: "Icons" },
  
];
export default MENUITEMS;
