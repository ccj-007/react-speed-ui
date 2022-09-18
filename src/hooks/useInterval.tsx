import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<any>()
  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  //依赖数组中的delay用来控制变化的间隔
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