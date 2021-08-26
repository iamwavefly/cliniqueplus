const advancedSearch = document.getElementById('advancedSearch');
const advancedSearchForm = document.getElementById('advancedSearchForm');
const searchContainer = document.getElementById('patientSearchPlacement');

advancedSearch.addEventListener('click', (e) => {
  e.preventDefault();
  if (advancedSearchForm.classList.contains('hidden')) {
    advancedSearchForm.classList.remove('hidden');
    searchContainer.innerHTML = '';
  } else {
    advancedSearchForm.classList.add('hidden');
  }
});
const testUsers = async () => {
  const users = await fetch('../../../seed/users.json');
  const res = await users.json();
  return res.people;
};
const filterResult = async (filterBy) => {
  let users = await testUsers();
  const res = users.filter((res) => {
    return (
      res.firstName.toLowerCase() === filterBy.firstName.toLowerCase() ||
      res.visitNumber === filterBy.visitNumber ||
      res.deathDate === filterBy.visitNumber ||
      res.morbidity === filterBy.morbidity
    );
  });
  showResult(res);
  console.log(res);
};
const showResult = (result) => {
  if (result.length > 0) {
    const html = result
      .map(
        (user) =>
          `<div class="patient"><h2>${user.firstName}</h2><h2> ${user.lastName} </h2> &rarr; <h2> ${user.number}</h2></div> `
      )
      .join('');
    searchContainer.innerHTML = html;
    advancedSearchForm.classList.add('hidden');
  }
};
advancedSearchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { patientName, visitNumber, deathDate, morbidity } = e.target;
  // visitNumber.value, deathDate.value, morbidity.value;
  let filter = {
    firstName: patientName.value,
    visitNumber: Number(visitNumber.value),
    deathDate: deathDate.value,
    morbidity: morbidity.value,
  };
  filterResult(filter);
});
searchContainer.addEventListener('click', (e) => {
  let childEl = e.target.parentNode.querySelectorAll('h2');
  window.location = `/?first-name=${childEl[0].innerHTML}&lastname=${childEl[1].innerHTML}&patient-id=${childEl[2].innerHTML}`;
});
