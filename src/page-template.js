const teamCards = (team) => {
  let teamInfo = "";
  let unique = "";
  team.forEach((employee) => {
    teamInfo += `<div class = "card col-md-3 m-3 p-0">
        <div class = "card-header bg-primary">`;
    teamInfo += employee.getName();
    switch (employee.getRole()) {
      case "manager":
        teamInfo +=
          '<h6 class="card-subtitle mb-2 "><i class="fas fa-mug-hot"> Manager</i></h6>';
        unique = employee.getNumber();
        break;
      case "engineer":
        teamInfo += `<h6 class="card-subtitle mb-2 "><i class="fas fa-glasses"> Engineer</i></h6>`;
        unique = employee.getGithub();
        break;
      case "intern":
        teamInfo +=
          '<h6 class="card-subtitle mb-2 "><i class="fas fa-user-graduate"> Intern</i></h6>';
        unique = employee.getSchool();
        break;
    }
    teamInfo += `</div>
        <ul class="list-group list-group-flush">
        `;
    teamInfo += employee.getId();
    teamInfo += employee.getEmail();
    teamInfo += unique;
    teamInfo += `</div>`;
  });
  return teamInfo;
};

const generatePage = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </head>

  <body>
    <header>
      <h1 class="d-block text-center p-5 bg-danger text-white">My Team</h1>

    </header>

    <section>

      <div class="container mt-5 mr-3">
        <div class="row">
          ${teamCards(team)}
        </div>   
       </div>
    </section>
    
  </body>
  </html>
`;
};

module.exports = generatePage;