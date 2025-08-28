import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible, hasTriggered };
};

export const useScrollAnimationWithDelay = (
  delay: number = 0,
  options: UseScrollAnimationOptions = {}
) => {
  const { elementRef, isVisible } = useScrollAnimation(options);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return { elementRef, isVisible, shouldAnimate };
};

export const useStaggeredAnimation = (
  items: any[],
  staggerDelay: number = 100,
  options: UseScrollAnimationOptions = {}
) => {
  const { elementRef, isVisible } = useScrollAnimation(options);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  useEffect(() => {
    if (isVisible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * staggerDelay);
      });
    }
  }, [isVisible, items.length, staggerDelay]);

  return { elementRef, isVisible, animatedItems };
}; 