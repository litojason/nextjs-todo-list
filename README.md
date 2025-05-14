<div align='center'>
    <img alt='NextJS Todo List Logo' src='/public/logo.png' style='width:80px;height:80px;' />
</div>

# Next Js Todo List (nextjs-todo-list)

Todo web app built with Typescript, Next Js, Shadcn.

## Screenshots

Model used iPhone SE (mobile), iPad Mini (tablet), desktop.
Full screenshots in [/screenshots](./screenshots/) folder.

### Mobile (iPhone SE)

<table>
    <tr>
        <td><img src="/screenshots/mobile/1-iphone-se-login.png"></td>
        <td><img src="/screenshots/mobile/2-iphone-se-register.png"></td>
        <td><img src="/screenshots/mobile/3-iphone-se-todo-light.png"></td>
        <td><img src="/screenshots/mobile/3-iphone-se-todo-dark.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/mobile/4-iphone-se-add-todo.png"></td>
        <td><img src="/screenshots/mobile/5-iphone-se-edit-todo-light.png"></td>
        <td><img src="/screenshots/mobile/5-iphone-se-edit-todo-dark.png"></td>
        <td><img src="/screenshots/mobile/6-iphone-se-delete-todo.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/mobile/7-iphone-se-sidebar-light.png"></td>
        <td><img src="/screenshots/mobile/7-iphone-se-sidebar-dark.png"></td>
        <td><img src="/screenshots/mobile/8-iphone-se-edit-profile-light.png"></td>
        <td><img src="/screenshots/mobile/8-iphone-se-edit-profile-dark.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/mobile/9-iphone-se-logout.png"></td>
    </tr>
</table>

### Table (iPhone Mini)

<table>
    <tr>
        <td><img src="/screenshots/tablet/1-ipad-mini-login.png"></td>
        <td><img src="/screenshots/tablet/2-ipad-mini-register.png"></td>
        <td><img src="/screenshots/tablet/3-ipad-mini-todo-light-expanded.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/tablet/3-ipad-mini-todo-dark-expanded.png"></td>
        <td><img src="/screenshots/tablet/3-ipad-mini-todo-light-collapsed.png"></td>
        <td><img src="/screenshots/tablet/3-ipad-mini-todo-dark-collapsed.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/tablet/4-ipad-mini-edit-todo-light.png"></td>
        <td><img src="/screenshots/tablet/4-ipad-mini-edit-todo-dark.png"></td>
        <td><img src="/screenshots/tablet/5-ipad-mini-edit-profile-light-expanded.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/tablet/5-ipad-mini-edit-profile-dark-expanded.png"></td>
        <td><img src="/screenshots/tablet/5-ipad-mini-edit-profile-light-collapsed.png"></td>
        <td><img src="/screenshots/tablet/5-ipad-mini-edit-profile-dark-collapsed.png"></td>
    </tr>
</table>

### Desktop

<table>
    <tr>
        <td><img src="/screenshots/desktop/1-dashboard-login.png"></td>
        <td><img src="/screenshots/desktop/2-dashboard-register.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/desktop/3-dashboard-todo-light.png"></td>
        <td><img src="/screenshots/desktop/3-dashboard-todo-dark.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/desktop/4-dashboard-add-todo.png"></td>
        <td><img src="/screenshots/desktop/5-dashboard-edit-todo-light.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/desktop/5-dashboard-edit-todo-dark.png"></td>
        <td><img src="/screenshots/desktop/6-dashboard-delete-todo.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/desktop/7-dashboard-edit-profile-light.png"></td>
        <td><img src="/screenshots/desktop/7-dashboard-edit-profile-dark.png"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/desktop/8-dashboard-logout.png"></td>
    </tr>
</table>

## API Used In This Project

- Node Sequelize Todo: [node-sequelize-todo](https://github.com/litojason/node-sequelize-todo)

## Additional Dependencies

Please refer to `package.json`.

- [React Hook Form](https://react-hook-form.com/): manage forms
- [zod](https://zod.dev/): validation
- [Shadcn](https://ui.shadcn.com/): UI component library
- [Tailwind](https://tailwindcss.com/): utility-first CSS framework

## Installation

    git clone https://github.com/litojason/nextjs-todo-list.git

    cd nextjs-todo-list

    yarn

## Setup Env

Create a new file: `.env`. Please copy example below or refer to `.env.sample` file.

    NEXT_PUBLIC_API_URL=https://sample.com

## Run

```bash
# Start dev
yarn dev
```
