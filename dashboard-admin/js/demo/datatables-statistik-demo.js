// Call the dataTables jQuery plugin
$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");

  const tablePendidikanDalamKK = $("#dataTable-pendidikan-dalam-kk").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tablePendidikanDalamKK
    .buttons()
    .container()
    .appendTo("#dataTable-pendidikan-dalam-kk_wrapper .col-md-6:eq(0)");

  const tablePendidikanSedangDitempuh = $(
    "#dataTable-pendidikan-sedang-ditempuh"
  ).DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tablePendidikanSedangDitempuh
    .buttons()
    .container()
    .appendTo("#dataTable-pendidikan-sedang-ditempuh_wrapper .col-md-6:eq(0)");

  const tablePekerjaan = $("#dataTable-pekerjaan").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tablePekerjaan
    .buttons()
    .container()
    .appendTo("#dataTable-pekerjaan_wrapper .col-md-6:eq(0)");

  const tableStatusPerkawinan = $("#dataTable-status-perkawinan").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tableStatusPerkawinan
    .buttons()
    .container()
    .appendTo("#dataTable-status-perkawinan_wrapper .col-md-6:eq(0)");

  const tableAgama = $("#dataTable-agama").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tableAgama
    .buttons()
    .container()
    .appendTo("#dataTable-agama_wrapper .col-md-6:eq(0)");

  const tableJenisKelamin = $("#dataTable-jenis-kelamin").DataTable({
    lengthChange: false,
    buttons: [
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
    ],
  });

  tableJenisKelamin
    .buttons()
    .container()
    .appendTo("#dataTable-jenis-kelamin_wrapper .col-md-6:eq(0)");
});
