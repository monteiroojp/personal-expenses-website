
const fetchExpenses = async () => {
    try{
        const response = await fetch('http://localhost:5000/api/v1/expenses')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

fetchExpenses()