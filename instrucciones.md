# STUDENTS

## Recuperar todos los estudiantes

- Method: GET
- Url: /api/students
- Headers: XXXX
- Body: XXXX

Response: 
- Status: 200
- Body: Un array con todos los estudiantes

## Crear un estudiante

- Method: POST
- Url: /api/students
- Headers: XXXX
- Body: name, surname, phone, email

Response: 
- Status: 201
- Body: El objeto con el nuevo estudiante creado



## Actualizar un estudiante

- Method: PUT
- Url: /api/students/<STUDENTID>
- Headers: XXXX
- Body: name, surname, phone, email

Response:
- Status: 200
- Body: el estudiante actualizado













# TEACHERS

## Recuperar los datos de todos los profesores

- Method: GET
- Url: /api/teachers
- Headers: XXXX
- Body: XXXX

Response: 
- Status: 200
- Body: Un array con todos los profesores

## Recuperar un profesor a partir de su ID

- Method: GET
- Url: /api/teachers/{IDPROFESOR}
- Headers: XXXX
- Body: XXXX

Response: 
- Status: 200
- Body: El objeto con el profesor buscado

## Crear un profesor

- Method: POST
- Url: /api/teachers
- Headers: XXXX
- Body: first_name, last_name, age, available

Response: 
- Status: 200
- Body: El objeto con el profesor creado