export type Method = 'get'|'GET'|'post'|'POST'|'head'|'HEAD'|'options'|'OPTIONS';

export interface RequestConfig{
    url:string
    method?:Method
    data?:any
    params?:any
}