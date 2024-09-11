"use client"

import { Dispatch, SetStateAction } from "react"
import Stripe from "stripe"

export default function VLDplusOption({ enabled, productOptionVLDplus, isVLDplusSelected, selectVLDplus }:
    { enabled: boolean, productOptionVLDplus: Stripe.Product | null, isVLDplusSelected: boolean, selectVLDplus: Dispatch<SetStateAction<boolean>> }) {

    if (!enabled) {
        return (
            <div className="bg-[var(--surface-dim)] rounded drop-shadow-lg p-5 opacity-60 cursor-not-allowed">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
                        <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                    </svg>

                    <div className="overflow-hidden">
                        <p className="text-[var(--neutral-dim)] text-xs truncate uppercase">options supplémentaires</p>
                        <p className="text-[var(--neutral)] truncate">Séléctionnez des options supplémentaires</p>
                    </div>
                </div>
            </div>
        )
    }


    if (productOptionVLDplus == null) {
        return (
            <div className="bg-[var(--surface-dim)] rounded drop-shadow-lg p-5">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--valid)" className="size-6 shrink-0">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>

                    <div className="overflow-hidden">
                        <p className="text-[var(--neutral-dim)] text-xs truncate uppercase">options supplémentaires</p>
                        <p className="text-[var(--neutral)]">Aucune option n'est disponible à l'achat pour ce produit</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[var(--surface-dim)] rounded drop-shadow-lg p-5">
            <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
                    <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                </svg>

                <div className="overflow-hidden">
                    <p className="text-[var(--neutral-dim)] text-xs truncate uppercase">options supplémentaires</p>
                    <p className="text-[var(--neutral)] truncate">Séléctionnez des options supplémentaires</p>
                </div>
            </div>
            <div className={"flex cursor-pointer border mt-5 p-5 rounded justify-between items-center transition-all " + ((isVLDplusSelected) ? "" : "border-[var(--primary)] bg-[var(--primary)]")} onClick={() => selectVLDplus(false)}>
                <div>
                    <p>Sans option</p>
                    <p className="text-sm">La formule de base avec les cours écrits, les vidéos, les exercices et les projets.</p>
                </div>
                <div className="text-xl">0€</div>
            </div>
            <div className={"flex cursor-pointer border mt-5 p-5 rounded justify-between items-center transition-all " + ((isVLDplusSelected) ? "border-[var(--primary)] bg-[var(--primary)]" : "")} onClick={() => selectVLDplus(true)}>
                <div>
                    <p>{productOptionVLDplus.name}</p>
                    <p className="text-sm">La formule de base + {productOptionVLDplus.description}</p>
                </div>
                <div className="text-xl">+{productOptionVLDplus.default_price?.toString()}€</div>
            </div>
        </div>
    )
}