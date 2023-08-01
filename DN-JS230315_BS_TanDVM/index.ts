const rootElement: any = document.querySelector("#root");

rootElement.innerHTML = `<h1>Xin chào Rekkei</h1>`;

enum sex {
  MALE,
  FEMALE,
}

interface student {
  name: string;
  age: number;
  sex: sex;
}

let students: student[] = [
  { name: "Tân Đặng", age: 30, sex: sex.MALE },
  { name: "Hoàng Nguyễn", age: 29, sex: sex.MALE },
  { name: "Khoa Trần", age: 29, sex: sex.MALE },
  { name: "Tùng Nguễn", age: 36, sex: sex.MALE },
  { name: "Nhàn Thái", age: 33, sex: sex.FEMALE },
  { name: "Phúc Nguyễn", age: 22, sex: sex.MALE },
];
const Student_TbodyElement: any = document.querySelector("#Student_Tbody");
let content = "";
students.forEach((student,index) => {
  content += `
          <tr>
               <td>${student.name}</td>
               <td>${student.age}</td>
               <td>${student.sex === sex.MALE ? "Male" : "Female"}</td>
               <td>
                    <button type="button" onclick="handleEdit(${index})">Edit</button>
               </td>
          </tr>`;
     });
Student_TbodyElement.innerHTML = content;

let editIndex: number;

let handleEdit = (index: number) => {
     editIndex = index;
     let student = students[index];
     if (student) {
         (document.querySelector('#name') as HTMLInputElement).value = student.name;
         (document.querySelector('#age') as HTMLInputElement).value = student.age.toString();
         (document.querySelector('#sex') as HTMLSelectElement).value = student.sex === sex.MALE ? 'Male' : 'Female';
     }
     console.log(index);
     
 }

 let btnEditStudent: any = document.querySelector('#editStudent')
btnEditStudent.addEventListener('click', function (event: any) {
    event.preventDefault();
    if (editIndex !== null) {
        let name = (document.querySelector('#editName') as HTMLInputElement).value;
        let age = parseInt((document.querySelector('#editAge') as HTMLInputElement).value);
        let sex = (document.querySelector('#editSex') as HTMLSelectElement).value == 'Male' ? Sex.MALE : Sex.FEMALE;
        students[editIndex] = { name: name, age: age, sex: sex };
        let studentList: any = document.querySelector("tbody");
        studentList.innerHTML = ""
        renderStudents(students);
    }
    (document.querySelector('#editName') as HTMLInputElement).value = "";
    (document.querySelector('#editAge') as HTMLInputElement).value = "";
    (document.querySelector('#editSex') as HTMLSelectElement).value = "Male";
});