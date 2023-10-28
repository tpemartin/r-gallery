# Modulization of Components

![Gallery card](../img/gallery-card.png)

## 1. Decompose the UI into components

- Start from big components and break them down into smaller components.

[Gallery Card Decomposition](https://www.figma.com/file/79Qn6m4sEy7CE8Z30OS80h/lecture-notes?type=design&node-id=103%3A6&mode=design&t=gTnbd0KEev1xv9bU-1)

- All the component names that you come up with should be in some `.jsx` files -- no matter in one file or scatter into multiple files. These `.jsx` files are your modules.


## 2. Structure your modules

### 2.1. Module folder structure

- The tree structure should be based on the hierarchy of the components.
  
***Example:***

- `<GalleryCard />` uses `<GalleryCardTitle />`, `<GalleryCardVideo />`, `<GalleryCardDescription />`, `<GalleryCardAction/>`
- `<GalleryCardTitle/>` uses `<GroupNumber />`, `<Title />`, `<Members />`
- `<GalleryCardVideo />` uses `<Language />`, `<VideoEmbed />`


Rules:

 1. Each component should be situated in `/{component-name}/index.jsx`.
 2. If a component is used by only one component, it should be in the same folder as the component that uses it.

So 

- `<GallerayCard/>` should be in `GalleryCard/index.jsx`
  - `<GalleryCardTitle />` should be in `GalleryCardTitle/index.jsx`, and that path should be in `GalleryCard/` folder. In other words, `<GalleryCardTitle />` folder should be in `GalleryCard/GalleryCardTitle/index.jsx`.
  - `<GalleryCardVideo />` in `GalleryCard/GalleryCardVideo/index.jsx`
  - `<GalleryCardDescription />` in `GalleryCard/GalleryCardDescription/index.jsx`
  - `<GalleryCardAction/>` in `GalleryCard/GalleryCardAction/index.jsx`

Structure tree:
    
    ```
    GalleryCard/
    ├── GalleryCardAction/
    │   └── index.jsx
    ├── GalleryCardDescription/
    │   └── index.jsx
    ├── GalleryCardTitle/
    │   └── index.jsx
    ├── GalleryCardVideo/
    │   └── index.jsx
    └── index.jsx
    ```

### 2.2 Export Component from `index.jsx`

- Each `index.jsx` must has its 
  - End folder name as one of the component function name. 
  - The previous function must have the prefix: `export` or `export default`.


`GalleryCard/index.jsx`:   
```jsx
export default function GalleryCard(){
  return (
    <></>
  )
}
```

`GalleryCard/GalleryCardTitle/index.jsx`:   
```jsx
export default function GalleryCardTitle(){
  return (
    <></>
  )
}
```

### 2.3 Import Components

If an `index.jsx` file location has folders, that `index.jsx` must import the components from the `index.jsx` file of each folders

`GalleryCard/index.jsx` location has `GalleryCardTitle`, `GalleryCardVideo`, `GalleryCardDescription`, `GalleryCardAction` folders, so it must import `GalleryCardTitle`, `GalleryCardVideo`, `GalleryCardDescription`, `GalleryCardAction` from the `index.jsx` file of each folders.

`GalleryCard/index.jsx`:   
```jsx
import GalleryCardTitle from './GalleryCardTitle'
import GalleryCardVideo from './GalleryCardVideo'
import GalleryCardDescription from './GalleryCardDescription'
import GalleryCardAction from './GalleryCardAction'

export default function GalleryCard(){
  return (
    <></>
  )
}
```

> `import ... from` is for `export default ...` setup. If you use `export ...`, you must use `import { ... } from` instead.
>

### 2.4 Bottom level components as helpers 

If components are the bottom level components, they can be helper component functions siting in the same file as the component that uses them.

- `<GalleryCardTitle/>` uses `<GroupNumber />`, `<Title />`, `<Members />`
- The used components are not used by any other components, so they can be helper functions in the same file as `<GalleryCardTitle/>`.


Following above rules to structure your module files, you can easily see which components are parent components and which are children components.

![](../img/GalleryCard%20Module.png)

## 3. Bottom up development

Always start from the bottom level components and work your way up to the top level components.