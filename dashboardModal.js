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
  