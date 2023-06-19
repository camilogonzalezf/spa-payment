import tw from "twin.macro";

export const ShoppinCart = tw.div`
    flex
    flex-col
    items-start
    w-full
`

export const Text = tw.div`
    border-b
    border-gray-300
    font-bold
    py-4
    text-[#903A9D]
    text-xl
    w-full
`

export const ContainerProduct = tw.div`
    border-b
    border-gray-300
    flex
    items-center
    justify-between
    py-5
    w-full
`

export const QuantityCircle = tw.div`
    bg-[#B41ACA]
    font-bold
    py-3
    px-5
    rounded-full
    text-white
    text-4xl
    mr-5
`

export const ContainerTotal = tw.div`
    flex
    justify-end
    py-3
    w-full    
`

export const TextTotal = tw.p`
    font-bold
    text-6xl
    md:text-3xl
    text-gray-400
`
export const TextPrice = tw.span`
    font-bold
    text-[#903A9D]
    text-6xl
    md:text-3xl
    ml-2
`

export const TextName = tw.p`
    font-bold
    text-xl
    text-gray-400
`
export const ContainerInfo = tw.div`
    flex
    items-center
`

export const IconTrash = tw.img`
    cursor-pointer
    w-12
    mr-10
    md:mr-0
    md:w-8
`