"use client";

export default function Loader({ size, stroke, color }: { size: number, stroke: number, color: string}) {
    return (
        <div aria-label="Chargement" role="status" className={`flex items-center space-x-2 size-${size}`}>
            <svg className={`h-20 w-20 animate-spin`} viewBox="0 0 256 256" stroke={color}>
                <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${stroke}`}></line>
                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={`${stroke}`}></line>
                <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${stroke}`}>
                </line>
                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={`${stroke}`}></line>
                <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${stroke}`}>
                </line>
                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={`${stroke}`}></line>
                <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${stroke}`}></line>
                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={`${stroke}`}>
                </line>
            </svg>
        </div>
    )
}