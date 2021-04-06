export default function splitNumber(value){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}