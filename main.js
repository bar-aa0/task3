let students = [];

// دالة لإضافة مهمة جديدة إلى القائمة
function addStudent(students, id, name,status) {
    try {
      if (!id || !name) {
        throw new Error("Student id and name cannot be empty.");
      }
      if (!Number.isInteger(id)) {
        throw new Error("Student id must be an integer.");
      }
      students.push({ id, name,status});
      document.write(`Student ${name} with ID ${id} added successfully.`+"</br>");
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // دالة لحذف مهمة من القائمة بناءً على معرفها
  function removeStudent(students, id) {
    try {
      let taskFound = false;
      for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
          taskFound = true;
          document.write(`student with ID ${id} removed successfully.`+"</br>");
          break;
        }
      }
      if (!taskFound) {
        throw new Error(`student with ID ${id} not found.`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // دالة لطباعة قائمة المهام مع حالاتها
  function printStudent(students) {
    for (const task of students) {
      document.write(`student ID: ${task.id}, Name: ${task.name}, Status: ${task.status}`+"</br>");
    }
  }
  
  // أمثلة للاستخدام:
  addStudent(students, 1, "عبدلله فوزي","مسجل");
  addStudent(students, 2, "مصطفى خالد","غير مسجل");
  addStudent(students, 3, "براء يامن","مسجل");
  
  printStudent(students);
  
  removeStudent(students, 2);
  
  printStudent(students);
