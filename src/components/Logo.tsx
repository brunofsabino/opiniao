import Link from "next/link"

const Logo = () => {
    return (
        <Link href='/' legacyBehavior passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer ">
                <img src="/images/g12.png" alt="logo Opinião Gospel" className="w-[45px] sm:w-[60px]" />
                <h1 className="scroll-m-20 ml-1 font-extrabold tracking-tight text-center text-black text-[10px]  sm:text-[12px] ">
                    Opinião Gospel
                </h1>
            </div>
        </Link>
    )

}
export default Logo