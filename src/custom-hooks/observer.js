import { useEffect, useState } from 'react';

const useObserver = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      });
    });

    const current = targetRef.current;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [isVisible, targetRef]);

  return [isVisible];
};

export default useObserver;
