window.addEventListener('load', (event) =>{
  getAllReimbursements();
});

async function getAllReimbursements() {
  const URL = "http://localhost:8080/reimbursements";

  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    }
  })

  if(res.ok){
    let reimbursements = await res.json();
    console.log(reimbursements);

    for (const reimbursement of reimbursements) {
      let trEl = document.createElement('tr');

      let td1 = document.createElement('td');
      td1.innerText = reimbursement.reimbId;
      let td2 = document.createElement('td');
      td2.innerText = reimbursement.reimbAmount;
      let td3 = document.createElement('td');
      td3.innerText = reimbursement.reimbSubmitted;
      let td4 = document.createElement('td');
      td4.innerText = reimbursement.reimbResolved;
      let td5 = document.createElement('td');
      td5.innerText = reimbursement.reimbDescription;
      let td6 = document.createElement('td');
      td6.innerText = reimbursement.reimbReceipt;  
      let td7 = document.createElement('td');
      td7.innerText = reimbursement.reimbAuthor;
      let td8 = document.createElement('td');
      td8.innerText = reimbursement.reimbResolver;
      let td9 = document.createElement('td');
      td9.innerText = reimbursement.reimbStatus;
      let td10 = document.createElement('td');
      td10.innerText = reimbursement.reimbType;

      trEl.appendChild(td1);
      trEl.appendChild(td2);
      trEl.appendChild(td3);
      trEl.appendChild(td4);
      trEl.appendChild(td5);
      trEl.appendChild(td6);
      trEl.appendChild(td7);
      trEl.appendChild(td8);
      trEl.appendChild(td9);
      trEl.appendChild(td10);
      
      let tbody = document.querySelector('#reimbursement-table tbody');
      tbody.appendChild(trEl);
    }
  } else {
    console.log(res.statusText);
  }
}