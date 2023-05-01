import { baseDarkText } from "./colors"

export const genericSectionLayout = () => {
    return `py-24 w-full pl-8`
}

export const genericSectionTransition = () => {
    return `${genericSectionLayout()} bg-white`
}

export const headlineHeaderText = () =>{
    return `text-7xl text-sky-100 font-semibold py-1`
}

export const subHeadlineHeaderText = () =>{
    return `text-5xl font-semibold italic dark:${baseDarkText()} pt-1 pb-3 opacity-70`
}