### React Context Approach:

1. **What is React Context?**
   - React Context is an API built into React that allows you to share data across components without manually passing props at every level.
   - It acts as a global storage space for your components, making it easier to pass down data.
2. **When to Use React Context?**
   - Use React context when you need to pass data that can be used in **any component** within your application.
   - Examples of suitable data for context include:
     - Theme data (e.g., dark or light mode)
     - User data (e.g., the currently authenticated user)
     - Location-specific data (e.g., user language or locale)
   - Place data on React context that doesn't need frequent updates, as context is not designed as a full state management system.
3. **Problem Solved by React Context: Props Drilling**
   - React context helps avoid **props drilling**, which occurs when you pass props down multiple levels to nested components that don't immediately need them.
   - With context, you can bypass using props entirely, thus eliminating the issue of props drilling.

### `use-context-selector` Package:

1. **What Is It?**
   - The `use-context-selector` package provides a solution to the performance issue associated with React context.
   - When a context value changes, all components using `useContext` re-render, even if they only need a specific part of the context.
   - `use-context-selector` aims to solve this problem by allowing you to select specific parts of the context to consume.
2. **How Does It Work?**
   - It exposes the `useContextSelector` hook, which lets you retrieve context-selected values based on a selector function.
   - Unlike plain `useContext`, it triggers re-renders only when the selected value changes.
   - The selector should return referentially equal results for the same input to optimize performance.
3. **Example Usage:**

   ```jsx
   import React, {createContext} from 'react';
   import {useContextSelector} from 'use-context-selector';

   const context = createContext(null);

   const Counter1 = () => {
     const count1 = useContextSelector(context, v => v[0].count1);
     // Other logic...
   };

   const Counter2 = () => {
     const count2 = useContextSelector(context, v => v[0].count2);
     // Other logic...
   };

   // Usage in your component tree
   // ...

   // Create context and wrap your component tree with it
   // Set values on the context provider using the `value` prop
   // Read those values within any component using `useContextSelector`
   ```

### Why Use `use-context-selector`?

- If you want granular control over which parts of the context trigger re-renders, `use-context-selector` is a powerful tool.
- It allows you to optimize performance by selecting only the relevant context data.
- Consider using it when you need fine-grained context consumption without unnecessary re-renders.
