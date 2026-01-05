export const formatIdr = (integer)=>{
    const rupiah = new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR"
    }).format(integer)
    return rupiah
}