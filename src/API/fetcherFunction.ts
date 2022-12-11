const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acbc8c3254msheb3e17a8482eb55p1b00a2jsn3355b454281a',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

export async function fetchResult<T>(firstName: string, secondName: string): Promise<T> {
    return await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${firstName}&fname=${secondName}`,options)
    .then(response => response.json())
}