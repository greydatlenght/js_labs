function separateString(data) {
    let stringArray = ["string"];
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] == "string") {
        stringArray.push(data[i]);
      }
    }
    return stringArray;
  }
  
  function separateNumber(data) {
    let numberArray = ["number"];
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] == "number") {
        numberArray.push(data[i]);
      }
    }
    return numberArray;
  }
  
  function separateAnother(data) {
    let anotherArray = ["another"];
    for (let i = 0; i < data.length; i++) {
      if (
        typeof data[i] != "string" &&
        typeof data[i] != "number" &&
        typeof data[i] != "object"
      ) {
        anotherArray.push(data[i]);
      }
    }
    return anotherArray;
  }
  
  function separateArray(data) {
    let arrayArray = ["array"];
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        arrayArray.push(data[i]);
      }
    }
    return arrayArray;
  }
  
  function mainArrayParser(array) {
    let finalArray = [];
    let arrayFunc = [separateAnother, separateArray, separateNumber, separateString];
    for (let i = 0; i <= 3; i++) {
        let data = arrayFunc[i](array);
        finalArray.push(data);
    }
    return finalArray;
  }
  
  const randomArray = [1, "a", 2, "b", false, [[1, 2], "1", "2"]];
  mainArrayParser(randomArray).map((item) => {
    console.log(item);
  });
