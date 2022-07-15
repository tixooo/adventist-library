let url = 'https://casd-library-default-rtdb.europe-west1.firebasedatabase.app/'
const Test = async () => {
    let response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    let result = await response.json()
    return result
}

export default Test