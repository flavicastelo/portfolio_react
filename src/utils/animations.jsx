import { useEffect, useState, useRef } from "react";

function useIntersectionObserver() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Ajuste esse valor conforme necessário
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Limpeza ao desmontar
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return { sectionRef, isVisible };
}

export default useIntersectionObserver;
