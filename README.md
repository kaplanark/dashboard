# Vue 3 Dahboard UI Kit

It is a Dashborad ui kit project made with Vue.js composition api. It is a free and open source project. You can use it for your personal and commercial projects.

<a href="https://appleteam.netlify.app/"> LIVE </a>

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Screenshot

<img src="./screenshot/screenshot.gif" />

## Alert component props

|   Name   |   Type    |   Default   |                                                      Description                                                       |
| :------: | :-------: | :---------: | :--------------------------------------------------------------------------------------------------------------------: |
|   type   | `String`  | _'default'_ |   <sub style="color: #999">It takes values ​​such as _success_, _error_, _info_, _warning_, _default_, _message_.</sub>   |
| message  | `String`  | _undefined_ |              <sub style="color: #999">It takes the message to be displayed in the alert component.</sub>               |
| closable | `Boolean` |   _false_   | <sub style="color: #999">It takes the value of true or false. If it is true, the alert component will be closed.</sub> |

## Avatar component props

|  Name   |   Type   |   Default   |                                           Description                                           |
| :-----: | :------: | :---------: | :---------------------------------------------------------------------------------------------: |
|  image  | `String` | _undefined_ | <sub style="color: #999">It takes the image path to be displayed in the avatar component.</sub> |
|  size   | `Number` |    _32_     |            <sub style="color: #999">It takes the size of the avatar component.</sub>            |
| classes | `String` | _undefined_ |    <sub style="color: #999">Retrieves the class names to add to the avatar component.</sub>     |

## Badge component props

|  Name   |   Type    |   Default   |                                                      Description                                                       |
| :-----: | :-------: | :---------: | :--------------------------------------------------------------------------------------------------------------------: |
|  icon   | `String`  | _undefined_ |             <sub style="color: #999">It takes the icon name to be displayed in the badge component.</sub>              |
| active  | `Boolean` |   _false_   | <sub style="color: #999">It takes the value of true or false. If it is true, the badge component will be active.</sub> |
| classes | `String`  | _undefined_ |                <sub style="color: #999">Retrieves the class names to add to the badge component.</sub>                 |

## Button component props

|  Name   |   Type    |   Default   |                                                              Description                                                               |
| :-----: | :-------: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------: |
|  name   | `String`  | _undefined_ |                       <sub style="color: #999">It takes the name to be displayed in the button component.</sub>                        |
| variant | `Boolean` | _'primary'_ | <sub style="color: #999">It takes values ​​such as primary, secondary, success, error, info, danger, warning, light, dark, link.</sub> |
| classes | `String`  | _undefined_ |                        <sub style="color: #999">Retrieves the class names to add to the button component.</sub>                        |

## Card component props

|   Name   |   Type    |   Default   |                                                       Description                                                       |
| :------: | :-------: | :---------: | :---------------------------------------------------------------------------------------------------------------------: |
| bordered | `Boolean` |   _false_   | <sub style="color: #999">It takes the value of true or false. If it is true, the card component will be bordered.</sub> |
| classes  | `String`  | _undefined_ |                 <sub style="color: #999">Retrieves the class names to add to the card component.</sub>                  |

## Divider component props

|      Name       |   Type   |   Default   |                                                                    Description                                                                     |
| :-------------: | :------: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------: |
| title-placement | `String` | _'center'_  |        <sub style="color: #999">It takes values ​​such as left, right, center. If it is true, the divider component will be bordered.</sub>        |
|      title      | `String` | _undefined_ | <sub style="color: #999">It takes the title to be displayed in the divider component. If it is true, the divider component will be bordered.</sub> |

## Dropdown component props

| Name  |   Type   |   Default   |                                              Description                                              |
| :---: | :------: | :---------: | :---------------------------------------------------------------------------------------------------: |
| value | `String` | _undefined_ |     <sub style="color: #999">It takes the value to be displayed in the dropdown component.</sub>      |
| icon  | `String` | _undefined_ |   <sub style="color: #999">It takes the icon name to be displayed in the dropdown component.</sub>    |
| items | `Array`  |    _[]_     | <sub style="color: #999">It takes the array of items to be displayed in the dropdown component.</sub> |

# Global icon component

Global icon component, src/assest/icons/icons.js file is used. You can add your own icons to this file. You can use the icons in the components by using the name of the icon. For example, you can use the icon named `home` in the components by using the name of the icon.
`<icon icon="home" size="32" />`

## Icon component props

| Name |   Type   |   Default   |                                         Description                                          |
| :--: | :------: | :---------: | :------------------------------------------------------------------------------------------: |
| icon | `String` | _undefined_ | <sub style="color: #999">It takes the icon name to be displayed in the icon component.</sub> |
| size | `Number` |    _32_     |           <sub style="color: #999">It takes the size of the icon component.</sub>            |
