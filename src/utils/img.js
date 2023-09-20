export function buildImgPath(imgName){
    const imgUrl = new URL('../assets/img/' + imgName, import.meta.url);
    console.log(imgUrl.href);
    return imgUrl.href
}