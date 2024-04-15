

# Student Mentor Management API

This project is a Node.js application built with Express.js and MongoDB for managing students and their assigned mentors. It provides RESTful APIs to create students, retrieve all students, assign mentors to students, and get the mentor assigned to a specific student.

## Features

- **Create Student**: Allows users to create a new student by providing student details such as name, email, etc.

- **Get All Students**: Retrieves a list of all students stored in the database.

- **Assign Mentor**: Assigns a mentor to a specific student by updating the student's record with the mentor's ID.

- **Get Student's Assigned Mentor**: Retrieves the mentor assigned to a specific student.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shimamuzavvir/student-mentor-assign-node-task
   ```

2. Install dependencies:
   ```bash
   cd student-mentor-management
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is installed and running on your system.
   - Create a new MongoDB database and note down the connection URI.

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```plaintext
     MONGODB_URI=<your_mongodb_connection_uri>
     PORT=<port_number>
     ```

5. Start the server:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can use tools like Postman to interact with the API endpoints:

- **POST `/create-student`**: Create a new student by providing student details in the request body.

- **GET `/getallstudents`**: Retrieve a list of all students.

- **PUT `/assign/:id`**: Assign a mentor to a student by providing the student ID in the route parameter and the mentor ID in the request body.

- **GET `/get-student/:id`**: Retrieve the mentor assigned to a specific student by providing the student ID in the route parameter.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

