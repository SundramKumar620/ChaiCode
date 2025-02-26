# JS Projects and behind the scene
Summary:
1. **Proxy**: Allows you to customize how objects or arrays behave when you access or modify them.
2. **Negative Indexing**: Normally not possible with arrays, but you can use a `Proxy` to access elements from the end (e.g., `arr[-1]` for the last element).
3. **`get` Trap**: Customizes how values are retrieved (like using negative indices).
4. **`set` Trap**: Customizes how values are set (also works with negative indices).
5. **Example**: In the code, `newArr[-1]` gives the last element of the array, and `newArr[-1] = 22` sets the last element to 22.
## Earser Link :- https://app.eraser.io/workspace/5fIzIIm6bQSdotX21BTw
