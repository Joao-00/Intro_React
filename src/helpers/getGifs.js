export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ryB1CPxClRiN2LZ7VlT4GIQo8wCIVN3B&q=${ category }&limit=12`
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs
}