"use client";

import { Session } from "next-auth";
import Stripe from "stripe";
import ProductInfo from "./productInfo";
import { useState } from "react";
import AuthCheck from "./AuthCheck";
import VLDplusOption from "./VLDplusOption";
import { createCheckoutSession } from "../serverActions";
import Loader from "./Loader";

export default function BuyPageClient({ product, session, productOptionVLDplus }: { product: Stripe.Product, session: Session | null, productOptionVLDplus: Stripe.Product | null }) {

    const [isVLDplusSelected, selectVLDplus] = useState(false);
    const [isLoading, loading] = useState(false);

    return (
        <div className="md:flex gap-5 py-10">
            <div className="basis-1/3">
                <ProductInfo product={product} vldplusoption={productOptionVLDplus} isVLDplusSelected={isVLDplusSelected}></ProductInfo>
                <p className="mt-5 text-sm">Votre formation sera disponible immédiatement après votre achat. Veuillez compléter les étapes et choisir vos options pour accéder à votre achat.</p>
                <p className="text-sm text-[var(--neutral-dim)] hidden mt-5 md:block">Déclaration de confidentialité - Condition d'utilisation - Politique de remboursement</p>
            </div>
            <div className="basis-2/3 flex flex-col gap-5 mt-5 md:mt-0">
                <AuthCheck productID={product.id} session={session}></AuthCheck>
                <VLDplusOption loading={isLoading} enabled={(session) ? true : false} productOptionVLDplus={productOptionVLDplus} isVLDplusSelected={isVLDplusSelected} selectVLDplus={selectVLDplus}></VLDplusOption>
                <div>
                    <button disabled={isLoading || (session == null)} onClick={() => {
                        loading(true);
                        createCheckoutSession(product.id, isVLDplusSelected);
                    }} className="flex items-center gap-8 float-right rounded bg-[var(--primary)] px-5 py-4 hover:bg-[var(--primary-hover)] transition-all disabled:opacity-75 disabled:hover:bg-[var(--primary)] disabled:cursor-not-allowed">
                        <p className="text-left">Procéder au paiement via notre partenaire Stripe</p>
                        {
                            (isLoading)
                                ? <Loader size={6} stroke={24}></Loader>
                                : <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--on-primary)" className="size-6" viewBox="0 0 256 256"><path d="M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                        }


                    </button>

                </div>
            </div>
        </div>
    )
}