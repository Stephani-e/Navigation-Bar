# React NavBar Component

A responsive and animated navigation bar built with React. This component includes a mobile toggle menu, FontAwesome icons, and a styled Sign-Up button.

## 🧩 Features

- 📱 Responsive design (desktop & mobile)
- 🍔 Hamburger menu icon for mobile toggle
- 💡 FontAwesome icons integration (bars, times, React logo)
- 💻 Custom navigation menu items
- 🎨 Reusable `Button` component

## 🛠️ Technologies Used

- React (class components)
- FontAwesome (solid and brand icons)
- CSS (custom styling with `NavBar.css`)
- Component-based architecture

## 🧱 Project Structure

src/
│
├── components/
│ ├── NavBar/
│ │ ├── NavBar.jsx
│ │ ├── NavBar.css
│ │ └── MenuItems.js
│ └── Button.jsx
│
└── App.jsx

## 🧪 Sample Menu Item Structure (`MenuItems.js`)

```js
export const MenuItems = [
  {
    title: "Home",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "About",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Services",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Contact",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Products",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Sign Up",
    url: "#",
    cName: "nav-links-mobile"
  }
];

