function showDetails(title, description, backImage) { 
    const modal = document.getElementById('detailsModal');
    document.getElementById('fabricTitle').innerText = title;
    document.getElementById('fabricDescription').innerText = description;
    document.getElementById('bI').src = backImage
    document.querySelector('a').href = "https://wa.me/5522998440546?text=Solicitação%20artigo: " + title 
    modal.style.display = 'flex';
}
  
function closeModal() {
    document.getElementById('detailsModal').style.display = 'none';
}
  
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
}
  