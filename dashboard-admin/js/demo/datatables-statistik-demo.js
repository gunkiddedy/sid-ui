// Call the dataTables jQuery plugin

const defaultButton = [
  {
    text: `<i class="fa fa-trash" aria-hidden="true"></i></i>&nbsp;Hapus Data`,
    action: function (e, dt, node, config) {
      dt.ajax.reload();
    },
  },
  {
    text: `<i class="fa fa-print" aria-hidden="true"></i>&nbsp;Cetak Data`,
    split: ["csv", "pdf", "excel"],
  },
  {
    text: `<i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Preferensi Kolom`,
    extend: "colvis",
  },
];

$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");

  const tablePendidikanDalamKK = $("#dataTable-pendidikan-dalam-kk").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePendidikanDalamKK
    .buttons()
    .container()
    .appendTo("#dataTable-pendidikan-dalam-kk_wrapper .col-md-6:eq(0)");

  const tablePendidikanSedangDitempuh = $(
    "#dataTable-pendidikan-sedang-ditempuh"
  ).DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePendidikanSedangDitempuh
    .buttons()
    .container()
    .appendTo("#dataTable-pendidikan-sedang-ditempuh_wrapper .col-md-6:eq(0)");

  const tablePekerjaan = $("#dataTable-pekerjaan").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePekerjaan
    .buttons()
    .container()
    .appendTo("#dataTable-pekerjaan_wrapper .col-md-6:eq(0)");

  const tableStatusPerkawinan = $("#dataTable-status-perkawinan").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableStatusPerkawinan
    .buttons()
    .container()
    .appendTo("#dataTable-status-perkawinan_wrapper .col-md-6:eq(0)");

  const tableAgama = $("#dataTable-agama").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableAgama
    .buttons()
    .container()
    .appendTo("#dataTable-agama_wrapper .col-md-6:eq(0)");

  const tableJenisKelamin = $("#dataTable-jenis-kelamin").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableJenisKelamin
    .buttons()
    .container()
    .appendTo("#dataTable-jenis-kelamin_wrapper .col-md-6:eq(0)");

  const tableWargaNegara = $("#dataTable-warga-negara").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableWargaNegara
    .buttons()
    .container()
    .appendTo("#dataTable-warga-negara_wrapper .col-md-6:eq(0)");

  const tableGolonganDarah = $("#dataTable-golongan-darah").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableGolonganDarah
    .buttons()
    .container()
    .appendTo("#dataTable-golongan-darah_wrapper .col-md-6:eq(0)");

  const tablePenyandangCacat = $("#dataTable-penyandang-cacat").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tablePenyandangCacat
    .buttons()
    .container()
    .appendTo("#dataTable-penyandang-cacat_wrapper .col-md-6:eq(0)");

  const tableStatusPenduduk = $("#dataTable-status-penduduk").DataTable({
    lengthChange: false,
    buttons: defaultButton,
  });

  tableStatusPenduduk
    .buttons()
    .container()
    .appendTo("#dataTable-status-penduduk_wrapper .col-md-6:eq(0)");
});
