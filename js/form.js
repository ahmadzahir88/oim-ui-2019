/* attach a submit handler to the form */
function verify(cond){
  if (cond){
    verifyForm.innerHTML = '<svg style="margin: auto 42%;" xmlns="http://www.w3.org/2000/svg" width="16%" viewBox="0 0 256 256"><defs> <style>.cls-3{fill: #27ec27;}.cls-2{fill: #f7f7ef; fill-rule: evenodd;}</style> </defs> <circle class="cls-3" cx="128" cy="128" r="128"/> <path id="Rounded_Rectangle_3" data-name="Rounded Rectangle 3" class="cls-2" d="M59.933,137.063l41.874,30.756c8.325,6.115,9.77,18.294,3.226,27.2s-18.6,11.174-26.922,5.06L36.237,169.326c-8.325-6.115-9.77-18.295-3.226-27.2S51.608,130.948,59.933,137.063Z"/> <path id="Rounded_Rectangle_2" data-name="Rounded Rectangle 2" class="cls-2" d="M82.877,165.836L184.383,63.469c10.823-10.915,25.8-13.617,33.444-6.034s5.073,22.579-5.751,33.494L110.57,193.3c-10.823,10.915-25.8,13.616-33.444,6.033S72.054,176.752,82.877,165.836Z"/></svg><br><h3 style="margin: 0 auto;"><strong>Data Diri Terverifikasi</strong></h3><h4 style="margin:0 auto;">Silahkan Mengunggah Berkas</h4>';
    uploadForm.style.opacity = "1";
    verBtn.style.display = "none";
    uploadForm.style.pointerEvents = "auto";
  }
  else{
    verifyForm.innerHTML = '<svg style="margin: auto 42%;" xmlns="http://www.w3.org/2000/svg" width="16%" viewBox="0 0 256 256"><defs> <style>.cls-4{fill: #ec3612;}.cls-5{fill: #f7f7ef; fill-rule: evenodd;}</style> </defs> <circle class="cls-4" cx="128" cy="128" r="128"/> <path id="Rounded_Rectangle_1" data-name="Rounded Rectangle 1" class="cls-5" d="M206.872,48.756c9.067,9.124,8.044,24.933-2.285,35.312L83.274,205.966c-10.329,10.378-26.053,11.4-35.119,2.272s-8.044-24.933,2.285-35.312l121.313-121.9C182.081,40.65,197.805,39.632,206.872,48.756Z"/> <path id="Rounded_Rectangle_1_copy" data-name="Rounded Rectangle 1 copy" class="cls-5" d="M48.227,49.187c9.127-9.062,24.942-8.039,35.325,2.284L205.494,172.718c10.382,10.323,11.4,26.038,2.273,35.1s-24.942,8.039-35.325-2.284L50.5,84.287C40.118,73.964,39.1,58.249,48.227,49.187Z"/></svg><br><h3 style="margin: 0 auto;"><strong>Data Diri Salah</strong></h3><h4 style="margin:0 auto;">Periksa Kembali atau Hubungi Narahubung Kami</h4>';
    verifyBtn.style.display = "none";
  }
}
//////////////////////////////////////////////////
$("#verifyForm").submit(function(event) {
      /* Defining variable for verification */
      var facultyData = $('#faculty').val();
      var cabangData = $('#cabang').val();
      var kodeData = $('#kode').val();
      /* stop form from submitting normally */
      event.preventDefault();
      if (kodeData.length < 11){
          alert('Kode unik yang anda masukkan salah. Kode unik terdiri dari 11 angka.')
      }
      else{
          /* get the action attribute from the <form action=""> element */
          var $form = $( this ),
              url = $form.attr( 'action' );

          /* Send the data using post with element id name and name2*/
          var posting = $.post( url, { faculty: facultyData, cabang: cabangData, kode: kodeData } );

          /* Alerts the results */
          posting.done(function( data ) {
            alert(data);
            verify(data);
          });
      }
    });
////////////////////////////////////////////////////////////////
