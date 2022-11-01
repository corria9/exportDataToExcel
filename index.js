const XLSX = require('xlsx')

const students = [
    {name: "Leonardo", email:"ra@email.com,",age:23},
    {name: "Donatello", email:"ra@egoogle.com,",age:45},
    {name: "Michellangelo", email:"ra@yahoo.com,",age:33},
    {name: "Rafael", email:"ra@metamask.com,",age:32},
    {name: "Armando", email:"ra@hachis.com,",age:30}
]

const convertJsonToExcel = () => {
    const worSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, worSheet, "students")
    //generate buffer
    XLSX.write(workBook, {bookType: 'xlsx', type:'buffer'})
    //Binari String
    XLSX.write(workBook, {bookType:'xlsx', type:'binary'})
    
    XLSX.writeFile(workBook, "studentsData.xlsx")
 }

convertJsonToExcel()
