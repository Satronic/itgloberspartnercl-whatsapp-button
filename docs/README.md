📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Whatsapp Button

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The Whatsapp Button is a component that allows the user to access the store's whatsapp chat and thus receive personalized attention.

![Media Placeholder](https://res.cloudinary.com/satronic/image/upload/v1671748345/render-app_cj74tb.jpg)

## Configuration 

1. Import the whatsapp-button's app to your theme's dependencies in the `manifest.json`, for example:

```json
  dependencies: {
    "{vendor}.whatsapp-button": "0.x"
  }
```

2. Add the `whatsapp-button` block to the Footer template. For example:

```json
 "footer-layout.desktop": { 
    "children": [
      "flex-layout.row#footer__newsletter",
      "whatsapp-button"
    ]
  },
  "whatsapp-button": {
    "props": {
      "phone": "+573219342701",
    }
  }
```

### The whatsapp-button props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `logo`        | `String`       | Define the url of the image that will be used for the whatsapp button          | `undefined`              |
| `phone`  | `String`        | Defines the WhatsApp number that the store uses to provide customer service                                                                                        | `+573208698580` |
| `message` | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat                                                                                      | `Hello, welcome. How can we help you?` |
| `width` | `Number`        | Define the width of the button                                                                                      | `80` |
| `height` | `Number`        | Define the height of the button                                                                                    | `80` |

## Customization

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->


