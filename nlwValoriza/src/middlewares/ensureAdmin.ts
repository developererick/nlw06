import { Request,Response,NextFunction } from "express";

export function ensureAdmin(request: Request,response: Response,nextFunction: NextFunction){
    //Verificar se o usuádio é admin
    const admin = true;
    
    if(admin){
        return nextFunction();
    }

    return response.status(401).json({
        error:"Unauthorized"
    })

}