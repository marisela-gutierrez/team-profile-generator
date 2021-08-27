const generateEmployeeCards = (employees) => {
  let cardsHtml = "";
  let third = "";
  employees.forEach((employee) => {
    cardsHtml += `<div class = "card col-md-3 m-3 p-0">
        <div class = "card-header bg-primary">`;
    cardsHtml += employee.getName();
    switch (employee.getRole()) {
      case "manager":
        cardsHtml +=
          '<h2 class="card-subtitle"><i class="bi bi-door-open"></i> Manager</h2>';
        third = employee.getOfficeNumber();
        break;
      case "engineer":
        cardsHtml += `<h2 class="card-subtitle"><i class="bi bi-eyeglasses"></i></i> Engineer</h2>`;
        third = employee.getGithub();
        break;
      case "intern":
        cardsHtml +=
          '<h2 class="card-subtitle"><i class="bi bi-book"></i> Intern</h2>';
        third = employee.getSchool();
        break;
    }
    cardsHtml += `</div>
        <ul class="list-group list-group-flush">
        `;
    cardsHtml += employee.getId();
    cardsHtml += employee.getEmail();
    cardsHtml += third;
    cardsHtml += `</div>`;
  });
  return cardsHtml;
};

const generatePage = (employees) => {
  return `
<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
<header>
<div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="align-items-center justify-content-center">
          <h1>My Team</h1>      
        </div>
      </div>
    </div>
</header>
<main>
  <div class = "container">
    <div class = "row">
      ${generateEmployeeCards(employees)}
    </div>
  </div>
</main>
</body>
</html>
`;
};

module.exports = generatePage;