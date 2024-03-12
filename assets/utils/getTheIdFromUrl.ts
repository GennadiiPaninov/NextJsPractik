
type GetTheIdFromUrl ={
    urls: string[]
}
export const GetTheIdFromUrl = ({urls}: GetTheIdFromUrl) => {
    const arrId = [] as number[]
    urls.forEach((el)=>{
        arrId.push(Number(el.replace("https://rickandmortyapi.com/api/character/", '')))
    })
    return arrId
};

