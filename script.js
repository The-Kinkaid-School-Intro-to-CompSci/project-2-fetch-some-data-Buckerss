async function fetchJSONData(fileName){

    const response = await fetch(`data/presidents.json`);
    console.log("Response: ", response);
    console.log("Response status: ", response.body);

    // if (response.status !== 200){
    //     alert(`HTTP error! status: ${response.status}`);
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }
    const data = await response.json();
    console.log("Data:", data);
    return data;

}

function runProgram(){

    console.log('runProgram');
    //your code goes here
}
document.addEventListener('DOMContentLoaded', runProgram);