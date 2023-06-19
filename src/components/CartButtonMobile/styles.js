import tw, { styled } from "twin.macro";

export const ContainerCart = tw.div`
    flex
    flex-col
    items-end
    justify-center
    py-7
`

export const CartButton = styled.div(({ bgColorLight }) => [
    tw`
    bg-[#B41ACA]
    flex
    cursor-pointer
`,
    bgColorLight &&
    tw`
    bg-[#F7EBF9]
`
])




export const TextPrice = styled.p(({ textColorDark }) => [
    tw`
    mx-2
    py-0.5
    text-3xl
    text-white
`,
    textColorDark && tw`
    text-[#B41ACA]
`
])

export const Text = tw.p`
    font-bold
    px-1
    py-4
    text-[#903A9D]
    text-xl
`

export const ButtonClose = tw.div`
    bg-[#B41ACA]
    font-bold
    px-5
    flex
    items-center
    text-2xl
    text-white
    cursor-pointer
`