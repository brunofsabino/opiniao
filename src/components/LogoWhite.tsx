import Link from "next/link"

const LogoWhite = () => {
    return (
        <Link href='/' legacyBehavior passHref>
            <div className="flex justify-center items-center cursor-pointer">
                <img src="/images/logo-white.png" alt="logo Opinião Gospel" className="w-[60px]" />
                <h1 className="scroll-m-20 ml-1 text-1xl text-white font-extrabold tracking-tight lg:text-1xl">
                    Opinião Gospel
                </h1>
            </div>
        </Link>
    )

}
export default LogoWhite