## Flash Cards

[![Netlify Status](https://api.netlify.com/api/v1/badges/4efe39d6-4646-4355-853e-3fa2ecd10c24/deploy-status)](https://redux-flash-cards.netlify.com)


### Create

Create new flashcards by clicking the + icon in the bottom nav, filling out the front and back of the card & clicking the check mark. Validation & error feedback is not yet implemented.

### Read

View flashcards by clicking the back and forward arrows in the bottom nav. See the back of a Flash Card by clicking anywhere on the card.

### Update

Update is not yet implemented.

### Delete

Delete any flash card by clicking the trash icon.

License: Attribution-NonCommercial-ShareAlike 4.0 International
https://creativecommons.org/licenses/by-nc-sa/4.0/

# Making Redux Easy With Toolkit

Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development and is intended to be the standard way to write Redux logic.

## What Are The Core Benefits Of Using Redux Toolkit Over Vanilla Redux?

- Majorly Reduces Boilerplate With Powerful Helper Functions
    - **createSlice() -** Eliminates the need for a constants/types file & action creators by accepting an initial state, an object full of reducer functions, a "slice name", then **automatically generating action creators and action types.**
    - **configureStore() -** Eliminates the need for a separate "root-reducer" file by allowing you to pass in each slice of your state as an object and running combineReducers() automatically for you.

        configureStore also sets up DevTools and popular middleware automatically (see next drop down for more info) and calls applyMiddleware() and compose() for you

- Includes Popular Middleware & DevTools With No Setup Required

    Prevents common mistakes such as accidentally mutating your state or putting non-serializable data into state *(functions, promises, etc. which should be handled separate from the state logic.)* by including **redux-immutable-state-invariant**, **serializable-state-invariant-middleware**, and allows you to manage side-effects with **redux-thunk**

    Comes with a getDefaultMiddleware() function if you'd like to add your own middleware but still use the provided defaults.

- Makes Code More Readable, Testable & Easier to Reason About

    Lets you write easily readable, mutative code, and replaces verbose switch/case statements with readable functions such as 

    `newPost: (state, action) ⇒ {
        const newPost = action.payload
        state.userPosts.push(newPost)
    }` 
    without actually mutating the state & causing bugs by automatically processing your code with the I**mmer** library.

## Beyond Toolkit: Simplifying Redux With React Hooks

- **Before hooks**

    The most common way of accessing the store and dispatch functions in React was to use the **connect()()** function, supply it with a manually-created **mapStateToProps** & **mapDispatchToProps**, and then pass a huge assortment of functions & state variables directly in the component props.

Now that we have hooks we can simply import **useDispatch()** & **useSelector** from react-redux and access our state & dispatch directly inside our component like 

`const dispatch = useDispatch()`

`dispatch(myAction(myPayload))`

and

`const { myStateVariable } = useSelector(state ⇒ state.mySlice)`

