const btns = [
  {
    text: `<i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Penduduk Domisili`,
    className: "btn-sm",
    action: function (e, dt, node, config) {
      window.location.href = "./create-penduduk.html";
    },
  },
  {
    text: `<i class="fa fa-trash" aria-hidden="true"></i></i>&nbsp;Hapus Data`,
    className: "btn-sm",
    action: function (e, dt, node, config) {
      dt.ajax.reload();
    },
  },
  {
    text: `<i class="fa fa-print" aria-hidden="true"></i>&nbsp;Cetak`,
    className: "btn-sm",
    split: ["csv", "pdf", "excel"],
  },
  {
    text: `<i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Preferensi Kolom`,
    className: "btn-sm",
    extend: "colvis",
  },
];

// Call the dataTables jQuery plugin
$(document).ready(function () {
  const table = $("#dataTable").DataTable({
    lengthChange: false,
    buttons: btns,
  });

  table.buttons().container().appendTo("#dataTable_wrapper .col-md-6:eq(0)");

  const tableKeluarga = $("#dataTable-keluarga").DataTable({
    lengthChange: false,
    buttons: btns,
  });

  tableKeluarga
    .buttons()
    .container()
    .appendTo("#dataTable-keluarga_wrapper .col-md-6:eq(0)");

  const tablePenduduk = $("#dataTable-penduduk").DataTable({
    lengthChange: false,
    buttons: btns,
  });

  tablePenduduk
    .buttons()
    .container()
    .appendTo("#dataTable-penduduk_wrapper .col-md-6:eq(0)");

  const tableRumahTangga = $("#dataTable-rumah-tangga").DataTable({
    lengthChange: false,
    buttons: btns,
  });

  tableRumahTangga
    .buttons()
    .container()
    .appendTo("#dataTable-rumah-tangga_wrapper .col-md-6:eq(0)");

  const tableKelompok = $("#dataTable-kelompok").DataTable({
    lengthChange: false,
    buttons: btns,
  });

  tableKelompok
    .buttons()
    .container()
    .appendTo("#dataTable-kelompok_wrapper .col-md-6:eq(0)");
});
