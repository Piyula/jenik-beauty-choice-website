# JeniK Beauty Choice

A responsive, single-page beauty salon website for JeniK Beauty Choice in Jaffna, Sri Lanka. The site introduces the business, highlights beauty services, presents an image gallery, and lets visitors prepare an appointment enquiry through WhatsApp.

**Live website:** [jenik-beauty-choice.netlify.app](https://jenik-beauty-choice.netlify.app/)

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Mobile navigation with accessible expanded-state labels
- Home, about, services, gallery, and contact sections
- Service enquiry links that preselect a service in the contact form
- WhatsApp enquiry form with name, service, preferred date, and message fields
- Contact details, social links, custom logo, and favicon
- Reduced-motion support and semantic HTML landmarks

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: DM Sans and Playfair Display
- Unsplash-hosted sample photography

No package installation or build step is required.

## Project structure

| File | Description |
| --- | --- |
| `index.html` | Page content, metadata, navigation, forms, and image references |
| `styles.css` | Visual styles, responsive layouts, and reduced-motion preferences |
| `script.js` | Mobile menu, service selection, current year, and WhatsApp form behavior |
| `jenik-logo.svg` | Website logo |
| `jenik-favicon.svg` | Browser favicon |

## Run locally

Open `index.html` in a browser, or start a local static server from the project directory:

```sh
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Configuration and content checks

Before using this site as the business's official website, confirm the following with JeniK Beauty Choice:

1. The business name, address, phone number, and WhatsApp number.
2. The services offered, prices, opening hours, and appointment process.
3. The social media profile links and any business claims or descriptions.
4. Permission to use every photograph. Replace sample Unsplash images with approved salon photography where possible.
5. Whether privacy, accessibility, or other legal notices are required for the business.

The phone/WhatsApp number is configured in `script.js` as `WHATSAPP_NUMBER`. Use the international format with digits only, including the country code. The contact address, telephone link, social URLs, image URLs, and page copy are in `index.html`.

The enquiry form opens WhatsApp with a prefilled message; it does not send data automatically or store submissions on a server.

## Deployment

The site is deployed on Netlify: [https://jenik-beauty-choice.netlify.app/](https://jenik-beauty-choice.netlify.app/).

To deploy an updated version, publish the project directory as a static site through Netlify. No build command is needed; the project root containing `index.html` is the publish directory.

## Important note

The page currently identifies itself as a demo website, and some content is marked for verification. Confirm all business details and replace or approve sample content before presenting the site as an official source of information.
