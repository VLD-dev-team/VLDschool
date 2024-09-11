"use client";

import { Session } from "next-auth";
import Stripe from "stripe";
import ProductInfo from "./productInfo";
import { useState } from "react";
import AuthCheck from "./AuthCheck";
import VLDplusOption from "./VLDplusOption";

export default function BuyPageClient({product, session, productOptionVLDplus}: {product: Stripe.Product, session: Session | null, productOptionVLDplus: Stripe.Product | null}) {

    const [isVLDplusSelected, selectVLDplus] = useState(false);

    return (
        <div className="md:flex gap-5 py-10">
            <div className="basis-1/3">
                <ProductInfo product={product} vldplusoption={productOptionVLDplus} isVLDplusSelected={isVLDplusSelected}></ProductInfo>
                <p className="mt-5 text-sm">Votre formation sera disponible immédiatement après votre achat. Veuillez compléter les étapes et choisir vos options pour accéder à votre achat.</p>
                <p className="text-sm text-[var(--neutral-dim)] hidden mt-5 md:block">Déclaration de confidentialité - Condition d'utilisation - Politique de remboursement</p>
            </div>
            <div className="basis-2/3 flex flex-col gap-5 mt-5 md:mt-0">
                <AuthCheck productID={product.id} session={session}></AuthCheck>
                <VLDplusOption enabled={(session) ? true : false} productOptionVLDplus={productOptionVLDplus} isVLDplusSelected={isVLDplusSelected} selectVLDplus={selectVLDplus}></VLDplusOption>
            </div>
        </div>
    )
}