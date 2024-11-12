document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("initiative-list").getElementsByTagName("tbody")[0];
  
    // Add a sample row for demonstration
    const newRow = table.insertRow();
    newRow.innerHTML = '<td contenteditable="true"></td><td contenteditable="true"></td>';
  });
  