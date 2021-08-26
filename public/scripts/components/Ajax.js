const patientsAjaxSearch = document.getElementById('patientsAjaxSearch');
const patientSearchPlacement = document.getElementById(
  'patientSearchPlacement'
);
class InputAjaxSearch {
  constructor(value, render, data) {
    this.value = value;
    this.render = render;
    this.data = data;
  }
  getUserInput() {
    let searchMatch = this.data.people.filter((user) => {
      const regEx = new RegExp(`^${this.value}`, 'gi');
      return user.firstName.match(regEx) || user.lastName.match(regEx);
    });

    if (this.value.length === 0) {
      searchMatch = [];
      patientSearchPlacement.innerHTML = '';
    }
    this.outputHTML(searchMatch);
  }
  outputHTML = (matches) => {
    if (matches.length > 0) {
      const html = matches
        .map(
          (user) =>
            `<div class="patient"><h2>${user.firstName}</h2><h2> ${user.lastName} </h2> &rarr; <h2> ${user.number}</h2></div> `
        )
        .join('');
      this.render.innerHTML = html;
    }
  };
}

patientsAjaxSearch.addEventListener('input', async (e) => {
  const data = await fetch('../../../seed/users.json');
  const users = await data.json();
  const newAjaxSearch = new InputAjaxSearch(
    e.target.value,
    patientSearchPlacement,
    users
  );
  newAjaxSearch.getUserInput();
});

patientSearchPlacement.addEventListener('click', (e) => {
  let childEl = e.target.parentNode.querySelectorAll('h2');
  window.location = `/?first-name=${childEl[0].innerHTML}&lastname=${childEl[1].innerHTML}&patient-id=${childEl[2].innerHTML}`;
});
