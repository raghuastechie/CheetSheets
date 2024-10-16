const fs = require('fs');
const readline = require('readline');

let getLineCount = () => {  
  let lineCount = 0;
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream('index.txt'),
      crlfDelay: Infinity,
    });
    rl.on('line', (line) => lineCount++);          
    setTimeout(() => {
      lineCount > 0 ? resolve({lineCount: lineCount}) : reject({msg: 'no-success'});
    }, 5000)
  })
}

let getLines = (notrequiredLines) => {  
  let lineCount = 0;
  let reqText = '';
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream('index.txt'),
      crlfDelay: Infinity,
    });
    rl.on('line', (line) => {
      lineCount++;
      if(lineCount > notrequiredLines){
        reqText = reqText + '\n' + line;
      } 
    });      
    setTimeout(() => {
      reqText != '' ? resolve({pulledText: reqText}) : reject({msg: 'no-success'});
    }, 5000)
  })
}

const getL = async (line) => {
  let notRequiredLines = 1;
  if (line == undefined || line == '') line = 1; 
  try{
    let res = await getLineCount();
    notRequiredLines = res.lineCount - line;
    console.log(notRequiredLines);
  }catch (e){
    console.log(e);
  }
  try{
    let res = await getLines(notRequiredLines);
    console.log(res);
  }catch(e){
    console.log(e);
  }
}

getL(4);
