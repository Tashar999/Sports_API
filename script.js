

const url = 'https://api.sportmonks.com/v3/football/schedules/seasons/23614?api_token=XyDaSLQPkErtGiCNBSFwSLVbS5e5N4R6KojVwVb7Qis363235T2SQsM4yNSe\n'

async function getData() 
{

    const url = 'https://api.sportmonks.com/v3/football/schedules/seasons/23614'
    const token = 'XyDaSLQPkErtGiCNBSFwSLVbS5e5N4R6KojVwVb7Qis363235T2SQsM4yNSe'
  
    const response = await fetch(url+token)
    const data = await response.json()
    console.log(data)
 }
  
  getData()
