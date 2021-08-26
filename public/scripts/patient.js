const tabs = document.querySelectorAll('#tab');
const tabContent = document.querySelectorAll('.tab_content');
// innser tab
const tabsInner = document.querySelectorAll('#tab-inner');
const tabInnerContent = document.querySelectorAll('.tab-content-inner');
const tab2 = document.querySelector('.tab-2');
// innser tab
const tabStep2 = document.querySelectorAll('#tab-step-2');
const tabContentStep = document.querySelectorAll('.tab-content-step');
const tab15 = document.querySelector('.tab-15');

const upload = document.querySelectorAll('.upload');
const uploadLabel = document.querySelector('.upload_label');

// chart_toggler
const chartToggler = document.querySelectorAll('#chart_toggler');

// hideUserProfile
const userProfileToggler = document.querySelector('#hideUserProfile');
const patientProfileSnippet = document.querySelector(
  '.patient_profile_snippet'
);

upload.forEach((input) => {
  input.addEventListener('change', (e) => {
    let fileName = e.target.files[0].name;
    uploadLabel.innerHTML = fileName;
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabContent.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    tabIndex = e.target.getAttribute('data-tab', '');
    console.log(tabIndex);
    if (tabIndex) {
      const tabCont = document.querySelector(`#tab-content-${tabIndex}`);
      tabCont.classList.add('active');
    }
  });
});
tabs[0]?.classList.add('active');
tabContent[0]?.classList.add('active');

tabsInner.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    tabStep2.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabContentStep.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabsInner.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabInnerContent.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    tabIndex = e.target.getAttribute('data-tab', '');
    console.log(tabIndex);
    if (tabIndex) {
      const tabCont = document.querySelector(`#tab-content-${tabIndex}`);
      tabCont.classList.add('active');
    }
  });
});
tab2?.addEventListener('click', () => {
  tabsInner[0].classList.add('active');
  tabInnerContent[0].classList.add('active');
});
// tab step 2
tabStep2.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    tabStep2.forEach((tab) => {
      tab.classList.remove('active');
    });
    tabContentStep.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    tabIndex = e.target.getAttribute('data-tab', '');
    console.log(tabIndex);
    if (tabIndex) {
      const tabCont = document.querySelector(`#tab-content-${tabIndex}`);
      tabCont.classList.add('active');
    }
  });
});
tab15?.addEventListener('click', () => {
  tabStep2[0].classList.add('active');
  tabContentStep[0].classList.add('active');
});

// hideUserProfile
userProfileToggler?.addEventListener('click', () => {
  patientProfileSnippet.classList.toggle('hide');
  userProfileToggler.classList.toggle('transform');
});

const chartTogglerFunc = (e) => {
  const dataAttr = e.target.getAttribute('data-chart');
  const content = document.querySelectorAll(`#chart-content-${dataAttr}`);
  content.forEach((el) => {
    el.classList.toggle('show_chart');
  });
};
// chart toggler
chartToggler.forEach((chart) => {
  chart.addEventListener('click', chartTogglerFunc);
});
