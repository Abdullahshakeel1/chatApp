export const formatTime = (inputDate)=>{
    const date = new Date(inputDate)
    const hours = padZero(date.getHours())
    const minuties = padZero(date.getMinutes())
    return `${hours}:${minuties}`

}
function padZero(number){
    return String(number).padStart(2, '0')
 
}