"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

// Checkout component to handle the display of the shopping cart and order summary
export default function Checkout({ open, setOpen }) {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;

  const total = cartItems
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(0);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="bg-yellow-50 flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-2xl font-medium text-gray-900">
                      Mi Carrito
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Cerrar carrito</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <CartItem cartItems={cartItems}></CartItem>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{total}$</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Costo de envío al aceptar la compra.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/placeorder"
                      className="flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-700"
                    >
                      Calcular envío
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      o{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-yellow-400 hover:text-yellow-600"
                      >
                        Ver catalogo de productos
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
