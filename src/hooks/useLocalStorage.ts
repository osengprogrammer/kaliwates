import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Check if window is defined (client-side)
  const isClient = typeof window !== 'undefined';

  const [value, setValue] = useState<T>(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  return [value, setValue] as const;
}
