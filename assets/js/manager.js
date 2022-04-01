window.addEventListener('load', (event) =>{
  getAllReimbursements();
});

const reimbursementTableEl = document.querySelector("#reimbursement-table");
const statusSearchEl = document.querySelector("#status-search");

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
    

    for (const reimbursement of reimbursements) {
      
      // Format the dates
      let submissionDate = reimbursement.reimbSubmitted?new Date(reimbursement.reimbSubmitted).toLocaleString():null

      let resolutionDate = reimbursement.reimbResolved?new Date(reimbursement.reimbResolved).toLocaleString():null

      let resolved = (reimbursement.reimbStatus === "Approved" || reimbursement.reimbStatus === "Denied");


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
      // // create image button
      // let imageButtonEl = document.createElement('button');
      // imageButtonEl.textContent = "View Copy";
      // imageButtonEl.className = "image-btn";
      // imageButtonEl.setAttribute("data-reimbursement-id",reimbursement.reimbId);
      // let td6 = document.createElement('td');
      // td6.appendChild(imageButtonEl);
      let imagelinkEl = document.createElement('a');
      imagelinkEl.setAttribute("href",`http://localhost:8080/reimbursements/${reimbursement.reimbId}/image`);
      imagelinkEl.setAttribute("target","_blank");
      imagelinkEl.innerText="View Copy";
      imagelinkEl.style.textDecoration = "none";
      imagelinkEl.style.color="#2d5986";
      let td6 = document.createElement('td');
      td6.appendChild(imagelinkEl);
      // td6.innerText = reimbursement.reimbReceipt;  
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
      if(resolved) approveButtonEl.disabled = true;
      let td11 = document.createElement('td');
      td11.appendChild(approveButtonEl);

      // create deny button
      let denyButtonEl = document.createElement('button');
      denyButtonEl.textContent = "Deny";
      denyButtonEl.className = "deny-btn";
      denyButtonEl.setAttribute("data-reimbursement-id",reimbursement.reimbId);
      if(resolved) denyButtonEl.disabled = true;
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
      
      if(resolved) trEl.classList.add("resolved");

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

function filterResults(event){
  
  // Declare variables
  let txtValue;
  let tr = reimbursementTableEl.getElementsByTagName('tr');
  let th=reimbursementTableEl.getElementsByTagName('th');
  let reimbFilterChoice = event.target.value;
  
  // Reload the page to dispaly all the reimbursements
  if(reimbFilterChoice === "all") {
    document.location.reload();
  } else {
    // Loop through all table rows, and hide those who don't match the filter criteria
    for (let index = 0; index < tr.length; index++) {
      const element = tr[index].getElementsByTagName('td')[8];
      if(element) {
        txtValue = element.textContent
        if(txtValue.indexOf(reimbFilterChoice) > -1){
          tr[index].style.display="";
        } else {
          tr[index].style.display="none";
        }
      }
    }
  }
}

reimbursementTableEl.addEventListener("click",reviewButtonHandler);
statusSearchEl.addEventListener("change",filterResults);