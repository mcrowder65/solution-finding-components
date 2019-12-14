OK, welcome back!

Let's implement this test and write our description first

```js
test("renders a blue circle and a red circle but NOT a purple circle with a timeout", async () => {})
```

Now let's render App with a timeout!

```js
render(<App timeout={30} />)
```

Now let's grab the methods we need, findByLabelText and queryByLabelText

Since we first have a timeout of 30 milliseconds, let's ensure that our red and blue circles are not there!

```js
expect(queryByLabelText("red circle")).toBeNull()
expect(queryByLabelText("blue circle")).toBeNull()
```

Now that we have that, we can see in the terminal our test is passing, let's add the actual findByLabelText lookups!

```js
expect(await findByLabelText("red circle")).toBeInTheDocument()
expect(await findByLabelText("blue circle")).toBeInTheDocument()
```

And lastly, let's add our check that the purple circle is not there!


```js
expect(queryByLabelText("purple circle")).toBeNull()
```


Great, now we have finished this exercise! Good job! 
