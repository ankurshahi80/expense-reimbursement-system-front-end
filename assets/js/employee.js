window.addEventListener('load', (event) =>{
  getAllReimbursements();
});
const submitReimbBtnEl = document.querySelector("#submit-reimb-btn");
submitReimbBtnEl.addEventListener("click",addReimbursement);

async function getAllReimbursements() {
  let empId=localStorage.getItem('user_id');
  const URL = `http://localhost:8080/users/${empId}/reimbursements`;

  const res = await fetch(URL, {
    method: 'GET',
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    }
  })

  if(res.ok){
    let reimbursements = await res.json();
    // console.log(reimbursements);

    for (const reimbursement of reimbursements) {

      // Format the dates
      let submissionDate = reimbursement.reimbSubmitted?new Date(reimbursement.reimbSubmitted).toLocaleString():null

      let resolutionDate = reimbursement.reimbResolved?new Date(reimbursement.reimbResolved).toLocaleString():null
      
      let trEl = document.createElement('tr');

      let td1 = document.createElement('td');
      td1.innerText = reimbursement.reimbId;
      let td2 = document.createElement('td');
      td2.innerText = reimbursement.reimbAmount;
      let td3 = document.createElement('td');
      // td3.innerText = reimbursement.reimbSubmitted;
      td3.innerText = submissionDate;
      let td4 = document.createElement('td');
      td4.innerText = resolutionDate;
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

async function addReimbursement(event) {

  event.preventDefault();

  const newReimbAmount = document.querySelector("#reimb-amount").value.trim();
  const newReimbDescription = document.querySelector("#reimb-description").value.trim();
  const newReimbType = document.querySelector("#reimb-type").value.trim();
  const newReimbReceipt = document.querySelector("#reimb-receipt").files[0];
  
  const formData = new FormData();
  formData.append("reimbAmount",newReimbAmount);
  formData.append("reimbDescription",newReimbDescription);
  formData.append("reimbType",newReimbType);
  formData.append("reimbReceipt",newReimbReceipt);

  console.log(formData);

  let empId=localStorage.getItem('user_id');
  const URL=`http://localhost:8080/users/${empId}/reimbursements`
  console.log(newReimbAmount,newReimbDescription,newReimbType,URL)
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    },
    body: formData
  })

  if(res.ok){
    document.location.reload();
  } else {
    console.log(res.statusText);
  }

}