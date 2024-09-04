export default function Card({children}: {children: React.ReactElement}) {
    return (
        <div className="bg-[var(--surface)] rounded text-[var(--neutral)]">{children}</div>
    )
}