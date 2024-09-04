"use client"

import { useParams, useSearchParams } from "next/navigation"

enum Error {
    Configuration = "Configuration",
}

const errorMap = {
    [Error.Configuration]: (
        <p>
            Erreur de configuration, consultez la page de statut, ou contactez le support si l'erreur persiste.
            <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
        </p>
    ),
}

export default function AuthErrorPage() {
    const search = useSearchParams()
    const error = search.get("error") as Error

    return (
        <div className="w-full basis-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>

            <h5 className="font-bold text-xl my-4">Une erreur est survenue, veuillez rééssayer.</h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
                {errorMap[error] || "Contactez le support si l'erreur persiste."}
            </div>
        </div>
    )
}