export default function Card({children}: {children: React.ReactElement}) {
    return (
        <div className="bg-[var(--surface)] rounded">{children}</div>
    )
}