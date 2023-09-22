export function buildImgPath(imgName){
    const imgUrl = new URL('../assets/img/' + imgName, import.meta.url);

    return imgUrl.href
}