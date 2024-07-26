import Link from "next/link"

const Logo = () => {
    return (
        <Link href='/' legacyBehavior passHref>
            <div className="flex flex-col justify-center items-center cursor-pointer ">
                <img src="/images/g12.png" alt="logo Opinião Gospel" className="w-[60px] sm:w-[40px]" />
                <h1 className="scroll-m-20 ml-1 text-1xl font-extrabold tracking-tight text-center lg:text-1xl sm:text-sm ">
                    Opinião Gospel
                </h1>
            </div>
        </Link>
    )

}
export default Logo