

document.addEventListener("DOMContentLoaded", () => {
  console.log('rijvi')
    const firstModal = document.getElementById("my_modal_3");
    const secondModal = document.getElementById("my_modal_2");
    const thirdModal = document.getElementById("my_modal_4");
    const loginLink = document.getElementById("loginAcc");
    const createLink = document.getElementById("createAcc");
    const forgetLink = document.getElementById("forgetPass")
    const back = document.getElementById("back");
  
    if (firstModal && secondModal && loginLink && createLink && forgetLink) {
      loginLink.addEventListener("click", () => {
        firstModal.close();
        secondModal.showModal(); 
      });
  
      createLink.addEventListener("click", () => {
        secondModal.close(); 
        firstModal.showModal();
      });
      forgetLink.addEventListener("click", ()=> {
        firstModal.close();
        secondModal.close();
        thirdModal.showModal();
      })
      back.addEventListener("click", () => {
        firstModal.close();
        thirdModal.close();
        secondModal.showModal();
      })
    } else {
      console.error(
        "Modal not found"
      );
    }
  });

function showModal() {
  const modal = document.getElementById('my_modal_3');
  if (modal) {
    modal.showModal();
  }
}

function toggleFunc() {
  const modal = document.getElementById('my_modal_3');
  if (modal) {
    modal.close();
  }
}
function toggleFunc() {
  const modal = document.getElementById('my_modal_3');
  if (modal) {
    modal.close();
  }
}



function showModalInventory() {
  const modal = document.getElementById('my_modal_inventory');
  if (modal) {
    modal.showModal();
  }
}
function showModalDashboard() {
  const modal = document.getElementById('my_modal_prescription');
  if (modal) {
    modal.showModal();
  }
}

function showModalPrescription2() {
  const modal = document.getElementById('my_modal_prescription2');
  const modal2 = document.getElementById('my_modal_prescription');
  if (modal) {
    modal2.close();
    modal.showModal();
  } 
}


