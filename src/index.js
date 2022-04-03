import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './main.scss';
import 'boxicons/css/boxicons.min.css';
import axios from 'axios';
import picture from './picture.jpg';

const dev_list = document.querySelector('.dev-list');

all_devs();
function all_devs() {
  axios.get('http://localhost:5050/devs').then((res) => {
    dev_list.innerHTML = '';

    res.data.map((data) => {
      let { name, number, photo } = data;

      dev_list.innerHTML += `
      <div class="col-xl-3">
          <div class="card text-center shadow">
            <img class="card-img mb-3" src="${picture}" alt="" />
            <img class="card-img" src="${photo}" alt="" />
            <div class="card-body">
              <h3><i class="bx bxs-hot"></i>${name}</h3>
              <p>0${number}</p>
            </div>
          </div>
        </div>
      `;
    });
  });
}
