import  studentMd, {GetMany} from "../Models/Student.md";

class StudentController
{
     handleGetStudent(req:any, res:any):void {
          try {
               let result:GetMany = studentMd.getMany();
               return res.status(200).json(
                   result
               )
           }catch {
               return res.status(500).json(
                   {
                       message: "Failed!"
                   }
               )
           }
     }
     handleDeleteStudent(req:any, res:any):void {
          try {
               let result:GetMany = studentMd.deleteStudent(Number(req.params.id));
               return res.status(200).json(
                   result
               )
           }catch(err) {
               return res.status(500).json(
                   {
                       message: "Failed!"
                   }
               )
           }
     }
}
export default new StudentController()