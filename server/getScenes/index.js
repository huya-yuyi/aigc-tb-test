exports.main = async (context) => {
    const result = await context.cloud.httpApi.invoke({
        'domain': 'https://neoarts-api.yuyidata.com:18081',
        "path": "/v1/taobao/scenes",
        'params': {
            'yuyiToken':'zcpJdZNW7dH1mEXZU9JVwboFRarNHWq0',
            'mode':1,  
         },
        'method':'GET',  
        'headers': {
            'Content-Type':'application/json;charset=UTF-8',
        },
    })
    return {  success:true,  msg:  JSON.parse(result)} 
};