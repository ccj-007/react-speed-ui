import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef(callback)
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export default useInterval