exports.main = async (context) => {
    const result = await context.cloud.httpApi.invoke({
        'domain': 'https://neoarts-api.yuyidata.com:18081',
        "path": "/v1/taobao/creation",
        'method':'POST',  
        'headers': {
            'Content-Type':'application/json;charset=UTF-8',
        },
        'body': {
            ...context?.data,
            'yuyiToken': 'zcpJdZNW7dH1mEXZU9JVwboFRarNHWq0',
            'mode': 1,
        }
    })
    return {  success:true, context: context  } 
};