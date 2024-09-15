import Loader from "../../buy/[productID]/components/Loader";

export default function Loading() {
    return (
        <div className="w-full h-full grid place-items-center">
            <div className="flex items-center gap-2"><Loader size={8} stroke={24}></Loader><p>Chargement de la page de paiement</p></div>
        </div>
    )
}