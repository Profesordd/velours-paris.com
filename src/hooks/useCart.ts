"use client";

import { useState, useEffect, useCallback } from "react";
import { CartItem } from "@/lib/types";

const CART_KEY = "velours_cart";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const persist = useCallback((next: CartItem[]) => {
    setItems(next);
    saveCart(next);
  }, []);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">) => {
      setItems((prev) => {
        const existing = prev.find(
          (i) => i.productSlug === item.productSlug && i.size === item.size
        );
        const next = existing
          ? prev.map((i) =>
              i.productSlug === item.productSlug && i.size === item.size
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          : [...prev, { ...item, quantity: 1 }];
        saveCart(next);
        return next;
      });
    },
    []
  );

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((prev) => {
      const next = prev.filter(
        (i) => !(i.productSlug === slug && i.size === size)
      );
      saveCart(next);
      return next;
    });
  }, []);

  const updateQuantity = useCallback(
    (slug: string, size: string, quantity: number) => {
      if (quantity < 1) return;
      setItems((prev) => {
        const next = prev.map((i) =>
          i.productSlug === slug && i.size === size ? { ...i, quantity } : i
        );
        saveCart(next);
        return next;
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    persist([]);
  }, [persist]);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, clearCart, total, count };
}
