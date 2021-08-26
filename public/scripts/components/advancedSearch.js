const patientFilterForm = document.querySelector('#patientFilterForm');
const filter = document.querySelector('#filter');

const filters = (filter) => {
  console.log(filter);
};

const filterByChildName = () => {};

const filterFormSubmit = (e) => {
  e.preventDefault();
};

const filterOption = (e) => {
  filters(e.target.value);
};

filter.addEventListener('change', filterOption);
patientFilterForm.addEventListener('submit', filterFormSubmit);
