import {request} from "../utils/request"

export function case_detail(){
  return request({
    url:"/case/1234",//假的caseid
    method:"Post"
  })
}