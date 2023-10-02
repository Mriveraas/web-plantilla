function redirectToStore() {
    const storeSelect = document.getElementById('store');
    const selectedStore = storeSelect.value;
  
    if (selectedStore === 'falabella') {
      window.location.href = 'https://www.falabella.cl';
    } else if (selectedStore === 'paris') {
      window.location.href = 'https://www.paris.cl';
    } else if (selectedStore === 'easy') {
      window.location.href = 'https://www.easy.cl';
    }
  }
  