// Methods in this file modifies the Queue component state

const log = console.log;

// Function to add a student, needs to be exported
export const addStudent = queue => {
  log("adding student");
  const studentList = queue.state.students;

  const student = {
    name: queue.state.studentName,
    course: queue.state.studentCourse
  };

  // Adding at a particular position
  const position = parseInt(queue.state.position);

  if (position > studentList.length || !position) {
    studentList.push(student);
  } else {
    studentList.splice(position - 1, 0, student);
  }

  queue.setState({
    students: studentList
  });
};

export const removeStudent = (queue, student) => {
  //log(student)

  // filters out the student we don't want.
  const filteredStudents = queue.state.students.filter(s => {
    return s !== student;
  });

  //log(filteredStudents)

  queue.setState({
    students: filteredStudents
  });
};
