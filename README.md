![mockup](docs/design/mockup.png)  

# Fréyja healing

The path to optimal health is closer than ever. At Fréyja healing, we believe in the bodies natural healing ability's.<br> However,
if you a suffering with a lingering ache or chronically stressed, book an appointment with any of our experienced naturopaths & begin your journey to better health.

---

## **UX** 🎨

### User stories

As a user, customer I would like to the following:

✅ successfully implemented <br>
❌ not yet implemented

- ✅ View information (prices and details) on all available services.
- ✅ View opening times & contact information.
- ✅ View information on naturopaths (practitioners).
- ✅ View privacy policy on how the users information is handled.
- ✅ Send inquires about a service.
- ✅ Book an appointment.
- ❌ Add uniques image for each available service.
- ❌ Improve SEO (Add open graph meta information).
- ❌ Receive email appointment confirmation.
- ❌ Receive email contact form confirmation.
- ❌ Setup payment processing.
- ❌ Add account page for users:
  - User can view account information
  - User can place booking via payment method
  - User can write review
- ❌ Improve security:
  - Add Cloudflare Turnstile (privacy focused captcha).
  - Protect mailto address (further research needed).
  - Add Content Security Policy (further research needed).
- ❌ Add unit testing & CI workflow (further research needed)

### Design

<details>
<summary>Color pallet</summary>

![color pallet](docs/design/color-pallet.png)

</details>

#### Icons

- I utilized the [nuxt icon](https://github.com/nuxt-modules/icon) module to generate the icons. The Icons are from Google Fonts Material Symbols

![icons](docs/design/icons.png)

#### Typography

- I chose to use default browser fonts & not to use a custom font.

#### Wireframes

Mobile

<details>
<summary>Booking (step 1)</summary>

![Booking page (step 1)](docs/design/wireframes/mobile/booking-step-1-mobile.png)

</details>

<details>
<summary>Booking page (step 2)</summary>

![Booking page (step 2)](docs/design/wireframes/mobile/booking-step-2-mobile.png)

</details>

<details>
<summary>Booking page (confirmation)</summary>

![Booking page (confirmation)](docs/design/wireframes/mobile/booking-step-confirm-mobile.png)

</details>

<details>
<summary>Home page</summary>

![Home page](docs/design/wireframes/mobile/home-mobile.png)

</details>

<details>
<summary>Contact page</summary>

![Contact page](docs/design/wireframes/mobile/contact-mobile.png)

</details>

<details>
<summary>Contact page write to us</summary>

![Contact page write to us](docs/design/wireframes/mobile/contact-mobile.png)

</details>

<details>
<summary>Privacy page</summary>

![Privacy page](docs/design/wireframes/mobile/privacy-mobile.png)

</details>

<details>
<summary>Team page</summary>

![Team page](docs/design/wireframes/mobile/team-mobile.png)

</details>

<details>
<summary>Treatment page</summary>

![Treatment page](docs/design/wireframes/mobile/treatment-mobile.png)

</details>

---

Desktop

<details>
<summary>Booking page (step 1)</summary>

![Booking page (step 1)](docs/design/wireframes/desktop/booking-step-1-desktop.png)

</details>
<details>

<summary>Booking page (step 2)</summary>

![Booking page (step 2)](docs/design/wireframes/desktop/booking-step-2-desktop.png)

</details>

<details>
<summary>Booking page (confirmation)</summary>

![Booking page (confirmation)](docs/design/wireframes/desktop/booking-confirmation-desktop.png)

</details>

<details>
<summary>Home page</summary>

![Home page](docs/design/wireframes/desktop/home-desktop.png)

</details>

<details>
<summary>Contact page</summary>

![Contact page](docs/design/wireframes/desktop/contact-desktop.png)

</details>

<details>
<summary>Contact page write to us</summary>

![Contact page write to us](docs/design/wireframes/desktop/contact-desktop.png)

</details>

<details>
<summary>Privacy page</summary>

![Privacy page](docs/design/wireframes/desktop/privacy-desktop.png)

</details>

<details>
<summary>Team page</summary>

![Team page](docs/design/wireframes/desktop/team-desktop.png)

</details>

<details>
<summary>Treatment page</summary>

![Treatment page](docs/design/wireframes/desktop/treatment-desktop.png)

</details>

---

## **Features** ✨

### 1. Book appointment

- Users can choose from any of our 6 appointments & place a booking. The user is required to enter the following:
  - Name
  - Email
  - Contact number
  - Choose a time & date
  - Submit after verifying their details are correct

### 2. View all services

- View all services with an overview of the following INFORMATION
  - Treatment Details
    - Treatment
    - Treatment duration
    - Treatment Price
  - A list of benefits of the treatment
  - Treatment brief description

### 3. Send inquiry

- Users can send inquiry about any of the services offered with the following INFORMATION
  - Name
  - Email
  - service
  - Short message

### 4. Navigation flyout menu

- Users can easily navigate to any of the available services.
- Users can easily navigate to the contact page.
- Users can easily navigate to the about us page.

---

## **Future features** 🔮 (2023)

- ❌ Add uniques image for each available service.
- ❌ Improve SEO (Add open graph meta information).
- ❌ Receive email appointment confirmation.
- ❌ Receive email contact form confirmation.
- ❌ Setup payment processing.
- ❌ Add account page for users:
  - User can view account information
  - User can place booking via payment method
  - User can write review
- ❌ Improve security:
  - Add Cloudflare Turnstile (privacy focused captcha).
  - Protect mailto address (further research needed).
  - Add Content Security Policy (further research needed).
- ❌ Add unit testing & CI workflow (further research needed)

<br>

[🔝 Back to Top](#fréyja-healing)

---

## **Technologies** ⚙️

### Web development

- ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

  - [Code editor & IntelliSense for VusJs & Tailwind CSS ](https://code.visualstudio.com) 🔗

- ![Version control](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
  - [Used as version control system](https://git-scm.com) 🔗

### Design

- ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
  - [Used for designing wireframes](https://www.figma.com) 🔗

<br>

### Front-End Technologies

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

  - Markup language used within VueJS templates.

- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - Used to style elements within pages & add transition effects.
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
  - Used to add reactivity.
  - From validation (client side)
  - Return data based on query parameters

#### Ui Library / CSS framework

- ![Tailwind css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  - [Tailwindcss](https://tailwindcss.com/docs/cursor) 🔗 (Used to enhance workflow & improve maintainability of CSS).

<br>

#### JavaScript Library

- ![VueJs](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
  - [Vue.js](https://vuejs.org) 🔗 (The Progressive JavaScript Framework)
  - Reactivity.
  - Reusable components.

<br>

### JavaScript Framework

- [NuxtJS](https://nuxtjs.org/deployments/github-pages) 🔗 (The Intuitive Vue Framework)
  - Used for server side rendering.
  - Enhanced SEO.
  - Image optimization.
  - Code optimization (minified CSS & JavaScript).
  - State management.

### Additional modules to extend NuxtJs 🔌

1. [NuxtJS Modules](https://modules.nuxtjs.org/) 🔗 (Extends NuxtJS functionality)
   - [Nuxt Icon](https://github.com/nuxt-modules/icon) 🔗 Used to generate Icons for project.
   - [Nuxt image](https://image.nuxtjs.org/) 🔗 Used to optimize images for variable screen sizes & convert to [webp](https://developers.google.com/speed/webp) image format.

<br>

2. [VueJS devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) 🔗 Used to inspect debug VueJS (performance issues & reactivity issues)

<br>

[🔝 Back to Top](#fréyja-healing)

---
