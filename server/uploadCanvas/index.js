exports.uploadFile = async (context) => {  
  const cloud = context.cloud;  
  let result;  
  try{  
    result = await cloud.file.uploadFile({  
      fileContent: context.data.fileContent,
      fileName:"test"
    })  
  }catch(e){  
    console.log("e",e)  
  } 
  return {result: result}; 
};