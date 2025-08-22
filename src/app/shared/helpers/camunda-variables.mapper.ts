import { CamundaVariable } from "../interfaces/camunda-variables.interface";

export function mapCamundaVariables(camundaVariables: CamundaVariable[]){
    const payload:any = {};
    camundaVariables.forEach((variable)=>{
        payload[variable.name] = variable.value;
    });
    return payload;
}
