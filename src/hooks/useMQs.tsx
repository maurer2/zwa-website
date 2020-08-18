import React, { useLayoutEffect, useState } from 'react';

const useMQs = (): readonly [boolean] => {
  const [isXS, setIsXS] = useState(false);

  useLayoutEffect(() => {
    const mqXS: MediaQueryList = window.matchMedia('(max-width: 767px)');

    function mqCB(event: MediaQueryListEvent) {
      setIsXS(event.matches);
    }

    mqXS.addListener(mqCB);

    // call manually once on page load
    setIsXS(mqXS.matches);

    return () => {
      mqXS.removeListener(mqCB);
    };
  }, []);

  return [isXS] as const;
};

export default useMQs;
