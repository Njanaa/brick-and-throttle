'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { shopifyClient } from '@/lib/shopify';

type CartContextType = {
  cart: any; // The Shopify checkout object
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity: number) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  checkoutUrl: string | null;
  isLoading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize or fetch existing checkout
    const initializeCheckout = async () => {
      try {
        const checkoutId = localStorage.getItem('shopify_checkout_id');
        if (checkoutId) {
          const existingCheckout = await shopifyClient.checkout.fetch(checkoutId);
          if (existingCheckout && !existingCheckout.completedAt) {
            setCart(existingCheckout);
            return;
          }
        }
        
        // Create new checkout
        const newCheckout = await shopifyClient.checkout.create();
        localStorage.setItem('shopify_checkout_id', newCheckout.id as string);
        setCart(newCheckout);
      } catch (error) {
        console.error('Error initializing checkout:', error);
      }
    };
    
    initializeCheckout();
  }, []);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = async (variantId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      // Shopify Buy SDK uses raw GIDs now.
      const formattedVariantId = variantId.includes('gid://') 
        ? variantId 
        : `gid://shopify/ProductVariant/${variantId}`;

      const lineItemsToAdd = [
        {
          variantId: formattedVariantId,
          quantity
        }
      ];
      
      const newCheckout = await shopifyClient.checkout.addLineItems(cart.id, lineItemsToAdd);
      setCart(newCheckout);
      openCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
    setIsLoading(false);
  };

  const updateQuantity = async (lineItemId: string, quantity: number) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const lineItemsToUpdate = [{ id: lineItemId, quantity }];
      const newCheckout = await shopifyClient.checkout.updateLineItems(cart.id, lineItemsToUpdate);
      setCart(newCheckout);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
    setIsLoading(false);
  };

  const removeFromCart = async (lineItemId: string) => {
    if (!cart) return;
    setIsLoading(true);
    try {
      const newCheckout = await shopifyClient.checkout.removeLineItems(cart.id, [lineItemId]);
      setCart(newCheckout);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
    setIsLoading(false);
  };

  const checkoutUrl = cart?.webUrl || null;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        checkoutUrl,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
