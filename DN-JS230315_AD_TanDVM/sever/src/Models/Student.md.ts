import path from 'path';
import fs from 'fs';
import {Student} from '../Types/Student';
import { log } from 'console';


export interface GetMany {
     status: boolean,
     message: string,
     data: Student[]
 }

export default {
     getMany: (): GetMany => {
         try {
             let students:Student[] = JSON.parse(fs.readFileSync(path.join(__dirname,"../","DB","student.json"), { encoding: 'utf8' }));
             return {
                 status: true,
                 message: "Get student ok!",
                 data: students
             }
         }catch(err) {
             return {
                 status: false,
                 message: "Get student failed!",
                 data: []
             }
         }
     },
     deleteStudent: (studentId:number) => {
          try {
               console.log(studentId,222);
               
              let students:Student[] = JSON.parse(fs.readFileSync(path.join(__dirname,"../","DB","student.json"), { encoding: 'utf8' }));
              students = students.filter((value, index) => value.id != studentId);
              console.log(students,33333);
              
              fs.writeFileSync(path.join(__dirname,"../","DB","student.json"), JSON.stringify(students));
              return {
                  status: true,
                  message: "Delete ok!",
                  data: students
              }
          }catch(err) {
              return {
                  status: false,
                  message: "Delete failed!",
                  data: []
              }
          }
      },

}