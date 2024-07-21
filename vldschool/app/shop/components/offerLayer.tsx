import { stripe } from "@/stripe"
import Stripe from "stripe";
import Countdown from "./countdown";

export default async function OfferLayer() {
    const allCoupons = await stripe.coupons.list(); // On liste tout les coupons existants

    const mainOffers: Stripe.Coupon[] = []; // On isole les coupons de promo majeurs
    allCoupons.data.forEach((coupon: Stripe.Coupon) => {
        if (coupon.metadata && coupon.metadata.MAINOFFER == 'true') {
            mainOffers.push(coupon);
        }
    })

    if (mainOffers.length == 0) {
        return (<span></span>) // Pas d'offre en cours
    } else {
        // On selectionne l'offre principale
        const offer: Stripe.Coupon = mainOffers[0];

        // On calcule le temps restant
        const now = Date.now();
        const redeem_limitDate = offer.redeem_by;
        const remainingTime = (redeem_limitDate ?? (now / 1000)) - (now / 1000)

        return (
            <div className="bg-[var(--primary-container)] mt-10 p-10 rounded-lg flex text-white">
                <div className="basis-1/3 shrink-0">
                    <h2 className="text-xl">{offer.name}</h2>
                    <p className="mt-4">{offer.metadata!.DESC}</p>
                </div>
                <div className="basis-2/3 shrink-0 text-right">
                    <p>Fin de la période de promotion : 30 Juin 2024, 23h59</p>
                    <Countdown remainingTime={remainingTime}></Countdown>
                </div>
            </div>
        )
    }
}