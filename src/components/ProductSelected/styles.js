import tw, { styled } from "twin.macro";

export const ContainerProduct = tw.div`
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

export const ContainerInfoProduct = tw.div`
    flex
    flex-col
    py-5
    w-full
`
export const ContainerImage = tw.div`
    flex
    items-start
    justify-around
    w-full
    relative
`

export const QuantityCircle = tw.div`
    bg-[#B41ACA]
    font-bold
    py-1
    px-5
    rounded-full
    text-white
    text-6xl
    md:text-xl
    md:px-3
`

export const ContainerDescription = tw.div`
    flex
    flex-col
    w-full    
`

export const SectionButtons = tw.div`
    border-b
    border-gray-300
    flex
    justify-between
    pb-4
    w-full
`

export const TextName = tw.p`
    font-bold
    text-3xl
    text-black
`
export const TextPrice = tw.span`
    font-bold
    text-[#903A9D]
    text-xl
`

export const ContainerButtons = tw.div`
    flex
`

export const ButtonPlus = tw.div`
    bg-[#B41ACA]
    font-bold
    mx-1
    pb-1
    px-3
    text-6xl
    md:text-2xl
    text-white
    cursor-pointer
`

export const ButtonMinus = tw.div`
    bg-gray-300
    font-bold
    mx-5
    md:mx-1
    pb-1
    px-4
    text-6xl
    md:text-2xl
    text-black
    cursor-pointer
`

export const TextDescription = tw.p`
    py-4
    text-gray-400
`

export const CloseButton = tw.div`
    bg-gray-400
    font-bold
    p-1
    px-3
    rounded-full
    text-black
    absolute
    right-0
    cursor-pointer
    hidden
    md:flex
`

export const AddCartButton = styled.div(({ blockButton }) => [
    tw`
    bg-[#B41ACA]
    font-bold
    mx-1
    py-5
    px-3
    text-4xl
    md:text-2xl
    text-white
    rounded-xl
    w-[100%]
    md:w-[30%]
    text-center
    cursor-pointer
`,
    blockButton && tw`
    bg-gray-400
    cursor-text
    `,
]) 