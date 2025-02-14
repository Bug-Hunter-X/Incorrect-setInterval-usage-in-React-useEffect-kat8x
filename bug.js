```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function should
    // be wrapped in a function to prevent the value of count
    // from always being the last value when the effect runs.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will always update to the last count value
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```