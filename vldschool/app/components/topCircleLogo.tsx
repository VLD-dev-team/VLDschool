export default function Logos() {
    return (<div className="flex justify-center -space-x-3 leading-6 mb-6">
        <TopCircleLogo>
            <img src="https://s2.qwant.com/thumbr/0x380/f/5/3cf01c458bf156249973c93e511e0f839d987d47317c96da909f8f5f01b8b9/Python_logo_icon.png?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPython_logo_icon.png&q=0&b=1&p=0&a=0" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://s2.qwant.com/thumbr/474x474/c/a/00c2c9b32a36ceba8ec05a62fa69be1255356850f376d6587832fd65272e01/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP._XvQEHjvaRWnkX5EW_e5-gHaHa%26pid%3DApi&q=0&b=1&p=0&a=0" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://cdn-icons-png.flaticon.com/256/174/174854.png" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        </TopCircleLogo>
        <TopCircleLogo>
            <img src="https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png" alt="" />
        </TopCircleLogo>
    </div>)
}

function TopCircleLogo({ children }: { children: React.ReactElement }) {
    return (
        <div className="rounded-full w-24 h-24 bg-white flex items-center justify-center ring-4 ring-[var(--primary-container)]">
            <div className="size-10 flex items-center justify-center">{children}</div>
        </div>
    )
}