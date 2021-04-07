export const parseDate = (date) => {
    let t = date
    date = date.replace(" ", "T") + ":00"
    return Date.parse(date)
}