import tw from "twin.macro";

export const Container = tw.div`
    bg-white
    h-screen
    w-full
    absolute
    top-0
    left-0
    flex
    flex-col
    md:hidden
`

export const CloseButton = tw.div`
    bg-[#B41ACA]
    font-bold
    mx-1
    py-5
    px-3
    text-4xl
    md:text-2xl
    text-white
    rounded-xl
    w-full
    md:w-[30%]
    text-center
    cursor-pointer
`