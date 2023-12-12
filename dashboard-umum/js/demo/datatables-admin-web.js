// Call the dataTables jQuery plugin

const defaultButton = [
  {
    text: `<i class="fa fa-trash" aria-hidden="true"></i></i>&nbsp;Hapus Data`,
    className: "btn-sm",
    action: function (e, dt, node, config) {
      dt.ajax.reload();
    },
  },
  {
    text: `<i class="fa fa-print" aria-hidden="true"></i>&nbsp;Cetak Data`,
    className: "btn-sm",
    split: ["csv", "pdf", "excel"],
  },
  {
    text: `<i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Preferensi Kolom`,
    className: "btn-sm",
    extend: "colvis",
  },
];

$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");

  const tablePendidikanDalamKK = $("#dataTable-sekilas-info").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePendidikanDalamKK
    .buttons()
    .container()
    .appendTo("#dataTable-sekilas-info_wrapper .col-md-6:eq(0)");

  const tablePendidikanSedangDitempuh = $("#dataTable-agenda-desa").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePendidikanSedangDitempuh
    .buttons()
    .container()
    .appendTo("#dataTable-agenda-desa_wrapper .col-md-6:eq(0)");

  const tablePekerjaan = $("#dataTable-produk-desa").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePekerjaan
    .buttons()
    .container()
    .appendTo("#dataTable-produk-desa_wrapper .col-md-6:eq(0)");

  const tableStatusPerkawinan = $("#dataTable-panduan-layanan-desa").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableStatusPerkawinan
    .buttons()
    .container()
    .appendTo("#dataTable-panduan-layanan-desa_wrapper .col-md-6:eq(0)");

  const tableAgama = $("#dataTable-peraturan-desa").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableAgama
    .buttons()
    .container()
    .appendTo("#dataTable-peraturan-desa_wrapper .col-md-6:eq(0)");

  const tableJenisKelamin = $("#dataTable-laporan-desa").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableJenisKelamin
    .buttons()
    .container()
    .appendTo("#dataTable-laporan-desa_wrapper .col-md-6:eq(0)");

  const tableMenuStatis = $("#dataTable-menu-statis").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableMenuStatis
    .buttons()
    .container()
    .appendTo("#dataTable-menu-statis_wrapper .col-md-6:eq(0)");

  const tableMenuDinamis = $("#dataTable-pengolahan-kategori").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableMenuDinamis
    .buttons()
    .container()
    .appendTo("#dataTable-pengolahan-kategori_wrapper .col-md-6:eq(0)");

  const tableDaftarKomentar = $("#dataTable-daftar-komentar").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableDaftarKomentar
    .buttons()
    .container()
    .appendTo("#dataTable-daftar-komentar_wrapper .col-md-6:eq(0)");

  const tableDaftarGaleri = $("#dataTable-daftar-galeri").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableDaftarGaleri
    .buttons()
    .container()
    .appendTo("#dataTable-daftar-galeri_wrapper .col-md-6:eq(0)");

  const tableDaftarDokumen = $("#dataTable-daftar-dokumen").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableDaftarDokumen
    .buttons()
    .container()
    .appendTo("#dataTable-daftar-dokumen_wrapper .col-md-6:eq(0)");

  const tableSocialMedia = $("#dataTable-social-media").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableSocialMedia
    .buttons()
    .container()
    .appendTo("#dataTable-social-media_wrapper .col-md-6:eq(0)");
});
