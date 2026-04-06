"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Producto } from "@/data/productos";

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface CarritoContextType {
  items: ItemCarrito[];
  agregarProducto: (producto: Producto) => void;
  removerProducto: (productoId: string) => void;
  actualizarCantidad: (productoId: string, cantidad: number) => void;
  limpiarCarrito: () => void;
  totalItems: number;
  totalPrecio: number;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([]);

  const agregarProducto = useCallback((producto: Producto) => {
    setItems((prev) => {
      const existe = prev.find((item) => item.producto.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { producto, cantidad: 1 }];
    });
  }, []);

  const removerProducto = useCallback((productoId: string) => {
    setItems((prev) => prev.filter((item) => item.producto.id !== productoId));
  }, []);

  const actualizarCantidad = useCallback((productoId: string, cantidad: number) => {
    if (cantidad <= 0) {
      setItems((prev) => prev.filter((item) => item.producto.id !== productoId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.producto.id === productoId ? { ...item, cantidad } : item
      )
    );
  }, []);

  const limpiarCarrito = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.cantidad, 0);
  const totalPrecio = items.reduce(
    (sum, item) => sum + item.producto.precio * item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        items,
        agregarProducto,
        removerProducto,
        actualizarCantidad,
        limpiarCarrito,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  }
  return context;
}
