// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("popupTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

////////////////////////////////////////////////////////
var verifyBtn = document.getElementById("verBtn");
var uploadBtn = document.getElementById("upBtn");
var verifyForm = document.getElementById("verifyForm");
var uploadForm = document.getElementById("upload");
///////////////////////////////////////////////////////

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  verifyForm.innerHTML = '<label>Asal Fakultas</label><select id="faculty" name="faculty"><option value="fasilkom">Fakultas Ilmu Komputer </option></select><br/><label>Cabang Lomba</label><br/><select id="cabang" name="cabang"><option value="pkm-gt">PKM-GT </option></select><br/><label>Kode Unik</label><br/><input type="text" name="kode"/><br/>'
  uploadForm.style.opacity = "0.3";
  verBtn.style.display = "block";
  uploadForm.style.pointerEvents = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    verifyForm.innerHTML = '<label>Asal Fakultas</label><select id="faculty" name="faculty"><option value="fasilkom">Fakultas Ilmu Komputer </option></select><br/><label>Cabang Lomba</label><br/><select id="cabang" name="cabang"><option value="pkm-gt">PKM-GT </option></select><br/><label>Kode Unik</label><br/><input type="text" name="kode"/><br/>'
    uploadForm.style.opacity = "0.3";
    verBtn.style.display = "block";
    uploadForm.style.pointerEvents = "none";
  }
}
//////////////////////////////////////////////////////////////////////////////
