window.addEventListener('load', (event) =>{
  getAllReimbursements();
});

const reimbursementTableEl = document.querySelector("#reimbursement-table");
const statusSearchEl = document.querySelector("#status-serach");

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

      // create approve button
      let approveButtonEl = document.createElement('button');
      approveButtonEl.textContent = "Approve";
      approveButtonEl.className = "approve-btn";
      approveButtonEl.setAttribute("data-reimbursement-id",reimbursement.reimbId);
      let td11 = document.createElement('td');
      td11.appendChild(approveButtonEl);

      // create deny button
      let denyButtonEl = document.createElement('button');
      denyButtonEl.textContent = "Deny";
      denyButtonEl.className = "deny-btn";
      denyButtonEl.setAttribute("data-reimbursement-id",reimbursement.reimbId);
      let td12 = document.createElement('td');
      td12.appendChild(denyButtonEl);

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
      trEl.appendChild(td11);
      trEl.appendChild(td12);
      
      let tbody = document.querySelector('#reimbursement-table tbody');
      tbody.appendChild(trEl);
    }
  } else {
    console.log(res.statusText);
  }
}

function reviewButtonHandler(event) {
  console.log(event.target);
  // get target element from event
  let targetEl = event.target;

  // approve button was clicked
  if(targetEl.matches(".approve-btn")){
    // get the element's reimbursement id
    let reimbId = targetEl.getAttribute("data-reimbursement-id");
    let reimbDecision = "approved";
    reimbursementDescision(reimbId, reimbDecision);
  }
  // deny button was clicked
  else if(targetEl.matches(".deny-btn")){
    let reimbId = targetEl.getAttribute("data-reimbursement-id");
    let reimbDecision = "denied";
    reimbursementDescision(reimbId,reimbDecision);
  }
}

async function reimbursementDescision(reimbId, reimbDecision) {
  console.log("approve" + reimbId);

  // let empId=localStorage.getItem('user_id');
  const URL=`http://localhost:8080/reimbursements/${reimbId}`
  console.log(URL)
  const res = await fetch(URL, {
    method: 'PATCH',
    headers: {
      'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    },
    body: reimbDecision
  })

  if(res.ok){
    document.location.reload();
  } else {
    console.log(res.statusText);
  }
}

async function denyReimbursement(reimbId) {
  console.log("deny" + reimbId);
} 


reimbursementTableEl.addEventListener("click",reviewButtonHandler);
statusSearchEl.addEventListener("")