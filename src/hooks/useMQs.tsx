import React, { useLayoutEffect, useState } from 'react';

const useMQs = (): readonly [boolean, boolean, boolean, boolean, boolean, boolean] => {
  const [isXS, setIsXS] = useState(true);
  const [isSM, setIsSM] = useState(false);
  const [isMD, setIsMD] = useState(false);
  const [isLG, setIsLG] = useState(false);
  const [isXL, setIsXL] = useState(false);
  const [isXXL, setIsXXL] = useState(false);

  useLayoutEffect(() => {
    const mqXS: MediaQueryList = window.matchMedia('(max-width: 575px)');
    const mqSM: MediaQueryList = window.matchMedia('(min-width: 576px) and (max-width: 767px)');
    const mqMD: MediaQueryList = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    const mqLG: MediaQueryList = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
    const mqXL: MediaQueryList = window.matchMedia('(min-width: 1200px) and (max-width: 1399px)');
    const mqXXL: MediaQueryList = window.matchMedia('(min-width: 1400px)');

    function mqCBXS(event: MediaQueryListEvent) {
      setIsXS(event.matches);
    }

    function mqCBSM(event: MediaQueryListEvent) {
      setIsSM(event.matches);
    }

    function mqCBMD(event: MediaQueryListEvent) {
      setIsMD(event.matches);
    }

    function mqCBLG(event: MediaQueryListEvent) {
      setIsLG(event.matches);
    }

    function mqCBXL(event: MediaQueryListEvent) {
      setIsXL(event.matches);
    }

    function mqCBXXL(event: MediaQueryListEvent) {
      setIsXXL(event.matches);
    }

    mqXS.addListener(mqCBXS);
    mqSM.addListener(mqCBSM);
    mqMD.addListener(mqCBMD);
    mqLG.addListener(mqCBLG);
    mqXL.addListener(mqCBXL);
    mqXXL.addListener(mqCBXXL);

    // call manually once on page load
    setIsXS(mqXS.matches);
    setIsXS(mqSM.matches);
    setIsSM(mqMD.matches);
    setIsMD(mqLG.matches);
    setIsLG(mqXL.matches);
    setIsXL(mqXXL.matches);

    return () => {
      mqXS.removeListener(mqCBXS);
      mqSM.removeListener(mqCBSM);
      mqMD.removeListener(mqCBMD);
      mqLG.removeListener(mqCBLG);
      mqXL.removeListener(mqCBXL);
      mqXXL.removeListener(mqCBXXL);
    };
  }, []);

  return [isXS, isSM, isMD, isLG, isXL, isXXL] as const;
};

export default useMQs;
