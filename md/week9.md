# useState

## `<ActionControl>`

https://github.com/tpemartin/week9-web-app-2/blob/7d2268a529a3e18b7d65973937bf4ff446630fe7/src/r-gallery/components/GalleryCard/GalleryCardAction/index.jsx#L36


### ternary operator

In Node.js, `expression ? 10 : 20` is a ternary operator (三元運算). It's a shorthand way of writing an `if-else` statement. 

Here's how it works: If the `expression` evaluates to true, the value of the whole expression will be `10`. Otherwise, if the `expression` evaluates to false, the value will be `20`. 

For example, consider the following code snippet:

```javascript
const age = 25;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

In this case, if the `age` is greater than or equal to 18, the value of `result` will be "Adult". Otherwise, it will be "Minor". In this example, since the `age` is 25, the output will be "Adult" when you run the code.

### js object

```javascript
const actionControl = ratingOpen ? <CloseIcon /> : <GradeIcon />
```

  - jsx elements can be used in control flow.  
  - the binding object is `actionControl` which is a normal js object -- not jsx expression. 
  - Any js expression to be used in jsx must be wrapped in `{}`. That is why

    
```javascript
return (
    <>
        {actionControl}
    </>
)
```

## `<GalleryCardAction/>`

The component function: <https://github.com/tpemartin/week9-web-app-2/blob/7d2268a529a3e18b7d65973937bf4ff446630fe7/src/r-gallery/components/GalleryCard/GalleryCardAction/index.jsx#L6-L18>

```jsx
export default function GalleryCardAction({ ratingOpen = false }) {

    return (
        <>
            <Stack direction="row" spacing={2}
                sx={{ justifyContent: "space-between" }}>
                <GitHubIcon />
                <ProjectRating ratingOpen={ratingOpen} />
                <ActionControl ratingOpen={ratingOpen} />
            </Stack>
        </>
    )
}
```

  - Default `ratingOpen` state is `false`.
  - `ratingOpen` state will change only if `<ActionControl>` is clicked.

> This means that `ratingOpen` should not be an external input argument in `<GalleryCardAction/>`. It should be an internal state of `<GalleryCardAction/>` initiated as `false` through `useState()`.

### 1. useState

```jsx
const [ratingOpen, setRatingOpen] = useState(false)
```

  - [useState reference](https://react.dev/reference/react/useState#usestate)
  - `ratingOpen` is the state variable with default to `false`. 
  - To update `ratingOpen`, use `setRatingOpen(new value)`.

### 2. onClick

We need to use `onClick` to attach a click event handler that can update `ratingOpen` state properly.

```jsx
const toggleRatingOpen = () => {
        setRatingOpen(ratingOpen => !ratingOpen)
    }
```

It is similar to
```jsx
function toggleRatingOpen(){
    setRatingOpen(ratingOpen => !ratingOpen)
}
```

  - The handler is defined within the component function for it to see both `ratingOpen` and `setRatingOpen`. (scoping rule)
  - `raingOpen => !ratingOpen` is a function that takes `ratingOpen` as input and returns `!ratingOpen` as output, which is the same as `(ratingOpen) => {return !ratingOpen}`.  
  - In most cases if you know what value to update, for example, you are sure you want to update to `true`, you only need to set `const toggleRatingOpen = () => setRatingOpen(true)`. 
  
> If your state update handler needs to use your current state value, you need to pass it as a function. Otherwise, you can pass the new value directly.

### 3. Event handler

Event handler can work only if it is attached to an element that can trigger the event. In this case, we need to attach the `onClick` event handler to `<ActionControl/>`.

```jsx
function ActionControl({ ratingOpen = false, onClick }) {

    const actionControl = ratingOpen ? <CloseIcon onClick={onClick}/> : <GradeIcon onClick={onClick}/>

    return (
        <>
            {actionControl}
        </>
    )
}
```

  - `onClick` must be added to input argument, so that it can be passed to `<CloseIcon/>` and `<GradeIcon/>`.

## `<ProjectRating/>`

### onChange

`<Rating/>` component has an `onChange` event handler that can be used to update the rating value.

To know what a change event can tell you, we put a `console.log` in the event handler.

```jsx
function ProjectRating({ ratingOpen = false }) {
    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={null} max={5}
                    onChange = {(e, v)=>{
                        console.log(e) // event object
                        console.log(v) // related value if there is any
                    }}
                    />
                </Fade>
            </Box>
        </>
    )
}
```

  - if you change `value={null}` to `value={2}`, you will see the rating value is always `2` no matter what you click.  
  - when user interact with the `<Rating/>` component by clicking the number of stars they want to give, the `onChange` event handler will be triggered, which tells us what the value the user has selected.

### Use state to update rating value

```jsx
 function ProjectRating({ ratingOpen = false }) {

    const [rate, setRate] = useState(null)


    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={rate} max={5}
                    onChange = {(e, v)=>{
                        console.log(e)
                        console.log(v)
                        setRate(v)
                    }}
                    />
                </Fade>
            </Box>
        </>
    )
}
```

  - [Compare before and after](https://github.com/tpemartin/week9-web-app-2/commit/03536a98d599872ab62fb1b2b75d6e1d8fc3c1e9)