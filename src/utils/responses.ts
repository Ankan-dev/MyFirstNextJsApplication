

export interface info<T> {
    status:number;
    success:boolean;
    message:string;
    data?:T;
}

export function responses<T> ( status:number, success:boolean, message:string, data?:T):info<T>{

    return{
        status,
        success:success,
        message:message,
        data:data
    }
}