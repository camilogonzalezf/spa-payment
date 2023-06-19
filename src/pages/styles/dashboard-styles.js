import tw from "twin.macro";

export const Container = tw.div`
    relative
    px-5 
    pb-10 
`
export const ContainerSections = tw.div`
    border
    flex
    items-start
    justify-center
    p-5
    w-full   
    relative 
`

export const ContainerProductsSection = tw.div`
    w-[100%]
    md:w-[60%]
`

export const SideBarContainer = tw.div`
    w-[40%]  
    ml-10 
    hidden 
    md:flex 
    flex-col
`
export const ContainerButtonCart = tw.div`
    md:hidden
`
